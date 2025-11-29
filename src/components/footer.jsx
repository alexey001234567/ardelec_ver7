import React from "react";
import backgroundImage from "../assets/background-2.jpg";
import logo from '../assets/logo-dark1.png';

export default function Footer() {
  return (
<footer
  id="footer"
  className="relative overflow-hidden border-0 m-0 text-gray-800 bg-[#f4f4f4]"
  style={{
    backgroundImage: `url(${backgroundImage})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  }}
  aria-labelledby="footer-heading"
>
  <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-8 gap-x-6">

      {/* Logo column */}
      <div className="lg:col-span-4">
        <a href="index.html" className="block">
          <img
            src={logo}
            alt="ARDELEC"
            width={220}
            className="mx-auto mb-3 w-[220px] h-auto"
          />
        </a>
        <p className="text-center text-gray-500 text-base mb-0">
          considering the energy
        </p>
      </div>

      {/* Navigation column */}
      <div className="hidden lg:block lg:col-span-2 lg:col-start-6">
        <h4 id="footer-heading" className="text-lg font-bold text-gray-900 mb-6">
          Navigation
        </h4>
        <ul className="space-y-3">
          <li>
            <a href="index.html" className="inline-flex hover:text-red-600 items-center gap-3 text-gray-800 hover:text-primary transition">
              <ChevronRightIcon />
              Home
            </a>
          </li>
          <li>
            <a href="company.html" className="inline-flex hover:text-red-600 items-center gap-3 text-gray-800 hover:text-primary transition">
              <ChevronRightIcon />
              Company
            </a>
          </li>
          <li>
            <a href="services.html" className="inline-flex items-center hover:text-red-600 gap-3 text-gray-800 hover:text-primary transition">
              <ChevronRightIcon />
              Activities
            </a>
          </li>
          <li>
            <a href="contact.html" className="inline-flex items-center hover:text-red-600 gap-3 text-gray-800 hover:text-primary transition">
              <ChevronRightIcon />
              Contact Us
            </a>
          </li>
        </ul>
      </div>

      {/* Contacts column */}
<div className="lg:col-span-5 lg:col-start-8">
  <h4 className="text-lg font-bold text-gray-900 mb-6">Contact Us</h4>

  <div className="space-y-4">
    {/* Contact card 1 */}
    <address className="not-italic border border-gray-200 rounded-lg p-4 bg-white shadow-sm">
      <div className="flex items-start gap-4">
        <span className="mt-1 text-gray-700" aria-hidden>
          <LocationIcon />
        </span>

        <div className="text-sm text-gray-800">
          <p className="font-semibold text-gray-900">ARDELEC INDUSTRIAL SOLUTIONS LTD</p>
          <p>128, City Road, London, EC1V 2NX, UK</p>
          <p className="text-xs text-gray-500 mt-1">Company Registration Number: 14794597</p>
        </div>
      </div>

      <div className="mt-3 flex flex-col sm:flex-row sm:items-center sm:gap-4 gap-2">
        <a
          href="tel:+442036933963"
          className="inline-flex items-center gap-2 text-sm text-gray-800 hover:text-primary transition"
        >
          <PhoneIcon />
          <span>+44 203 693 3963</span>
        </a>

        <a
          href="mailto:info@ardelecindustrial.com"
          className="inline-flex items-center gap-2 text-sm text-gray-800 hover:text-primary transition"
        >
          <EmailIcon />
          <span>info@ardelecindustrial.com</span>
        </a>
      </div>
    </address>

    {/* Contact card 2 */}
    <address className="not-italic border border-gray-200 rounded-lg p-4 bg-white shadow-sm">
      <div className="flex items-start gap-4">
        <span className="mt-1 text-gray-700" aria-hidden>
          <LocationIcon />
        </span>

        <div className="text-sm text-gray-800">
          <p className="font-semibold text-gray-900">Meta FX Global Software and Trade Ltd</p>
          <p>Esentepe, Keskin Kalem street, Arya Plaza Nr: 17/2, Istanbul 34394</p>
        </div>
      </div>

      <div className="mt-3 flex flex-col sm:flex-row sm:items-center sm:gap-4 gap-2">
        <a
          href="tel:+905353795318"
          className="inline-flex items-center gap-2 text-sm text-gray-800 hover:text-primary transition"
        >
          <PhoneIcon />
          <span>+90 535 379 53 18</span>
        </a>

        <a
          href="mailto:sales@ardelecindustrial.com"
          className="inline-flex items-center gap-2 text-sm text-gray-800 hover:text-primary transition"
        >
          <EmailIcon />
          <span>sales@ardelecindustrial.com</span>
        </a>
      </div>
    </address>
  </div>
</div>

      {/* Footer bottom */}
      <div className="lg:col-span-12 mt-8">
        <div className="text-center">
          <p className="text-gray-700 mb-4">ARDELEC © 2025. All Rights Reserved.</p>

          <div className="flex items-center justify-center gap-6">
            <a href="http://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram" className="text-gray-800 hover:text-primary transition">
              <SocialInstagram />
            </a>
            <a href="http://www.twitter.com/" target="_blank" rel="noreferrer" aria-label="Twitter" className="text-gray-800 hover:text-primary transition">
              <SocialTwitter />
            </a>
            <a href="http://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook" className="text-gray-800 hover:text-primary transition">
              <SocialFacebook />
            </a>
          </div>
        </div>
      </div>

    </div>
  </div>

  {/* Decorative square */}
  <div className="hidden lg:block absolute -left-28 top-0">
    <div className="w-28 h-28 bg-gray-900/90" />
  </div>
</footer>

  );
}

/* ---------- Inline SVG components ---------- */

function ChevronRightIcon() {
  return (
    <svg className="w-3 h-3 text-red-500" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg className="w-6 h-6 text-primary shrink-0" viewBox="0 0 32 32" fill="currentColor" aria-hidden>
      <path d="M16 2C10.5 2 6 6.5 6 12c0 6.5 10 17 10 17s10-10.5 10-17c0-5.5-4.5-10-10-10zm0 15a5 5 0 110-10 5 5 0 010 10z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M6.6 10.2a15.05 15.05 0 006.2 6.2l1.8-1.8a1 1 0 011.1-.2c1.2.5 2.5.8 3.9.8a1 1 0 011 1v3.5a1 1 0 01-1 1A19 19 0 013 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.4.3 2.7.8 3.9.2.4.1.9-.2 1.1l-1.8 1.8z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M3 5a2 2 0 012-2h14a2 2 0 012 2v1l-9 6L3 6V5z" />
      <path d="M21 8.1v8.9a2 2 0 01-2 2H5a2 2 0 01-2-2V8.1l9 6 9-6z" />
    </svg>
  );
}

function SocialInstagram() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 6.5A4.5 4.5 0 1016.5 13 4.5 4.5 0 0012 8.5zM18 7.2a1.2 1.2 0 11-1.2-1.2A1.2 1.2 0 0118 7.2z" />
    </svg>
  );
}

function SocialTwitter() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M22 5.8c-.7.3-1.4.5-2.2.6a3.8 3.8 0 001.6-2.1c-.7.4-1.5.7-2.4.9A3.8 3.8 0 0016.1 4c-2.1 0-3.7 1.9-3.3 3.9-3-.2-5.7-1.6-7.5-3.9A3.9 3.9 0 004 8.3c0 1.3.6 2.4 1.6 3.1a3.6 3.6 0 01-1.7-.5v.1c0 1.9 1.3 3.6 3 4-.4.1-.8.2-1.2.2-.3 0-.6 0-.9-.1.6 1.8 2.2 3.1 4.2 3.1A7.6 7.6 0 012 19.5a10.7 10.7 0 005.8 1.7c7 0 10.8-5.8 10.8-10.8v-.5c.7-.5 1.4-1.1 1.9-1.8-.6.3-1.4.6-2.2.7z" />
    </svg>
  );
}

function SocialFacebook() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M22 12a10 10 0 10-11.5 9.9v-7h-2.2v-2.9h2.2V9.3c0-2.2 1.3-3.4 3.2-3.4.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.3v1.6h2.2l-.3 2.9h-1.9v7A10 10 0 0022 12z" />
    </svg>
  );
}  