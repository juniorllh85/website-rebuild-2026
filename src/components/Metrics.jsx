import React, { useState } from 'react';
import ImageCarousel from './ImageCarousel';

export default function Metrics({ onFormModalOpen, onDonateClick }) {
  const [lightboxImage, setLightboxImage] = useState(null);

  const handleCardClick = (e) => {
    const img = e.currentTarget.querySelector('img:not(.opacity-0)');
    if (img) setLightboxImage(img.src);
  };
  return (
    <section id="metricas" className="relative overflow-hidden border-t" style={{ background: 'linear-gradient(160deg, #0a0f1e 0%, #0d1b2a 50%, #0f172a 100%)' }}>
      {/* Ambient glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(16,185,129,0.12) 0%, transparent 65%)', transform: 'translate(25%,-25%)' }} />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 65%)', transform: 'translate(-25%, 25%)' }} />

      <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8 py-24 sm:py-32 relative z-10">

        {/* Section header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-xs font-black uppercase tracking-widest mb-6 border" style={{ background: 'rgba(52,211,153,0.1)', borderColor: 'rgba(52,211,153,0.25)', color: '#34d399' }}>
            📊 Impact Programs
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white mb-6">
            More than Metrics:{' '}
            <span style={{ background: 'linear-gradient(90deg, #34d399, #2dd4bf)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Companionship & Dignity
            </span>
          </h2>
          <p className="text-lg leading-relaxed" style={{ color: 'rgba(203,213,225,0.8)' }}>
            For our social investors, hard data with absolute precision. For our seniors, real companionship, dignity, continuous medical care — and the certainty that <strong className="text-white">they are not a burden, they have us.</strong>
          </p>
        </div>

        {/* BENTO GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

          {/* 1 - Lives Reached */}
          <div className="group relative rounded-3xl overflow-hidden cursor-pointer" style={{ minHeight: '24rem' }} onClick={handleCardClick}>
            <img src="/images/hero.png" alt="Lives Reached" className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 transition-all duration-500" style={{ background: 'linear-gradient(to top, rgba(5,10,20,0.96) 0%, rgba(5,10,20,0.45) 50%, rgba(5,10,20,0.2) 100%)' }} />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'linear-gradient(to top, rgba(16,185,129,0.25) 0%, rgba(5,10,20,0.5) 100%)' }} />
            <div className="absolute inset-0 p-7 flex flex-col justify-end">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-xl mb-4 transform group-hover:-translate-y-1 transition-transform duration-300" style={{ background: 'rgba(16,185,129,0.2)', border: '1px solid rgba(52,211,153,0.3)', boxShadow: '0 0 20px rgba(16,185,129,0.3)' }}>👥</div>
              <div className="text-3xl font-black text-white mb-1">500+</div>
              <h3 className="text-lg font-extrabold text-white mb-2">Lives Reached</h3>
              <p className="text-sm leading-relaxed max-h-0 overflow-hidden group-hover:max-h-32 transition-all duration-500" style={{ color: 'rgba(148,163,184,0.9)' }}>Rigorous census of active beneficiaries in the pilot, ensuring sustained support month by month without exclusions.</p>
            </div>
          </div>

          {/* 2 - Safe Nutrition */}
          <div className="group relative rounded-3xl overflow-hidden cursor-pointer" style={{ minHeight: '24rem' }} onClick={handleCardClick}>
            <img src="/images/food.png" alt="Safe Nutrition" className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 transition-all duration-500" style={{ background: 'linear-gradient(to top, rgba(5,10,20,0.96) 0%, rgba(5,10,20,0.45) 50%, rgba(5,10,20,0.2) 100%)' }} />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'linear-gradient(to top, rgba(245,158,11,0.25) 0%, rgba(5,10,20,0.5) 100%)' }} />
            <div className="absolute inset-0 p-7 flex flex-col justify-end">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-xl mb-4 transform group-hover:-translate-y-1 transition-transform duration-300" style={{ background: 'rgba(245,158,11,0.2)', border: '1px solid rgba(251,191,36,0.3)', boxShadow: '0 0 20px rgba(245,158,11,0.3)' }}>📦</div>
              <div className="text-3xl font-black text-white mb-1">2,400+</div>
              <h3 className="text-lg font-extrabold text-white mb-2">Safe Nutrition</h3>
              <p className="text-sm leading-relaxed max-h-0 overflow-hidden group-hover:max-h-32 transition-all duration-500" style={{ color: 'rgba(148,163,184,0.9)' }}>Auditable record of high-quality food deliveries, preventing malnutrition and severe weakening in our seniors.</p>
            </div>
          </div>

          {/* 3 - Dignity Kits */}
          <div className="group relative rounded-3xl overflow-hidden cursor-pointer" style={{ minHeight: '24rem' }} onClick={handleCardClick}>
            <img src="/images/hygiene.png" alt="Dignity Kits" className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 transition-all duration-500" style={{ background: 'linear-gradient(to top, rgba(5,10,20,0.96) 0%, rgba(5,10,20,0.45) 50%, rgba(5,10,20,0.2) 100%)' }} />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'linear-gradient(to top, rgba(59,130,246,0.25) 0%, rgba(5,10,20,0.5) 100%)' }} />
            <div className="absolute inset-0 p-7 flex flex-col justify-end">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-xl mb-4 transform group-hover:-translate-y-1 transition-transform duration-300" style={{ background: 'rgba(59,130,246,0.2)', border: '1px solid rgba(96,165,250,0.3)', boxShadow: '0 0 20px rgba(59,130,246,0.3)' }}>🧼</div>
              <h3 className="text-lg font-extrabold text-white mb-2">Dignity Kits</h3>
              <p className="text-sm leading-relaxed max-h-0 overflow-hidden group-hover:max-h-32 transition-all duration-500" style={{ color: 'rgba(148,163,184,0.9)' }}>Personal hygiene kits to maintain health, well-being, and outward dignity with every distribution cycle.</p>
            </div>
          </div>

          {/* 4 - Medical Continuity */}
          <div className="group relative rounded-3xl overflow-hidden cursor-pointer" style={{ minHeight: '24rem' }} onClick={handleCardClick}>
            <img src="/images/vitamins.png" alt="Medical Continuity" className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 transition-all duration-500" style={{ background: 'linear-gradient(to top, rgba(5,10,20,0.96) 0%, rgba(5,10,20,0.45) 50%, rgba(5,10,20,0.2) 100%)' }} />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'linear-gradient(to top, rgba(239,68,68,0.25) 0%, rgba(5,10,20,0.5) 100%)' }} />
            <div className="absolute inset-0 p-7 flex flex-col justify-end">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-xl mb-4 transform group-hover:-translate-y-1 transition-transform duration-300" style={{ background: 'rgba(239,68,68,0.2)', border: '1px solid rgba(252,165,165,0.3)', boxShadow: '0 0 20px rgba(239,68,68,0.3)' }}>💊</div>
              <h3 className="text-lg font-extrabold text-white mb-2">Medical Continuity</h3>
              <p className="text-sm leading-relaxed max-h-0 overflow-hidden group-hover:max-h-32 transition-all duration-500" style={{ color: 'rgba(148,163,184,0.9)' }}>We prevent critical treatment interruptions by supporting co-pays for their vital medicines every month.</p>
            </div>
          </div>

          {/* 5 - Celebration of Life — WIDE card */}
          <div className="group relative rounded-3xl overflow-hidden cursor-pointer lg:col-span-2" style={{ minHeight: '28rem' }} onClick={handleCardClick}>
            <ImageCarousel
              images={[
                "https://images.unsplash.com/photo-1530103862676-de8892bc952f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                "https://images.unsplash.com/photo-1558636508-e0db3814bd1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                "https://images.unsplash.com/photo-1464349153735-7db50ed83c84?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              ]}
              overlayTexts={["Celebrating 80 Years!", "Surprise — Maria, 91!", "You Matter To Us"]}
              interval={4500}
            />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(5,10,20,0.97) 0%, rgba(5,10,20,0.5) 50%, rgba(5,10,20,0.15) 100%)' }} />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'linear-gradient(to top, rgba(236,72,153,0.25) 0%, transparent 60%)' }} />
            <div className="absolute inset-0 p-8 sm:p-10 flex flex-col justify-end">
              <div className="flex items-center gap-3 mb-4 transform group-hover:-translate-y-1 transition-transform duration-300">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl" style={{ background: 'rgba(236,72,153,0.2)', border: '1px solid rgba(249,168,212,0.3)', boxShadow: '0 0 25px rgba(236,72,153,0.3)' }}>🎂</div>
                <span className="text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full" style={{ background: 'rgba(236,72,153,0.15)', color: '#f9a8d4', border: '1px solid rgba(236,72,153,0.25)' }}>Active Mental Health</span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">Celebration of Life</h3>
              <p className="text-sm sm:text-base leading-relaxed max-h-0 overflow-hidden group-hover:max-h-40 transition-all duration-500" style={{ color: 'rgba(203,213,225,0.85)' }}>
                We cut the chain of depression short by organizing monthly <strong className="text-white">Collective Birthdays</strong>. We want them to know they will never blow out candles alone again — because they are not a burden, they are the greatest treasure of our community.
              </p>
            </div>
          </div>

          {/* 6 - Events & Holidays — WIDE card */}
          <div className="group relative rounded-3xl overflow-hidden cursor-pointer lg:col-span-2" style={{ minHeight: '28rem' }} onClick={handleCardClick}>
            <ImageCarousel
              images={[
                "/images/events_thanksgiving.png",
                "/images/events_mothers_day.png",
                "/images/events_gathering.png"
              ]}
              overlayTexts={["Great Thanksgiving Dinner", "Happy Mother's Day!", "Unforgettable Gatherings"]}
              interval={4000}
            />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(5,10,20,0.97) 0%, rgba(5,10,20,0.5) 50%, rgba(5,10,20,0.15) 100%)' }} />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'linear-gradient(to top, rgba(139,92,246,0.25) 0%, transparent 60%)' }} />
            <div className="absolute inset-0 p-8 sm:p-10 flex flex-col justify-end">
              <div className="flex items-center gap-3 mb-4 transform group-hover:-translate-y-1 transition-transform duration-300">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl" style={{ background: 'rgba(139,92,246,0.2)', border: '1px solid rgba(196,181,253,0.3)', boxShadow: '0 0 25px rgba(139,92,246,0.3)' }}>🎉</div>
              </div>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">Events & Holidays</h3>
              <p className="text-sm sm:text-base leading-relaxed max-h-0 overflow-hidden group-hover:max-h-40 transition-all duration-500" style={{ color: 'rgba(203,213,225,0.85)' }}>
                From Mother's and Father's Day to emotional Thanksgiving dinners — we foster deep community bonds that combat cognitive decline caused by isolation, one celebration at a time.
              </p>
            </div>
          </div>

          {/* 7 - Reported Wellness */}
          <div className="group relative rounded-3xl overflow-hidden cursor-pointer" style={{ minHeight: '24rem' }} onClick={handleCardClick}>
            <img src="/images/volunteers_white.png" alt="Reported Wellness" className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 transition-all duration-500" style={{ background: 'linear-gradient(to top, rgba(5,10,20,0.96) 0%, rgba(5,10,20,0.45) 50%, rgba(5,10,20,0.2) 100%)' }} />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'linear-gradient(to top, rgba(20,184,166,0.25) 0%, rgba(5,10,20,0.5) 100%)' }} />
            <div className="absolute inset-0 p-7 flex flex-col justify-end">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-xl mb-4 transform group-hover:-translate-y-1 transition-transform duration-300" style={{ background: 'rgba(20,184,166,0.2)', border: '1px solid rgba(94,234,212,0.3)', boxShadow: '0 0 20px rgba(20,184,166,0.3)' }}>📈</div>
              <h3 className="text-lg font-extrabold text-white mb-2">Reported Wellness</h3>
              <p className="text-sm leading-relaxed max-h-0 overflow-hidden group-hover:max-h-32 transition-all duration-500" style={{ color: 'rgba(148,163,184,0.9)' }}>Periodic self-reports to scientifically measure perceived improvement and proactively adjust each program.</p>
            </div>
          </div>

          {/* 8 - Volunteer Network */}
          <div className="group relative rounded-3xl overflow-hidden cursor-pointer lg:col-span-3" style={{ minHeight: '28rem' }} onClick={handleCardClick}>
            <img src="/images/volunteer_network_gyf.png" alt="Volunteer Network" className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 transition-all duration-500" style={{ background: 'linear-gradient(to top, rgba(5,10,20,0.96) 0%, rgba(5,10,20,0.45) 50%, rgba(5,10,20,0.2) 100%)' }} />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'linear-gradient(to top, rgba(99,102,241,0.25) 0%, transparent 60%)' }} />
            <div className="absolute inset-0 p-8 sm:p-10 flex flex-col justify-end">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-4 transform group-hover:-translate-y-1 transition-transform duration-300" style={{ background: 'rgba(99,102,241,0.2)', border: '1px solid rgba(165,180,252,0.3)', boxShadow: '0 0 25px rgba(99,102,241,0.3)' }}>🤝</div>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">Volunteer Network</h3>
              <p className="text-sm sm:text-base leading-relaxed max-h-0 overflow-hidden group-hover:max-h-40 transition-all duration-500" style={{ color: 'rgba(203,213,225,0.85)' }}>Building a magnificent network of empathetic volunteers, measuring the enormous human value they inject into each distribution route and visit.</p>
            </div>
          </div>

        </div>

        {/* Bottom CTA card */}
        <div className="mt-14 rounded-3xl p-8 sm:p-12 flex flex-col lg:flex-row items-center gap-10" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.10)' }}>
          <div className="flex-1">
            <div className="text-xs font-black uppercase tracking-widest mb-3" style={{ color: '#34d399' }}>Total Transparency</div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">Structure of the GYF Ecosystem</h3>
            <p className="leading-relaxed mb-8" style={{ color: 'rgba(148,163,184,0.85)' }}>
              Our social investment reports cross 3 fundamental axes: <strong className="text-white">Operational Reach</strong>, <strong className="text-white">Quality of Life</strong>, and the differentiating factor, <strong className="text-white">Emotional Impact</strong> — reduction of loneliness and protection of mental health.
            </p>
            <div className="flex flex-wrap gap-4">
              <button onClick={() => onFormModalOpen('alianza')} className="rounded-2xl px-7 py-3.5 text-base font-bold text-white transition-all duration-300 hover:brightness-110" style={{ background: 'linear-gradient(135deg, #059669, #0d9488)', boxShadow: '0 6px 25px rgba(16,185,129,0.35)' }}>
                Request Audit Model
              </button>
              <button onClick={() => onDonateClick(50)} className="rounded-2xl px-7 py-3.5 text-base font-bold text-white transition-all duration-300" style={{ background: 'rgba(255,255,255,0.10)', border: '1px solid rgba(255,255,255,0.2)' }}>
                Make a Donation
              </button>
            </div>
          </div>
          <div className="w-full lg:w-72 rounded-2xl p-7 grid gap-4" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
            {[
              { color: '#34d399', glow: 'rgba(52,211,153,0.5)', label: 'Reach: Physical Goals' },
              { color: '#60a5fa', glow: 'rgba(96,165,250,0.5)', label: 'Quality: Medical Intervention' },
              { color: '#f472b6', glow: 'rgba(244,114,182,0.5)', label: 'Wellness: Mental Health' },
            ].map(item => (
              <div key={item.label} className="flex items-center gap-4">
                <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ background: item.color, boxShadow: `0 0 12px ${item.glow}` }} />
                <span className="text-sm font-bold text-white">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/95 backdrop-blur-sm p-4 transition-opacity duration-300 animate-in fade-in"
          onClick={() => setLightboxImage(null)}
        >
          <div className="relative w-full h-full flex items-center justify-center pointer-events-none">
            <button 
              className="absolute top-4 right-4 md:top-8 md:right-8 text-white/70 hover:text-white bg-slate-800/50 hover:bg-slate-800 rounded-full p-3 transition pointer-events-auto"
              onClick={() => setLightboxImage(null)}
              aria-label="Close fullscreen image"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
            <img 
              src={lightboxImage} 
              alt="Expanded view" 
              className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.5)] animate-in zoom-in-95 duration-300 pointer-events-auto"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </section>
  );
}
