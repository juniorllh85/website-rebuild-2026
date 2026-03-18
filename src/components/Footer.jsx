import React from 'react';
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa';

export default function Footer({ onDonateClick }) {
  return (
    <footer className="border-t bg-slate-900 text-white">
      <div className="mx-auto max-w-6xl px-4 py-10 text-sm flex flex-col sm:flex-row gap-8 sm:items-center sm:justify-between">
        <div className="space-y-4">
          <div>
            <p className="m-0 font-bold text-lg">
              © {new Date().getFullYear()} The Golden Years Foundation
            </p>
            <p className="mt-1 text-white/60">501(c)(3) Nonprofit Organization</p>
            <p className="mt-1 text-white/60">thegoldenyearsfoundation@gmail.com</p>
          </div>
          <div className="flex items-center gap-4 text-white/70 animate-fade-in">
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-all hover:scale-110 p-2 -ml-2 rounded-full hover:bg-white/5">
              <FaFacebookF size={22} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-all hover:scale-110 p-2 rounded-full hover:bg-white/5">
              <FaInstagram size={22} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-all hover:scale-110 p-2 rounded-full hover:bg-white/5">
              <FaTiktok size={22} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-all hover:scale-110 p-2 rounded-full hover:bg-white/5">
              <FaYoutube size={22} />
            </a>
          </div>
        </div>
        <div className="flex gap-6 text-white/80">
          <a href="#inicio" className="hover:text-emerald-400 transition-colors">
            Home
          </a>
          <button onClick={() => onDonateClick(50)} className="hover:text-emerald-400 text-left transition-colors">
            Donate
          </button>
          <a href="#contacto" className="hover:text-emerald-400 transition-colors">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
