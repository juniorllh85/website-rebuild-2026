import React from 'react';

export default function Footer({ onDonateClick }) {
  return (
    <footer className="border-t bg-slate-900 text-white">
      <div className="mx-auto max-w-6xl px-4 py-10 text-sm flex flex-col sm:flex-row gap-8 sm:items-center sm:justify-between">
        <div>
          <p className="m-0 font-bold">
            © {new Date().getFullYear()} The Golden Years Foundation · 501(c)(3)
          </p>
          <p className="mt-1 text-white/60">thegoldenyearsfoundation@gmail.com</p>
        </div>
        <div className="flex gap-6 text-white/80">
          <a href="#inicio" className="hover:text-white">
            Home
          </a>
          <button onClick={() => onDonateClick(50)} className="hover:text-white text-left">
            Donate
          </button>
          <a href="#contacto" className="hover:text-white">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
