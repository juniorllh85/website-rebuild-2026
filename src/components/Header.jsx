import React, { useState } from 'react';
import { Link, usePath } from '../router';
import { NAV_LINKS } from '../data/site';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const path = usePath();

  const linkClass = (href) =>
    `px-3 py-2 rounded-xl transition-all duration-200 hover:bg-emerald-50 hover:text-emerald-700 ${
      path === href ? 'text-emerald-700 bg-emerald-50 font-bold' : 'text-slate-700'
    }`;

  return (
    <header
      className="sticky top-0 z-40 border-b"
      style={{ background: 'rgba(255,255,255,0.94)', backdropFilter: 'blur(16px)', borderColor: 'rgba(0,0,0,0.08)' }}
    >
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between gap-4">
        <Link to="/" id="nav-logo" className="font-extrabold tracking-tight text-lg flex items-center gap-3 flex-shrink-0 text-slate-900">
          <img
            src="/logo.webp"
            alt="The Golden Years Foundation logo"
            width="44"
            height="44"
            className="h-11 w-11 object-contain rounded-full border shadow-sm"
            style={{ borderColor: 'rgba(16,185,129,0.2)' }}
          />
          <span className="hidden sm:inline leading-tight">
            The Golden Years <span className="text-emerald-600">Foundation</span>
          </span>
          <span className="sm:hidden font-black text-emerald-600">TGYF</span>
        </Link>

        <nav aria-label="Main navigation" className="hidden xl:flex items-center gap-1 text-sm font-medium">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} to={link.href} id={`nav-${link.label.toLowerCase().replace(/\s/g, '-')}`} className={linkClass(link.href)}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/request-help"
            id="nav-request-help"
            className="hidden md:inline-flex rounded-xl px-4 py-2.5 text-sm font-bold text-emerald-700 border border-emerald-200 hover:bg-emerald-50 transition"
          >
            Request Help
          </Link>
          <Link
            to="/donate"
            id="nav-donate"
            className="rounded-xl px-5 py-2.5 text-sm font-black text-white transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110"
            style={{ background: 'linear-gradient(135deg, #059669, #0d9488)', boxShadow: '0 4px 15px rgba(16,185,129,0.35)' }}
          >
            ❤️ Donate
          </Link>
          <button
            id="nav-mobile-toggle"
            className="xl:hidden flex items-center justify-center w-10 h-10 rounded-xl transition-colors"
            style={{ background: mobileOpen ? 'rgba(16,185,129,0.1)' : 'rgba(0,0,0,0.05)' }}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="xl:hidden border-t px-4 pb-4 pt-2 bg-white" style={{ borderColor: 'rgba(0,0,0,0.07)' }}>
          <nav aria-label="Mobile navigation" className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <Link key={link.href} to={link.href} onClick={() => setMobileOpen(false)} className={`${linkClass(link.href)} py-3 text-base`}>
                {link.label}
              </Link>
            ))}
            <div className="grid grid-cols-2 gap-2 mt-2">
              <Link to="/request-help" onClick={() => setMobileOpen(false)} className="text-center rounded-xl py-3 text-sm font-bold text-emerald-700 border border-emerald-200">
                Request Help
              </Link>
              <Link to="/donate" onClick={() => setMobileOpen(false)} className="text-center rounded-xl py-3 text-sm font-black text-white" style={{ background: 'linear-gradient(135deg, #059669, #0d9488)' }}>
                ❤️ Donate
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
