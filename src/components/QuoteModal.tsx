import { useEffect } from "react";
import {  ArrowRight, ArrowUp, X } from "lucide-react";

type QuoteModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      <div className="modal-backdrop show" onClick={onClose} />

      <div
        className="quote-modal show"
        aria-hidden={false}
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content quote-modal-content">
            <div className="modal-header border-0">
              <div>
                <p className="modal-kicker">Request a Quote</p>
                <h5 className="modal-title" id="quoteModalLabel">
                  Tell us about your packaging requirement
                </h5>
              </div>
              <button type="button" className="modal-close" aria-label="Close quote form" onClick={onClose}>
                <X size={20} strokeWidth={1.8} aria-hidden="true" />
              </button>
            </div>

            <div className="modal-body pt-3">
              <form id="quoteForm">
                <div className="row g-3">
                  <div className="col-md-6">
                    <label htmlFor="quoteName" className="form-label">Full name</label>
                    <input type="text" className="form-control" id="quoteName" placeholder="Your name" required />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="quoteCompany" className="form-label">Company</label>
                    <input type="text" className="form-control" id="quoteCompany" placeholder="Company name" />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="quoteEmail" className="form-label">Email</label>
                    <input type="email" className="form-control" id="quoteEmail" placeholder="name@company.com" required />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="quotePhone" className="form-label">Phone</label>
                    <div className="input-group quote-input-group">
                      <select className="form-select quote-country-code" id="quoteCountryCode" aria-label="Country code" defaultValue="+91">
                        <option value="+91">+91</option>
                        <option value="+1">+1</option>
                        <option value="+44">+44</option>
                        <option value="+61">+61</option>
                        <option value="+971">+971</option>
                        <option value="+966">+966</option>
                      </select>
                      <input type="tel" className="form-control quote-phone-input" id="quotePhone" placeholder="00000 00000" />
                    </div>
                  </div>
                  <div className="col-12">
                    <label htmlFor="quoteMessage" className="form-label">Project details</label>
                    <textarea className="form-control" id="quoteMessage" rows={4} placeholder="Tell us quantity, size, packaging type, and timeline" />
                  </div>
                </div>

                <div className="d-flex justify-content-end align-items-center mt-4">
                  <button type="submit" className="button primary submit-quote-btn">
                    Send inquiry <ArrowRight size={16} strokeWidth={1.8} aria-hidden="true" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
