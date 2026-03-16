import React from 'react';

export default function Vision() {
  return (
    <section id="vision" className="relative overflow-hidden border-t" style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)' }}>
      {/* Ambient glow effects */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(16,185,129,0.12) 0%, transparent 70%)', transform: 'translate(30%, -30%)' }} />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(251,191,36,0.08) 0%, transparent 70%)', transform: 'translate(-30%, 30%)' }} />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">

          {/* Left Side - Text Content */}
          <div className="lg:col-span-6 lg:col-start-1 xl:col-span-5">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-bold tracking-widest uppercase mb-8 border" style={{ background: 'rgba(16,185,129,0.15)', borderColor: 'rgba(16,185,129,0.3)', color: '#6ee7b7' }}>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Vision and Commitment
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white">
              The Model for a <br className="hidden sm:block" />
              <span style={{ background: 'linear-gradient(90deg, #34d399, #2dd4bf, #fbbf24)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Dignified Future</span>
            </h2>

            <p className="mt-6 text-lg leading-relaxed" style={{ color: 'rgba(203,213,225,0.85)' }}>
              We are building an unbreakable community network. Our goal is that <strong className="text-white">no senior</strong> ever has to choose between buying food or medicine again. Designed to offer clear <span className="font-bold" style={{ color: '#34d399' }}>Social Return on Investment (ROI)</span> to our sponsors.
            </p>

            <div className="mt-10 grid gap-4">

              {/* Pillar 1 */}
              <div className="group flex items-start gap-5 rounded-2xl p-5 cursor-default transition-all duration-300 hover:-translate-y-0.5" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', backdropFilter: 'blur(8px)' }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = 'rgba(16,185,129,0.12)'}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)'}
              >
                <div className="shrink-0 flex items-center justify-center w-12 h-12 rounded-xl text-white shadow-lg transition-all duration-300 group-hover:scale-110" style={{ background: 'linear-gradient(135deg, #059669, #0d9488)', boxShadow: '0 4px 20px rgba(16,185,129,0.4)' }}>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">Restoring Dignity</h4>
                  <p className="mt-1 text-sm leading-snug" style={{ color: 'rgba(148,163,184,0.9)' }}>We guarantee the essentials month by month, bringing peace of mind back to their homes and families.</p>
                </div>
              </div>

              {/* Pillar 2 */}
              <div className="group flex items-start gap-5 rounded-2xl p-5 cursor-default transition-all duration-300 hover:-translate-y-0.5" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', backdropFilter: 'blur(8px)' }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = 'rgba(59,130,246,0.12)'}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)'}
              >
                <div className="shrink-0 flex items-center justify-center w-12 h-12 rounded-xl text-white shadow-lg transition-all duration-300 group-hover:scale-110" style={{ background: 'linear-gradient(135deg, #2563eb, #4f46e5)', boxShadow: '0 4px 20px rgba(59,130,246,0.4)' }}>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">Radical Transparency</h4>
                  <p className="mt-1 text-sm leading-snug" style={{ color: 'rgba(148,163,184,0.9)' }}>100% auditable data: We rigorously measure and report every delivery and its impact monthly.</p>
                </div>
              </div>

              {/* Pillar 3 */}
              <div className="group flex items-start gap-5 rounded-2xl p-5 cursor-default transition-all duration-300 hover:-translate-y-0.5" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', backdropFilter: 'blur(8px)' }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = 'rgba(251,191,36,0.10)'}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)'}
              >
                <div className="shrink-0 flex items-center justify-center w-12 h-12 rounded-xl text-white shadow-lg transition-all duration-300 group-hover:scale-110" style={{ background: 'linear-gradient(135deg, #d97706, #ea580c)', boxShadow: '0 4px 20px rgba(251,191,36,0.4)' }}>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">Highly Scalable Model</h4>
                  <p className="mt-1 text-sm leading-snug" style={{ color: 'rgba(148,163,184,0.9)' }}>Geolocated pilot structured to be a replicable model in communities across the state of Florida.</p>
                </div>
              </div>

            </div>
          </div>

          {/* High Impact Photography & Floating Box - Right Side */}
          <div className="lg:col-span-6 xl:col-span-7 mt-16 lg:mt-0 relative">
            {/* Decorative glow ring behind the image */}
            <div className="absolute -inset-6 rounded-[3rem] pointer-events-none" style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.2), rgba(45,212,191,0.1), rgba(251,191,36,0.1))', filter: 'blur(32px)' }} />

            <div className="relative mx-auto w-full rounded-[2rem] shadow-2xl lg:max-w-md xl:max-w-lg lg:ml-auto overflow-hidden isolate" style={{ boxShadow: '0 40px 80px -20px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.08)' }}>
              <img
                src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Volunteer warmly holding hands of a smiling senior woman, supporting her unconditionally"
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-1000 ease-out"
                style={{ aspectRatio: "4/5" }}
              />
              {/* Rich multi-stop gradient overlay */}
              <div className="absolute inset-0 z-10 pointer-events-none" style={{ background: 'linear-gradient(to top, rgba(15,23,42,0.90) 0%, rgba(15,23,42,0.3) 40%, transparent 70%)' }}></div>

              {/* Stats bar inside image at bottom */}
              <div className="absolute bottom-0 left-0 right-0 z-20 p-5 flex gap-3">
                {[
                  { value: '500+', label: 'Seniors Helped', color: '#34d399' },
                  { value: '100%', label: 'Transparent', color: '#38bdf8' },
                  { value: '3', label: 'Buildings', color: '#fbbf24' },
                ].map((stat) => (
                  <div key={stat.label} className="flex-1 rounded-xl p-3 text-center" style={{ background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.12)' }}>
                    <div className="text-xl font-black" style={{ color: stat.color }}>{stat.value}</div>
                    <div className="text-xs font-medium mt-0.5" style={{ color: 'rgba(255,255,255,0.6)' }}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating Quote Card - Glassmorphism on dark */}
            <div className="absolute -bottom-6 -left-4 sm:-left-10 lg:-left-16 rounded-3xl p-6 max-w-xs transform hover:-translate-y-2 transition-transform duration-500 z-30" style={{ background: 'rgba(255,255,255,0.10)', backdropFilter: 'blur(24px)', border: '1px solid rgba(255,255,255,0.18)', boxShadow: '0 20px 60px rgba(0,0,0,0.4)' }}>
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4" style={{ fill: '#fbbf24', color: '#fbbf24' }} viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                ))}
              </div>
              <p className="text-sm font-semibold leading-snug text-white">
                "To create a smile and life-giving hope in every home we visit."
              </p>
              <div className="mt-4 flex items-center gap-3 pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.15)' }}>
                <div className="h-9 w-9 shrink-0 rounded-full flex items-center justify-center text-white font-black text-xs" style={{ background: 'linear-gradient(135deg, #059669, #0d9488)', boxShadow: '0 2px 12px rgba(16,185,129,0.5)' }}>
                  GYF
                </div>
                <div>
                  <div className="text-xs font-bold text-white leading-tight">Our Promise</div>
                  <div className="text-xs font-bold uppercase tracking-widest mt-0.5" style={{ color: '#34d399' }}>The Foundation</div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
