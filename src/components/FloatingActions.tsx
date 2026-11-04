"use client";

import { useEffect, useState } from "react";
import { ArrowUp, UserRound, X } from "lucide-react";

const WHATSAPP_NUMBER = "918169604127";
const WHATSAPP_DISPLAY = "+91 81696 04127";
const CONTACT_EMAIL = "sales@arvispackaging.com";

const WHATSAPP_PATH =
  "M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.21 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35ZM12.05 21.5h-.01a9.4 9.4 0 0 1-4.8-1.31l-.34-.2-3.57.93.95-3.48-.22-.36a9.43 9.43 0 1 1 17.47-5.01 9.44 9.44 0 0 1-9.48 9.43Zm8.03-17.47A11.28 11.28 0 0 0 12.05.7C5.8.7.7 5.78.7 12.03c0 2 .52 3.95 1.52 5.66L.6 23.3l5.74-1.5a11.33 11.33 0 0 0 5.7 1.45h.01c6.25 0 11.34-5.08 11.35-11.33 0-3.03-1.18-5.87-3.32-8.01Z";

export default function FloatingActions() {
  const [chatOpen, setChatOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 400);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!chatOpen) return;
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setChatOpen(false);
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [chatOpen]);

  return (
    <>
      <div className="wa-widget">
        <div
          className={`wa-popup ${chatOpen ? "open" : ""}`}
          id="wa-popup"
          role="dialog"
          aria-label="WhatsApp chat"
          aria-hidden={!chatOpen}
        >
          <div className="wa-popup-head">
            <p className="wa-popup-title">WhatsApp Chat</p>
            <button type="button" aria-label="Close chat" onClick={() => setChatOpen(false)}>
              <X size={18} strokeWidth={2} aria-hidden="true" />
            </button>
          </div>
          <p>
            Hi! Click one of our representatives below to chat on WhatsApp or send us an email to{" "}
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          </p>
          <a
            className="wa-contact"
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noreferrer"
            tabIndex={chatOpen ? 0 : -1}
          >
            <span className="wa-avatar" aria-hidden="true">
              <UserRound size={30} strokeWidth={1.6} />
            </span>
            <span className="wa-contact-copy">
              <strong>Contact Us</strong>
              <span>{WHATSAPP_DISPLAY}</span>
            </span>
          </a>
        </div>

        <button
          type="button"
          className="wa-trigger"
          aria-label={chatOpen ? "Close WhatsApp chat" : "Chat on WhatsApp"}
          aria-expanded={chatOpen}
          aria-controls="wa-popup"
          onClick={() => setChatOpen((open) => !open)}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d={WHATSAPP_PATH} />
          </svg>
        </button>
      </div>

      <button
        type="button"
        className={`back-to-top ${showTop ? "visible" : ""}`}
        aria-label="Back to top"
        tabIndex={showTop ? 0 : -1}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <ArrowUp size={20} strokeWidth={2} aria-hidden="true" />
      </button>
    </>
  );
}
