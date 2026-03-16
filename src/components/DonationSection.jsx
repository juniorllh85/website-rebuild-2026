import React from 'react';
import { supportCards } from '../data/constants';

export default function DonationSection({ onDonateClick, onFormModalOpen }) {
  return (
    <section id="donar" className="relative overflow-hidden border-t" style={{ background: 'linear-gradient(160deg, #0a0f1e 0%, #0d1b2a 40%, #0a1628 70%, #0f172a 100%)' }}>
      {/* Ambient glow effects */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(251,191,36,0.12) 0%, transparent 65%)', transform: 'translate(25%,-25%)' }} />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(16,185,129,0.10) 0%, transparent 65%)', transform: 'translate(-25%, 25%)' }} />
      <div className="absolute top-1/2 left-1/2 w-[800px] h-[400px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(ellipse, rgba(139,92,246,0.06) 0%, transparent 70%)', transform: 'translate(-50%,-50%)' }} />

      <div className="mx-auto max-w-6xl px-4 py-24 relative z-10">

        {/* Emotional Hero Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-bold mb-8 border" style={{ background: 'rgba(251,191,36,0.12)', borderColor: 'rgba(251,191,36,0.3)', color: '#fcd34d' }}>
            <span className="animate-pulse">⭐</span> Recurring Donation Program
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight text-white">
            Become a{' '}
            <span style={{ background: 'linear-gradient(90deg, #fbbf24, #f59e0b, #fcd34d)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Golden Guardian
            </span>
          </h2>
          <p className="mt-6 text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: 'rgba(203,213,225,0.8)' }}>
            Behind every delivery is a senior who <strong className="text-white">no longer feels alone</strong>. Your monthly commitment is the bridge between their loneliness and their joy.
          </p>
          {/* Emotional stats row */}
          <div className="mt-10 flex flex-wrap justify-center gap-8">
            {[
              { emoji: '🏠', value: '500+', label: 'Seniors reached' },
              { emoji: '📦', value: '2,400+', label: 'Deliveries made' },
              { emoji: '❤️', value: '100%', label: 'Commitment' },
            ].map(s => (
              <div key={s.label} className="flex items-center gap-3">
                <span className="text-2xl">{s.emoji}</span>
                <div className="text-left">
                  <div className="text-xl font-black text-white">{s.value}</div>
                  <div className="text-xs font-medium" style={{ color: 'rgba(148,163,184,0.8)' }}>{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* TIER CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 items-end">

          {/* Tier 1 - Seed */}
          <div className="group relative rounded-3xl p-7 flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-2 cursor-pointer"
            style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.10)', backdropFilter: 'blur(10px)' }}
          >
            <div className="h-16 w-16 rounded-2xl flex items-center justify-center text-3xl mb-5" style={{ background: 'rgba(255,255,255,0.08)', boxShadow: '0 0 30px rgba(134,239,172,0.2)' }}>🌱</div>
            <h3 className="text-lg font-extrabold text-white">Seed of Support</h3>
            <div className="mt-4 flex items-baseline justify-center gap-1">
              <span className="text-4xl font-black text-white">$15</span>
              <span className="text-sm font-semibold" style={{ color: 'rgba(148,163,184,0.7)' }}>/mo</span>
            </div>
            <p className="mt-3 text-xs leading-relaxed" style={{ color: 'rgba(148,163,184,0.8)' }}>Help us cover the logistical backbone that keeps deliveries running every month.</p>
            <button onClick={() => onDonateClick(15)} className="mt-7 w-full rounded-2xl py-3 text-sm font-bold text-white transition-all duration-300 hover:brightness-110" style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)' }}>
              Join with $15
            </button>
          </div>

          {/* Tier 2 - Hot Meal */}
          <div className="group relative rounded-3xl p-7 flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-2 cursor-pointer"
            style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.10)', backdropFilter: 'blur(10px)' }}
          >
            <div className="h-16 w-16 rounded-2xl flex items-center justify-center text-3xl mb-5" style={{ background: 'rgba(251,191,36,0.12)', boxShadow: '0 0 30px rgba(251,191,36,0.25)' }}>🍲</div>
            <h3 className="text-lg font-extrabold text-white">Hot Meal</h3>
            <div className="mt-4 flex items-baseline justify-center gap-1">
              <span className="text-4xl font-black" style={{ color: '#fbbf24' }}>$25</span>
              <span className="text-sm font-semibold" style={{ color: 'rgba(148,163,184,0.7)' }}>/mo</span>
            </div>
            <p className="mt-3 text-xs leading-relaxed" style={{ color: 'rgba(148,163,184,0.8)' }}>Ensures warm, nutritious meals for a senior for one full week every month.</p>
            <button onClick={() => onDonateClick(25)} className="mt-7 w-full rounded-2xl py-3 text-sm font-bold transition-all duration-300" style={{ background: 'rgba(251,191,36,0.15)', border: '1px solid rgba(251,191,36,0.35)', color: '#fcd34d' }}>
              Join with $25
            </button>
          </div>

          {/* Tier 3 - ComprehensiveCare — FEATURED */}
          <div className="group relative rounded-3xl p-8 flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-3 cursor-pointer lg:-translate-y-4"
            style={{ background: 'linear-gradient(145deg, rgba(5,150,105,0.25), rgba(6,95,70,0.35))', border: '2px solid rgba(52,211,153,0.5)', backdropFilter: 'blur(10px)', boxShadow: '0 0 60px rgba(16,185,129,0.2), inset 0 1px 0 rgba(255,255,255,0.1)' }}
          >
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 rounded-full text-xs font-black uppercase tracking-widest" style={{ background: 'linear-gradient(90deg, #059669, #0d9488)', color: 'white', boxShadow: '0 4px 20px rgba(16,185,129,0.4)' }}>
              ✨ Key Impact
            </div>
            <div className="h-16 w-16 rounded-2xl flex items-center justify-center text-3xl mb-5" style={{ background: 'rgba(52,211,153,0.15)', boxShadow: '0 0 40px rgba(52,211,153,0.35)' }}>💚</div>
            <h3 className="text-lg font-extrabold text-white">Comprehensive Care</h3>
            <div className="mt-4 flex items-baseline justify-center gap-1">
              <span className="text-5xl font-black" style={{ color: '#34d399', textShadow: '0 0 30px rgba(52,211,153,0.5)' }}>$50</span>
              <span className="text-sm font-semibold" style={{ color: 'rgba(148,163,184,0.7)' }}>/mo</span>
            </div>
            <div className="mt-2 text-xs font-bold px-3 py-1 rounded-full" style={{ background: 'rgba(52,211,153,0.2)', color: '#6ee7b7' }}>Food + Hygiene</div>
            <p className="mt-3 text-xs leading-relaxed" style={{ color: 'rgba(203,213,225,0.8)' }}>Complete protection — nutrition and personal dignity, delivered together monthly.</p>
            <button onClick={() => onDonateClick(50)} className="mt-7 w-full rounded-2xl py-3.5 text-sm font-black text-white transition-all duration-300 hover:brightness-110 hover:scale-105" style={{ background: 'linear-gradient(135deg, #059669, #0d9488)', boxShadow: '0 8px 30px rgba(16,185,129,0.4)' }}>
              Join with $50
            </button>
          </div>

          {/* Tier 4 - Guardian */}
          <div className="group relative rounded-3xl p-7 flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-2 cursor-pointer"
            style={{ background: 'linear-gradient(145deg, rgba(245,158,11,0.15), rgba(120,53,15,0.20))', border: '1px solid rgba(251,191,36,0.25)', backdropFilter: 'blur(10px)' }}
          >
            <div className="h-16 w-16 rounded-2xl flex items-center justify-center text-3xl mb-5" style={{ background: 'rgba(251,191,36,0.12)', boxShadow: '0 0 40px rgba(251,191,36,0.35)' }}>👑</div>
            <h3 className="text-lg font-extrabold text-white">Sponsoring Guardian</h3>
            <div className="mt-4 flex items-baseline justify-center gap-1">
              <span className="text-4xl font-black" style={{ color: '#fbbf24', textShadow: '0 0 25px rgba(251,191,36,0.5)' }}>$100</span>
              <span className="text-sm font-semibold" style={{ color: 'rgba(148,163,184,0.7)' }}>/mo</span>
            </div>
            <div className="mt-2 text-xs font-bold px-3 py-1 rounded-full" style={{ background: 'rgba(251,191,36,0.15)', color: '#fcd34d' }}>Sponsor 1 Senior</div>
            <p className="mt-3 text-xs leading-relaxed" style={{ color: 'rgba(148,163,184,0.8)' }}>Your name becomes their shield — full monthly coverage for one real person.</p>
            <button onClick={() => onDonateClick(100)} className="mt-7 w-full rounded-2xl py-3 text-sm font-black text-slate-900 transition-all duration-300 hover:brightness-110" style={{ background: 'linear-gradient(135deg, #fbbf24, #f59e0b)', boxShadow: '0 8px 30px rgba(251,191,36,0.35)' }}>
              Become a Guardian
            </button>
          </div>

        </div>

        {/* OTHER WAYS TO SUPPORT */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-extrabold text-white">Choose another way to support</h3>
            <p className="mt-3 text-sm" style={{ color: 'rgba(148,163,184,0.7)' }}>Every contribution — big or small — creates real impact.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {supportCards.map((c) => (
              <div key={c.title} className="group overflow-hidden rounded-3xl flex flex-col transition-all duration-500 hover:-translate-y-2"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.10)', backdropFilter: 'blur(10px)', boxShadow: '0 4px 20px rgba(0,0,0,0.2)' }}
              >
                <div className="h-52 w-full overflow-hidden relative">
                  <div className="absolute inset-0 z-10 pointer-events-none" style={{ background: 'linear-gradient(to top, rgba(10,15,30,0.9) 0%, rgba(10,15,30,0.3) 50%, transparent 80%)' }} />
                  {c.image ? (
                    <img src={c.image} alt={c.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center" style={{ background: 'linear-gradient(135deg, rgba(30,41,59,0.8), rgba(15,23,42,0.9))' }}>
                      <span className="text-5xl mb-2 opacity-60">{c.icon}</span>
                      <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'rgba(148,163,184,0.5)' }}>Coming Soon</span>
                    </div>
                  )}
                  {/* Icon overlay at bottom left of image */}
                  <div className="absolute bottom-3 left-4 z-20 flex items-center gap-2">
                    <span className="text-2xl drop-shadow-lg">{c.icon}</span>
                    <h3 className="text-base font-extrabold text-white drop-shadow-md">{c.title}</h3>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-sm leading-relaxed flex-1" style={{ color: 'rgba(148,163,184,0.85)' }}>{c.desc}</p>
                  <div className="mt-5 w-full">
                    <button
                      onClick={() => onFormModalOpen(c.type)}
                      className="w-full inline-flex items-center justify-center rounded-2xl py-3 text-sm font-bold text-white transition-all duration-300 hover:brightness-110"
                      style={{ background: 'linear-gradient(135deg, #059669, #0d9488)', boxShadow: '0 4px 20px rgba(16,185,129,0.3)' }}
                    >
                      Apply / Register →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* PAYMENT NOTICE */}
        <div className="mt-14 rounded-3xl p-8 flex flex-col sm:flex-row gap-6 items-center text-center sm:text-left" style={{ background: 'rgba(251,191,36,0.08)', border: '1px solid rgba(251,191,36,0.2)' }}>
          <div className="text-4xl flex-shrink-0">💳</div>
          <div>
            <div className="text-sm font-bold text-white">Donate Now — Online payments coming soon</div>
            <p className="mt-2 text-sm" style={{ color: 'rgba(148,163,184,0.8)' }}>
              We are integrating Stripe, PayPal, and Zelle. In the meantime, fill out the form and we will contact you immediately to process your donation.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
