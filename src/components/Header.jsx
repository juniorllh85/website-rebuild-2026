import React, { useState } from 'react';
import { Link, usePath, splitPath, useT } from '../router';
import { NAV_LINKS } from '../data/site';

// EN | ES switch: links to the same page in the other language.
function LangToggle({ route, lang, className = '' }) {
  const base = 'px-2.5 py-1.5 rounded-lg text-xs font-black transition';
  const on = 'bg-emerald-600 text-white shadow';
  const off = 'text-slate-600 hover:text-emerald-700';
  return (
    <div role="group" aria-label="Language / Idioma" className={`inline-flex items-center rounded-xl border border-slate-200 bg-white p-0.5 ${className}`}>
      <Link to={route} lang="en" hrefLang="en" id="lang-en" aria-current={lang === 'en' ? 'true' : undefined} className={`${base} ${lang === 'en' ? on : off}`}>EN</Link>
      <Link to={route} lang="es" hrefLang="es" id="lang-es" aria-current={lang === 'es' ? 'true' : undefined} className={`${base} ${lang === 'es' ? on : off}`}>ES</Link>
    </div>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { lang, route: path } = splitPath(usePath());
  const t = useT();
  const label = (link) => (lang === 'es' ? link.es : link.label);

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
            alt={t('The Golden Years Foundation logo', 'Logo de The Golden Years Foundation')}
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

        <nav aria-label={t('Main navigation', 'Navegación principal')} className="hidden xl:flex items-center gap-1 text-sm font-medium">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} to={link.href} id={`nav-${link.label.toLowerCase().replace(/\s/g, '-')}`} className={linkClass(link.href)}>
              {label(link)}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LangToggle route={path} lang={lang} className="hidden sm:inline-flex" />
          <Link
            to="/request-help"
            id="nav-request-help"
            className="hidden md:inline-flex rounded-xl px-4 py-2.5 text-sm font-bold text-emerald-700 border border-emerald-200 hover:bg-emerald-50 transition"
          >
            {t('Request Help', 'Pedir ayuda')}
          </Link>
          <Link
            to="/donate"
            id="nav-donate"
            className="rounded-xl px-5 py-2.5 text-sm font-black text-white transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110"
            style={{ background: 'linear-gradient(135deg, #059669, #0d9488)', boxShadow: '0 4px 15px rgba(16,185,129,0.35)' }}
          >
            ❤️ {t('Donate', 'Donar')}
          </Link>
          <button
            id="nav-mobile-toggle"
            className="xl:hidden flex items-center justify-center w-10 h-10 rounded-xl transition-colors"
            style={{ background: mobileOpen ? 'rgba(16,185,129,0.1)' : 'rgba(0,0,0,0.05)' }}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={t('Toggle menu', 'Abrir menú')}
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
          <nav aria-label={t('Mobile navigation', 'Navegación móvil')} className="flex flex-col gap-1">
            <LangToggle route={path} lang={lang} className="self-start mb-2 sm:hidden" />
            {NAV_LINKS.map((link) => (
              <Link key={link.href} to={link.href} onClick={() => setMobileOpen(false)} className={`${linkClass(link.href)} py-3 text-base`}>
                {label(link)}
              </Link>
            ))}
            <div className="grid grid-cols-2 gap-2 mt-2">
              <Link to="/request-help" onClick={() => setMobileOpen(false)} className="text-center rounded-xl py-3 text-sm font-bold text-emerald-700 border border-emerald-200">
                {t('Request Help', 'Pedir ayuda')}
              </Link>
              <Link to="/donate" onClick={() => setMobileOpen(false)} className="text-center rounded-xl py-3 text-sm font-black text-white" style={{ background: 'linear-gradient(135deg, #059669, #0d9488)' }}>
                ❤️ {t('Donate', 'Donar')}
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
