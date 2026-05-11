import React, { useState } from 'react';

export default function Header({ onDonateClick }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { href: '#inicio', label: 'Home' },
    { href: '#impacto', label: 'Impact' },
    { href: '#metricas', label: 'Metrics' },
    { href: '#porque', label: 'Why Us' },
    { href: '#ayuda', label: 'How We Help' },
    { href: '#blog', label: 'News' },
    { href: '#donar', label: 'Donate' },
    { href: '#contacto', label: 'Contact' },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 border-b" style={{ background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(16px)', borderColor: 'rgba(0,0,0,0.08)' }}>
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between gap-4">
          {/* Logo + Name */}
          <a href="#inicio" className="font-extrabold tracking-tight text-lg sm:text-xl flex items-center gap-3 flex-shrink-0" style={{ color: '#0f172a' }}>
            <img
              src="/logo.png"
              alt="The Golden Years Foundation Logo"
              className="h-11 w-11 object-contain rounded-full border shadow-sm"
              style={{ borderColor: 'rgba(16,185,129,0.2)' }}
            />
            <span className="hidden sm:inline leading-tight">
              The Golden Years <span style={{ color: '#059669' }}>Foundation</span>
            </span>
            <span className="sm:hidden font-black" style={{ color: '#059669' }}>TGYF</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1 text-sm font-medium">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 rounded-xl transition-all duration-200 hover:bg-emerald-50 hover:text-emerald-700"
                style={{ color: '#374151' }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right: Donate + Mobile toggle */}
          <div className="flex items-center gap-3">
            {/* Senior count badge */}
            <div className="hidden md:flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full" style={{ background: 'rgba(16,185,129,0.10)', color: '#059669', border: '1px solid rgba(16,185,129,0.25)' }}>
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse inline-block" />
              500+ Seniors
            </div>

            <button
              onClick={() => onDonateClick(50)}
              className="rounded-xl px-5 py-2.5 text-sm font-black text-white transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110"
              style={{ background: 'linear-gradient(135deg, #059669, #0d9488)', boxShadow: '0 4px 15px rgba(16,185,129,0.35)' }}
            >
              ❤️ Donate
            </button>

            {/* Mobile menu button */}
            <button
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-xl transition-colors"
              style={{ background: mobileOpen ? 'rgba(16,185,129,0.1)' : 'rgba(0,0,0,0.05)' }}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileOpen
                  ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                }
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t px-4 pb-4 pt-2" style={{ background: 'rgba(255,255,255,0.98)', borderColor: 'rgba(0,0,0,0.07)' }}>
            <nav className="flex flex-col gap-1">
              {navLinks.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 rounded-xl text-sm font-semibold transition-colors hover:bg-emerald-50 hover:text-emerald-700"
                  style={{ color: '#374151' }}
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={() => { onDonateClick(50); setMobileOpen(false); }}
                className="mt-2 w-full rounded-xl py-3 text-sm font-black text-white transition-all"
                style={{ background: 'linear-gradient(135deg, #059669, #0d9488)' }}
              >
                ❤️ Donate Now
              </button>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
