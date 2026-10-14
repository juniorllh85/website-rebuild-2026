import React from 'react';
import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { Link } from '../router';
import { ORG, SOCIALS, fullAddress } from '../data/site';

const ICONS = { facebook: FaFacebookF, instagram: FaInstagram, youtube: FaYoutube, whatsapp: FaWhatsapp };

const sections = [
  {
    title: 'Organization',
    links: [
      { href: '/about', label: 'About Us' },
      { href: '/mission', label: 'Our Mission' },
      { href: '/programs', label: 'Programs & Services' },
      { href: '/news', label: 'News & Updates' },
    ],
  },
  {
    title: 'Get Involved',
    links: [
      { href: '/donate', label: 'Donate' },
      { href: '/volunteer', label: 'Volunteer' },
      { href: '/request-help', label: 'Request Help' },
      { href: '/contact', label: 'Contact Us' },
    ],
  },
];

export default function Footer() {
  const muted = { color: 'rgba(148,163,184,0.85)' };
  return (
    <footer className="border-t" style={{ background: '#050a14', borderColor: 'rgba(255,255,255,0.08)' }}>
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <img src="/logo.webp" alt="" width="48" height="48" loading="lazy" className="h-12 w-12 object-contain rounded-full border" style={{ borderColor: 'rgba(16,185,129,0.3)' }} />
              <div>
                <div className="font-extrabold text-white text-base leading-tight">The Golden Years</div>
                <div className="font-extrabold text-sm text-emerald-400">Foundation</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed max-w-sm mb-6" style={muted}>
              A {ORG.legalStatus} serving isolated and low-income seniors in {ORG.county}, Florida with food, medicine support, hygiene essentials and companionship.
            </p>

            <address className="not-italic text-sm space-y-2 mb-6" style={muted}>
              <div className="flex items-start gap-2"><FaMapMarkerAlt className="mt-1 text-emerald-400 flex-shrink-0" /> {fullAddress()}</div>
              <div className="flex items-center gap-2"><FaPhoneAlt className="text-emerald-400" /> <a href={ORG.phoneLink} className="hover:text-emerald-400">{ORG.phone}</a></div>
              <div className="flex items-center gap-2"><FaEnvelope className="text-emerald-400" /> <a href={`mailto:${ORG.email}`} className="hover:text-emerald-400">{ORG.email}</a></div>
            </address>

            <div className="flex gap-3">
              {SOCIALS.map(({ key, href, label }) => {
                const Icon = ICONS[key];
                return (
                  <a key={key} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                    className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:text-emerald-400"
                    style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)', color: 'rgba(209,213,219,0.85)' }}>
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>

          {sections.map((s) => (
            <div key={s.title}>
              <h2 className="text-xs font-black uppercase tracking-widest mb-5 text-emerald-400">{s.title}</h2>
              <ul className="flex flex-col gap-3">
                {s.links.map((l) => (
                  <li key={l.href}>
                    <Link to={l.href} className="text-sm transition-colors hover:text-emerald-400" style={muted}>{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs" style={{ borderTop: '1px solid rgba(255,255,255,0.08)', color: 'rgba(148,163,184,0.7)' }}>
          <div className="text-center md:text-left">
            © {new Date().getFullYear()} {ORG.name} · {ORG.legalStatus} ·{' '}
            <strong className="text-white/70">EIN: {ORG.ein}</strong> · Donations are tax-deductible to the extent allowed by law.
          </div>
          <div className="flex gap-4">
            <a href="/privacy-policy" className="hover:text-emerald-400">Privacy Policy</a>
            <a href="/terms-of-service" className="hover:text-emerald-400">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
