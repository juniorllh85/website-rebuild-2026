import React, { useState } from 'react';
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube, FaWhatsapp, FaLinkedinIn } from 'react-icons/fa';

export default function Contact({ onSubmit }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await onSubmit(e, 'contacto');
      setSubmitted(true);
    } catch (_) {}
    setIsSubmitting(false);
  };

  const infoBlocks = [
    {
      icon: '📍',
      title: 'Location',
      lines: ['Miami-Dade County, Florida', 'Pilot project — 3-building complex'],
    },
    {
      icon: '✉️',
      title: 'Email',
      lines: ['info@thegoldenyearsfoundation.com'],
      link: 'mailto:info@thegoldenyearsfoundation.com',
    },
    {
      icon: '💬',
      title: 'WhatsApp',
      lines: ['Use the floating button to write directly or click below.'],
      whatsapp: true,
    },
  ];

  const socials = [
    { icon: FaFacebookF, href: 'https://www.facebook.com/profile.php?id=61589653498767', label: 'Facebook' },
    { icon: FaInstagram, href: '#', label: 'Instagram' },
    { icon: FaTiktok, href: '#', label: 'TikTok' },
    { icon: FaYoutube, href: 'https://www.youtube.com/@THEGOLDENYEARSFOUNDATION', label: 'YouTube' },
    { icon: FaLinkedinIn, href: 'https://www.linkedin.com/in/the-golden-years-foundation-non-profit-0a868040a', label: 'LinkedIn' },
  ];

  return (
    <section
      id="contacto"
      className="relative overflow-hidden border-t"
      style={{ background: 'linear-gradient(160deg, #080d1a 0%, #0a1220 60%, #070c18 100%)' }}
    >
      {/* Ambient glows */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(16,185,129,0.08) 0%, transparent 65%)', transform: 'translate(-30%,-30%)' }} />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(251,191,36,0.07) 0%, transparent 65%)', transform: 'translate(25%, 25%)' }} />

      <div className="relative z-10 mx-auto max-w-6xl px-4 py-24">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-xs font-black uppercase tracking-widest mb-6 border" style={{ background: 'rgba(16,185,129,0.10)', borderColor: 'rgba(16,185,129,0.25)', color: '#34d399' }}>
            ✉️ Get in Touch
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Let's build this{' '}
            <span style={{ background: 'linear-gradient(90deg, #34d399, #2dd4bf)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              together.
            </span>
          </h2>
          <p className="mt-4 text-lg max-w-xl mx-auto" style={{ color: 'rgba(203,213,225,0.75)' }}>
            Whether you want to donate, volunteer, apply for grants, or create a partnership — we'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* LEFT — Contact Info */}
          <div className="flex flex-col gap-6">
            {infoBlocks.map((block) => (
              <div
                key={block.title}
                className="rounded-2xl p-5 flex gap-4 items-start"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.10)', backdropFilter: 'blur(10px)' }}
              >
                <span className="text-2xl mt-0.5">{block.icon}</span>
                <div>
                  <div className="text-sm font-black text-white mb-1">{block.title}</div>
                  {block.lines.map((line, i) => (
                    block.link
                      ? <a key={i} href={block.link} className="text-sm block transition-colors hover:text-emerald-400" style={{ color: 'rgba(148,163,184,0.85)' }}>{line}</a>
                      : <p key={i} className="text-sm" style={{ color: 'rgba(148,163,184,0.85)' }}>{line}</p>
                  ))}
                  {block.whatsapp && (
                    <a
                      href="https://wa.me/13054174092"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-bold text-white transition-all hover:brightness-110"
                      style={{ background: '#25D366' }}
                    >
                      <FaWhatsapp size={14} /> Open WhatsApp
                    </a>
                  )}
                </div>
              </div>
            ))}

            {/* Social media */}
            <div className="rounded-2xl p-5" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.10)' }}>
              <div className="text-sm font-black text-white mb-4">🌐 Follow Our Mission</div>
              <div className="flex gap-3">
                {socials.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:brightness-110"
                    style={{ background: 'rgba(255,255,255,0.10)', border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(209,213,219,0.85)' }}
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>

            {/* EIN / legal */}
            <div className="rounded-2xl p-5" style={{ background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.20)' }}>
              <div className="text-sm font-black" style={{ color: '#34d399' }}>501(c)(3) Registered Nonprofit</div>
              <p className="text-xs mt-1" style={{ color: 'rgba(148,163,184,0.80)' }}>
                EIN: <strong className="text-white">35-2905128</strong> — Donations are tax-deductible under U.S. federal law.
              </p>
            </div>
          </div>

          {/* RIGHT — Contact Form */}
          <div
            className="rounded-3xl p-8"
            style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)', backdropFilter: 'blur(12px)' }}
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-12 gap-5">
                <div className="text-6xl">🎉</div>
                <h3 className="text-2xl font-extrabold text-white">Message Received!</h3>
                <p style={{ color: 'rgba(203,213,225,0.8)' }}>
                  Thank you for reaching out. We'll get back to you as soon as possible — usually within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 rounded-xl px-6 py-2.5 text-sm font-bold text-white"
                  style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)' }}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid gap-5">
                <h3 className="text-xl font-extrabold text-white mb-1">Send us a message</h3>

                <label className="grid gap-2">
                  <span className="text-sm font-semibold" style={{ color: 'rgba(203,213,225,0.9)' }}>Full Name</span>
                  <input
                    name="name"
                    required
                    className="rounded-xl px-4 py-3 text-sm outline-none transition-all"
                    style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', color: 'white', '::placeholder': { color: 'rgba(148,163,184,0.5)' } }}
                    placeholder="Your full name"
                  />
                </label>

                <label className="grid gap-2">
                  <span className="text-sm font-semibold" style={{ color: 'rgba(203,213,225,0.9)' }}>Email Address</span>
                  <input
                    name="email"
                    type="email"
                    required
                    className="rounded-xl px-4 py-3 text-sm outline-none transition-all"
                    style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', color: 'white' }}
                    placeholder="you@email.com"
                  />
                </label>

                <label className="grid gap-2">
                  <span className="text-sm font-semibold" style={{ color: 'rgba(203,213,225,0.9)' }}>Subject</span>
                  <select
                    name="subject"
                    className="rounded-xl px-4 py-3 text-sm outline-none"
                    style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', color: 'white' }}
                  >
                    <option value="donation" style={{ background: '#0a1220' }}>💰 I want to donate</option>
                    <option value="volunteer" style={{ background: '#0a1220' }}>🤝 I want to volunteer</option>
                    <option value="partnership" style={{ background: '#0a1220' }}>🏢 Partnership / Grants</option>
                    <option value="media" style={{ background: '#0a1220' }}>📰 Media / Press</option>
                    <option value="other" style={{ background: '#0a1220' }}>💬 Other</option>
                  </select>
                </label>

                <label className="grid gap-2">
                  <span className="text-sm font-semibold" style={{ color: 'rgba(203,213,225,0.9)' }}>Message</span>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    className="rounded-xl px-4 py-3 text-sm outline-none resize-none"
                    style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', color: 'white' }}
                    placeholder="Tell us how you'd like to get involved, support our mission, or ask any questions…"
                  />
                </label>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-xl py-3.5 text-sm font-black text-white transition-all duration-300 hover:brightness-110 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ background: 'linear-gradient(135deg, #059669, #0d9488)', boxShadow: '0 8px 30px rgba(16,185,129,0.35)' }}
                >
                  {isSubmitting ? '⏳ Sending...' : '✉️ Send Message'}
                </button>

                <p className="text-xs text-center" style={{ color: 'rgba(148,163,184,0.6)' }}>
                  © {new Date().getFullYear()} The Golden Years Foundation • 501(c)(3) • EIN: 35-2905128
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
