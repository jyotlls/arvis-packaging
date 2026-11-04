"use client";

import { useRef, useState, type FormEvent } from "react";
import { ArrowUpRight, CheckCircle2, Mail, MapPin, MoveRight, Navigation, Phone, Warehouse } from "lucide-react";
import PageBanner from "../PageBanner";
import SiteShell from "../SiteShell";
import { CONTACT_DETAILS as C } from "../../data/contact";

const COUNTRY_CODES = ["+91", "+1", "+44", "+61", "+971", "+966"];
const PRODUCTS = ["Paper packaging", "Plastic packaging", "Molded fiber (bagasse)", "Aluminum packaging", "Custom / branded packaging", "Multiple / not sure yet"];

type Field = "name" | "email" | "phone" | "country" | "product" | "message" | "consent";
type Values = Record<Exclude<Field, "consent">, string> & { code: string; consent: boolean };

const EMPTY: Values = { name: "", email: "", code: "+91", phone: "", country: "", product: "", message: "", consent: false };

// every field is compulsory; each rule returns an error message or ""
const validate = (v: Values): Partial<Record<Field, string>> => {
  const e: Partial<Record<Field, string>> = {};
  if (v.name.trim().length < 2) e.name = "Please enter your full name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim())) e.email = "Please enter a valid email address.";
  if (!/^[0-9 ()-]{6,18}$/.test(v.phone.trim()) || v.phone.replace(/\D/g, "").length < 6)
    e.phone = "Please enter a valid phone number.";
  if (v.country.trim().length < 2) e.country = "Please enter your country.";
  if (!v.product) e.product = "Please choose a product category.";
  if (v.message.trim().length < 15) e.message = "Please tell us a little more (at least 15 characters).";
  if (!v.consent) e.consent = "Please agree so we can contact you about your enquiry.";
  return e;
};

