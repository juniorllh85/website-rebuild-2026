import React from 'react';
import ImageCarousel from './ImageCarousel';
import { heroCarouselImages, miniImpactStats, servicePills } from '../data/constants';

export default function Hero({ onDonateClick }) {
  return (
    <section id="inicio" className="relative min-h-screen overflow-hidden flex flex-col">
      {/* === BACKGROUND: Rotating image carousel === */}
      <div className="absolute inset-0 z-0">
        <ImageCarousel
          images={heroCarouselImages}
          overlayTexts={[]}
          interval={5000}
        />
        {/* Deep cinematic overlay — dark bottom, lighter on top */}
        <div className="absolute inset-0 z-10" style={{ background: 'linear-gradient(180deg, rgba(5,10,20,0.65) 0%, rgba(5,10,20,0.50) 40%, rgba(5,10,20,0.75) 70%, rgba(5,10,20,0.95) 100%)' }} />
        {/* Emerald left glow accent */}
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full pointer-events-none z-10" style={{ background: 'radial-gradient(circle, rgba(16,185,129,0.18) 0%, transparent 65%)', transform: 'translate(-30%, 30%)' }} />
        {/* Gold right glow accent */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none z-10" style={{ background: 'radial-gradient(circle, rgba(251,191,36,0.10) 0%, transparent 65%)', transform: 'translate(30%, -30%)' }} />
      </div>

      {/* === CONTENT === */}
      <div className="relative z-20 flex flex-col min-h-screen">
        {/* Narrow top badge */}
        <div className="flex justify-center pt-12 sm:pt-16">
          <div className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-bold border" style={{ background: 'rgba(255,255,255,0.08)', borderColor: 'rgba(255,255,255,0.18)', backdropFilter: 'blur(12px)', color: 'rgba(255,255,255,0.85)' }}>
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            501(c)(3) Nonprofit · Embracing Miami-Dade, FL
          </div>
        </div>

        {/* Main content — centered */}
        <div className="flex-1 flex flex-col items-center justify-center text-center px-4 sm:px-8 py-12">
          {/* Tagline */}
          <p className="text-xs sm:text-sm font-black uppercase tracking-[0.35em] mb-6" style={{ color: '#34d399', letterSpacing: '0.3em' }}>
            The Golden Years Foundation
          </p>

          {/* MAIN HEADLINE */}
          <h1 className="max-w-5xl text-4xl sm:text-6xl md:text-7xl font-extrabold leading-[1.05] tracking-tight text-white">
            Rescuing from oblivion{' '}
            <br className="hidden sm:block" />
            the generation that{' '}
            <span style={{ background: 'linear-gradient(90deg, #34d399 0%, #2dd4bf 50%, #fbbf24 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              gave it all.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="mt-6 max-w-2xl text-lg sm:text-xl leading-relaxed" style={{ color: 'rgba(203,213,225,0.85)' }}>
            We rescue our seniors from <strong className="text-white">loneliness, isolation, and depression</strong>. Through food, medicine, dignity, and love — we transform gray homes into spaces of celebration and true joy.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => onDonateClick(50)}
              className="group relative rounded-full px-9 py-4 text-base sm:text-lg font-black text-white transition-all duration-300 hover:-translate-y-1 hover:brightness-110"
              style={{ background: 'linear-gradient(135deg, #059669 0%, #0d9488 100%)', boxShadow: '0 8px 40px rgba(16,185,129,0.45), 0 0 0 1px rgba(52,211,153,0.3)' }}
            >
              <span className="flex items-center gap-2">
                <span>❤️</span>
                Give Them Their Smile Back
              </span>
            </button>

            <a
              href="#impacto"
              className="rounded-full px-9 py-4 text-base sm:text-lg font-bold transition-all duration-300 hover:-translate-y-1"
              style={{ background: 'rgba(255,255,255,0.10)', border: '1px solid rgba(255,255,255,0.25)', color: 'white', backdropFilter: 'blur(8px)' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.18)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.10)'; }}
            >
              See Our Impact →
            </a>
          </div>

          {/* Floating mini impact stats */}
          <div className="mt-14 flex flex-wrap justify-center gap-6 sm:gap-10">
            {miniImpactStats.map(s => (
              <div key={s.label} className="flex items-center gap-3 rounded-2xl px-4 py-3" style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)', backdropFilter: 'blur(10px)' }}>
                <span className="text-xl">{s.emoji}</span>
                <div className="text-left">
                  <div className="text-lg font-black text-white leading-none">{s.value}</div>
                  <div className="text-xs mt-0.5" style={{ color: 'rgba(148,163,184,0.8)' }}>{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom: What we provide — pill tags */}
        <div className="pb-10 sm:pb-14 flex justify-center px-4">
          <div className="flex flex-wrap justify-center gap-3 max-w-2xl">
            {servicePills.map(tag => (
              <span key={tag.label} className="inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-sm font-semibold" style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.14)', color: 'rgba(226,232,240,0.85)', backdropFilter: 'blur(8px)' }}>
                <span>{tag.icon}</span> {tag.label}
              </span>
            ))}
          </div>
        </div>

        {/* Floating Quote Card — bottom right */}
        <div className="absolute bottom-14 right-6 sm:right-12 max-w-xs rounded-3xl p-5 hidden lg:block" style={{ background: 'rgba(255,255,255,0.09)', border: '1px solid rgba(255,255,255,0.18)', backdropFilter: 'blur(20px)', boxShadow: '0 20px 60px rgba(0,0,0,0.3)' }}>
          <div className="text-amber-400 mb-3" style={{ fontSize: '28px', lineHeight: 1 }}>"</div>
          <p className="text-sm font-semibold text-white leading-snug italic">
            Our masterpiece is not built with handouts, it is built with pure love, empathy, and human hope.
          </p>
          <div className="mt-4 flex items-center gap-2 pt-3" style={{ borderTop: '1px solid rgba(255,255,255,0.15)' }}>
            <div className="h-8 w-8 rounded-full flex items-center justify-center text-xs font-black text-white" style={{ background: 'linear-gradient(135deg, #059669, #0d9488)' }}>GYF</div>
            <div>
              <div className="text-xs font-bold text-white">Emotional Mission</div>
              <div className="text-xs" style={{ color: '#34d399' }}>The Foundation</div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce" style={{ color: 'rgba(148,163,184,0.6)' }}>
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
        </div>
      </div>
    </section>
  );
}
