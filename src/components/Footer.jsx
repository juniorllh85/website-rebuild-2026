import React from 'react';
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube, FaWhatsapp, FaLinkedinIn } from 'react-icons/fa';

export default function Footer({ onDonateClick, onPrivacyClick, onTermsClick }) {
  const navSections = [
    {
      title: 'Our Mission',
      links: [
        { href: '#inicio', label: 'Home' },
        { href: '#impacto', label: 'Impact' },
        { href: '#metricas', label: 'Metrics' },
        { href: '#porque', label: 'Why Us' },
        { href: '#ayuda', label: 'How We Help' },
      ],
    },
    {
      title: 'Get Involved',
      links: [
        { href: '#vision', label: 'Our Vision' },
        { href: '#plan', label: 'Our Plan' },
        { href: '#piloto', label: 'Pilot Project' },
        { href: '#donar', label: 'Donate' },
        { href: '#contacto', label: 'Contact Us' },
      ],
    },
  ];

  const socials = [
    { icon: FaFacebookF, href: 'https://www.facebook.com/profile.php?id=61589653498767', label: 'Facebook' },
    { icon: FaInstagram, href: 'https://www.instagram.com/thegoldenyearsfoundation', label: 'Instagram' },
    { icon: FaTiktok, href: '#', label: 'TikTok' },
    { icon: FaYoutube, href: 'https://www.youtube.com/@THEGOLDENYEARSFOUNDATION', label: 'YouTube' },
    { icon: FaLinkedinIn, href: 'https://www.linkedin.com/in/the-golden-years-foundation-non-profit-0a868040a', label: 'LinkedIn' },
    { icon: FaWhatsapp, href: 'https://wa.me/13054174092', label: 'WhatsApp' },
  ];

  return (
    <footer className="border-t" style={{ background: '#050a14', borderColor: 'rgba(255,255,255,0.08)' }}>
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <img src="/logo.png" alt="The Golden Years Foundation" className="h-12 w-12 object-contain rounded-full border" style={{ borderColor: 'rgba(16,185,129,0.3)' }} />
              <div>
                <div className="font-extrabold text-white text-base leading-tight">The Golden Years</div>
                <div className="font-extrabold text-sm" style={{ color: '#34d399' }}>Foundation</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed max-w-sm mb-6" style={{ color: 'rgba(148,163,184,0.75)' }}>
              Rescuing seniors from loneliness, isolation, and unmet needs — one delivery, one smile, one hug at a time. Based in Miami-Dade, FL.
            </p>

            {/* Socials */}
            <div className="flex gap-3 mb-8">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:brightness-125"
                  style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)', color: 'rgba(209,213,219,0.8)' }}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>

            {/* Donate Button */}
            <button
              onClick={() => onDonateClick(50)}
              className="rounded-xl px-6 py-3 text-sm font-black text-white transition-all duration-300 hover:brightness-110 hover:-translate-y-0.5"
              style={{ background: 'linear-gradient(135deg, #059669, #0d9488)', boxShadow: '0 6px 25px rgba(16,185,129,0.35)' }}
            >
              ❤️ Donate Now
            </button>
          </div>

          {/* Nav columns */}
          {navSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-xs font-black uppercase tracking-widest mb-5" style={{ color: '#34d399' }}>
                {section.title}
              </h3>
              <ul className="flex flex-col gap-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm transition-colors"
                      style={{ color: 'rgba(148,163,184,0.75)' }}
                      onMouseEnter={e => e.currentTarget.style.color = '#34d399'}
                      onMouseLeave={e => e.currentTarget.style.color = 'rgba(148,163,184,0.75)'}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs" style={{ borderTop: '1px solid rgba(255,255,255,0.08)', color: 'rgba(148,163,184,0.55)' }}>
          <div className="flex flex-col sm:flex-row gap-1 sm:gap-3 text-center sm:text-left">
            <span>© {new Date().getFullYear()} The Golden Years Foundation</span>
            <span className="hidden sm:inline">•</span>
            <span>501(c)(3) Nonprofit</span>
            <span className="hidden sm:inline">•</span>
            <span className="font-bold text-white/40">EIN: 35-2905128</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="mailto:info@thegoldenyearsfoundation.com" className="transition-colors hover:text-emerald-400">
              info@thegoldenyearsfoundation.com
            </a>
            <span>•</span>
            <button
              onClick={onPrivacyClick}
              className="transition-colors hover:text-emerald-400"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              onClick={onTermsClick}
              className="transition-colors hover:text-emerald-400"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