export default function ContactPage() {
  const [values, setValues] = useState<Values>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});
  const [sent, setSent] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const set = <K extends keyof Values>(key: K, value: Values[K]) => {
    setValues((prev) => ({ ...prev, [key]: value }));
    // clear a field's error as soon as it is corrected
    if (errors[key as Field]) setErrors((prev) => ({ ...prev, [key]: validate({ ...values, [key]: value })[key as Field] }));
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    const first = Object.keys(found)[0];
    if (first) {
      formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }
    // No server endpoint yet: hand the enquiry to the visitor's email app, pre-filled.
    const body = [
      `Name: ${values.name}`,
      `Email: ${values.email}`,
      `Phone: ${values.code} ${values.phone}`,
      `Country: ${values.country}`,
      `Product interest: ${values.product}`,
      "",
      values.message,
    ].join("\n");
    window.location.href = `mailto:${C.email}?subject=${encodeURIComponent(`Enquiry from ${values.name}`)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  const fieldProps = (name: Field) => ({
    name,
    id: `ct-${name}`,
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": errors[name] ? `ct-${name}-error` : undefined,
  });
  const errorText = (name: Field) =>
    errors[name] ? (
      <span className="ct-error" id={`ct-${name}-error`}>
        {errors[name]}
      </span>
    ) : null;

  return (
    <SiteShell activePage="contact">
      {() => (
        <main className="ct">
          <PageBanner title="Contact Us" image="/assets/banner/inner-contact-header.webp" />

          {/* FORM + DETAILS */}
          <section className="ct-main" aria-labelledby="ct-form-title">
            <div className="ct-main-head">
              <p className="eyebrow">
                <span className="brand-lines"></span>GET IN TOUCH
              </p>
              <h2 id="ct-form-title">
                Let&apos;s Discuss Your <br /> <em>Packaging Requirements</em>
              </h2>
            </div>

            <div className="ct-form-card">
              {sent ? (
                <div className="ct-success" role="status">
                  <CheckCircle2 size={40} strokeWidth={1.5} aria-hidden="true" />
                  <h3>Thank you, {values.name.split(" ")[0]}.</h3>
                  <p>
                    Your email app should now be open with your enquiry ready to send to {C.email}. If it
                    didn&apos;t open, email us directly or call us using the details on this page.
                  </p>
                  <button
                    type="button"
                    className="button text"
                    onClick={() => {
                      setValues(EMPTY);
                      setSent(false);
                    }}
                  >
                    Send another enquiry <MoveRight size={16} strokeWidth={1.8} aria-hidden="true" />
                  </button>
                </div>
              ) : (
                <form className="ct-form" ref={formRef} onSubmit={onSubmit} noValidate>
                  <div className="ct-field">
                    <label htmlFor="ct-name">Full name <span aria-hidden="true">*</span></label>
                    <input {...fieldProps("name")} type="text" autoComplete="name" required value={values.name} onChange={(e) => set("name", e.target.value)} />
                    {errorText("name")}
                  </div>

                  <div className="ct-field">
                    <label htmlFor="ct-email">Email address <span aria-hidden="true">*</span></label>
                    <input {...fieldProps("email")} type="email" autoComplete="email" required value={values.email} onChange={(e) => set("email", e.target.value)} />
                    {errorText("email")}
                  </div>

                  <div className="ct-field">
                    <label htmlFor="ct-phone">Phone number <span aria-hidden="true">*</span></label>
                    <div className="ct-phone">
                      <select aria-label="Country code" value={values.code} onChange={(e) => set("code", e.target.value)}>
                        {COUNTRY_CODES.map((c) => (
                          <option key={c} value={c}>{c}</option>
                        ))}
                      </select>
                      <input {...fieldProps("phone")} type="tel" autoComplete="tel-national" required value={values.phone} onChange={(e) => set("phone", e.target.value)} />
                    </div>
                    {errorText("phone")}
                  </div>

                  <div className="ct-field">
                    <label htmlFor="ct-country">Country <span aria-hidden="true">*</span></label>
                    <input {...fieldProps("country")} type="text" autoComplete="country-name" required value={values.country} onChange={(e) => set("country", e.target.value)} />
                    {errorText("country")}
                  </div>

                  <div className="ct-field ct-field-wide">
                    <label htmlFor="ct-product">Product interest <span aria-hidden="true">*</span></label>
                    <select {...fieldProps("product")} required value={values.product} onChange={(e) => set("product", e.target.value)}>
                      <option value="" disabled>Choose a category</option>
                      {PRODUCTS.map((p) => (
                        <option key={p} value={p}>{p}</option>
                      ))}
                    </select>
                    {errorText("product")}
                  </div>

                  <div className="ct-field ct-field-wide ct-field-message">
                    <label htmlFor="ct-message">Your requirement <span aria-hidden="true">*</span></label>
                    <textarea
                      {...fieldProps("message")}
                      rows={5}
                      required
                      placeholder="Product types, sizes, quantities and timelines"
                      value={values.message}
                      onChange={(e) => set("message", e.target.value)}
                    />
                    {errorText("message")}
                  </div>

                  <div className="ct-field ct-field-wide ct-consent">
                    <label>
                      <input
                        {...fieldProps("consent")}
                        type="checkbox"
                        required
                        checked={values.consent}
                        onChange={(e) => set("consent", e.target.checked)}
                      />
                      <span>I agree that Arvis Packaging may contact me about this enquiry. <span aria-hidden="true">*</span></span>
                    </label>
                    {errorText("consent")}
                  </div>

                  <div className="ct-field-wide ct-submit">
                    <button type="submit" className="button primary">
                      Send enquiry <MoveRight size={18} strokeWidth={2} aria-hidden="true" />
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* contact details panel */}
            <aside className="ct-info" aria-label="Contact details">
              <div className="ct-info-block">
                <span className="ct-info-icon"><MapPin size={20} strokeWidth={1.6} aria-hidden="true" /></span>
                <div>
                  <h3>{C.company}</h3>
                  {/* the whole address opens directions in Google Maps */}
                  <a
                    className="ct-address-link"
                    href={C.mapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Get directions to ${C.company} (opens Google Maps in a new tab)`}
                  >
                    <address>
                      {C.address.map((line) => (
                        <span key={line}>{line}</span>
                      ))}
                    </address>
                  </a>
                </div>
              </div>

              <div className="ct-info-block">
                <span className="ct-info-icon"><Warehouse size={20} strokeWidth={1.6} aria-hidden="true" /></span>
                <div>
                  <h3>Warehouses</h3>
                  <ul className="ct-warehouses">
                    {C.warehouses.map((w) => (
                      <li key={w.city}>
                        <strong>{w.city}</strong>
                        <span>{w.region}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="ct-info-block">
                <span className="ct-info-icon"><Mail size={20} strokeWidth={1.6} aria-hidden="true" /></span>
                <div>
                  <h3>Email</h3>
                  <a href={`mailto:${C.email}`}>{C.email}</a>
                </div>
              </div>

              <div className="ct-info-block">
                <span className="ct-info-icon"><Phone size={20} strokeWidth={1.6} aria-hidden="true" /></span>
                <div>
                  <h3>Phone</h3>
                  {C.phones.map((p) => (
                    <a key={p.tel} href={`tel:${p.tel}`} className="ct-phone-link">
                      <small>{p.label}</small> {p.display}
                    </a>
                  ))}
                </div>
              </div>
            </aside>
          </section>

          {/* MAP */}
          <section className="ct-map" aria-label="Location map">
            <iframe
              title={`Map showing ${C.company}, Morbi, Gujarat`}
              src={C.mapEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <div className="ct-map-card">
              <span className="ct-info-icon"><Navigation size={20} strokeWidth={1.6} aria-hidden="true" /></span>
              <div>
                <strong>Head office</strong>
                <span>Morbi, Gujarat, India</span>
              </div>
              <a className="button primary" href={C.mapsLink} target="_blank" rel="noopener noreferrer">
                Open in Maps <ArrowUpRight size={16} strokeWidth={1.8} aria-hidden="true" />
              </a>
            </div>
          </section>
        </main>
      )}
    </SiteShell>
  );
}
