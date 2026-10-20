import React from 'react';
import { supportCards } from '../data/constants';
import { useT } from '../router';

export default function DonationSection({ onDonateClick, onFormModalOpen }) {
  const t = useT();
  const mo = t('/mo', '/mes');
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
            <span className="animate-pulse">⭐</span> {t('Recurring Donation Program', 'Programa de donación recurrente')}
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight text-white">
            {t('Become a', 'Conviértase en')}{' '}
            <span style={{ background: 'linear-gradient(90deg, #fbbf24, #f59e0b, #fcd34d)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              {t('Golden Guardian', 'Guardián Dorado')}
            </span>
          </h2>
          <p className="mt-6 text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: 'rgba(203,213,225,0.8)' }}>
            {t('Behind every delivery is a senior who ', 'Detrás de cada entrega hay un adulto mayor que ')}<strong className="text-white">{t('no longer feels alone', 'ya no se siente solo')}</strong>{t('. Your monthly commitment is the bridge between their loneliness and their joy.', '. Su compromiso mensual es el puente entre su soledad y su alegría.')}
          </p>
          {/* Emotional stats row */}
          <div className="mt-10 flex flex-wrap justify-center gap-8">
            {[
              { emoji: '🏠', value: '500+', label: t('Seniors reached', 'Adultos mayores atendidos') },
              { emoji: '📦', value: '2,400+', label: t('Deliveries made', 'Entregas realizadas') },
              { emoji: '❤️', value: '100%', label: t('Commitment', 'Compromiso') },
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
            <h3 className="text-lg font-extrabold text-white">{t('Seed of Support', 'Semilla de apoyo')}</h3>
            <div className="mt-4 flex items-baseline justify-center gap-1">
              <span className="text-4xl font-black text-white">$15</span>
              <span className="text-sm font-semibold" style={{ color: 'rgba(148,163,184,0.7)' }}>{mo}</span>
            </div>
            <p className="mt-3 text-xs leading-relaxed" style={{ color: 'rgba(148,163,184,0.8)' }}>{t('Help us cover the logistical backbone that keeps deliveries running every month.', 'Ayúdenos a cubrir la base logística que mantiene las entregas funcionando cada mes.')}</p>
            <button onClick={() => onDonateClick(15)} className="mt-7 w-full rounded-2xl py-3 text-sm font-bold text-white transition-all duration-300 hover:brightness-110" style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)' }}>
              {t('Join with $15', 'Únase con $15')}
            </button>
          </div>

          {/* Tier 2 - Hot Meal */}
          <div className="group relative rounded-3xl p-7 flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-2 cursor-pointer"
            style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.10)', backdropFilter: 'blur(10px)' }}
          >
            <div className="h-16 w-16 rounded-2xl flex items-center justify-center text-3xl mb-5" style={{ background: 'rgba(251,191,36,0.12)', boxShadow: '0 0 30px rgba(251,191,36,0.25)' }}>🍲</div>
            <h3 className="text-lg font-extrabold text-white">{t('Hot Meal', 'Comida caliente')}</h3>
            <div className="mt-4 flex items-baseline justify-center gap-1">
              <span className="text-4xl font-black" style={{ color: '#fbbf24' }}>$25</span>
              <span className="text-sm font-semibold" style={{ color: 'rgba(148,163,184,0.7)' }}>{mo}</span>
            </div>
            <p className="mt-3 text-xs leading-relaxed" style={{ color: 'rgba(148,163,184,0.8)' }}>{t('Ensures warm, nutritious meals for a senior for one full week every month.', 'Garantiza comidas calientes y nutritivas para un adulto mayor durante una semana completa cada mes.')}</p>
            <button onClick={() => onDonateClick(25)} className="mt-7 w-full rounded-2xl py-3 text-sm font-bold transition-all duration-300" style={{ background: 'rgba(251,191,36,0.15)', border: '1px solid rgba(251,191,36,0.35)', color: '#fcd34d' }}>
              {t('Join with $25', 'Únase con $25')}
            </button>
          </div>

          {/* Tier 3 - ComprehensiveCare — FEATURED */}
          <div className="group relative rounded-3xl p-8 flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-3 cursor-pointer lg:-translate-y-4"
            style={{ background: 'linear-gradient(145deg, rgba(5,150,105,0.25), rgba(6,95,70,0.35))', border: '2px solid rgba(52,211,153,0.5)', backdropFilter: 'blur(10px)', boxShadow: '0 0 60px rgba(16,185,129,0.2), inset 0 1px 0 rgba(255,255,255,0.1)' }}
          >
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 rounded-full text-xs font-black uppercase tracking-widest" style={{ background: 'linear-gradient(90deg, #059669, #0d9488)', color: 'white', boxShadow: '0 4px 20px rgba(16,185,129,0.4)' }}>
              {t('✨ Key Impact', '✨ Impacto clave')}
            </div>
            <div className="h-16 w-16 rounded-2xl flex items-center justify-center text-3xl mb-5" style={{ background: 'rgba(52,211,153,0.15)', boxShadow: '0 0 40px rgba(52,211,153,0.35)' }}>💚</div>
            <h3 className="text-lg font-extrabold text-white">{t('Comprehensive Care', 'Cuidado integral')}</h3>
            <div className="mt-4 flex items-baseline justify-center gap-1">
              <span className="text-5xl font-black" style={{ color: '#34d399', textShadow: '0 0 30px rgba(52,211,153,0.5)' }}>$50</span>
              <span className="text-sm font-semibold" style={{ color: 'rgba(148,163,184,0.7)' }}>{mo}</span>
            </div>
            <div className="mt-2 text-xs font-bold px-3 py-1 rounded-full" style={{ background: 'rgba(52,211,153,0.2)', color: '#6ee7b7' }}>{t('Food + Hygiene', 'Alimentos + higiene')}</div>
            <p className="mt-3 text-xs leading-relaxed" style={{ color: 'rgba(203,213,225,0.8)' }}>{t('Complete protection — nutrition and personal dignity, delivered together monthly.', 'Protección completa: nutrición y dignidad personal, entregadas juntas cada mes.')}</p>
            <button onClick={() => onDonateClick(50)} className="mt-7 w-full rounded-2xl py-3.5 text-sm font-black text-white transition-all duration-300 hover:brightness-110 hover:scale-105" style={{ background: 'linear-gradient(135deg, #059669, #0d9488)', boxShadow: '0 8px 30px rgba(16,185,129,0.4)' }}>
              {t('Join with $50', 'Únase con $50')}
            </button>
          </div>

          {/* Tier 4 - Guardian */}
          <div className="group relative rounded-3xl p-7 flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-2 cursor-pointer"
            style={{ background: 'linear-gradient(145deg, rgba(245,158,11,0.15), rgba(120,53,15,0.20))', border: '1px solid rgba(251,191,36,0.25)', backdropFilter: 'blur(10px)' }}
          >
            <div className="h-16 w-16 rounded-2xl flex items-center justify-center text-3xl mb-5" style={{ background: 'rgba(251,191,36,0.12)', boxShadow: '0 0 40px rgba(251,191,36,0.35)' }}>👑</div>
            <h3 className="text-lg font-extrabold text-white">{t('Sponsoring Guardian', 'Guardián patrocinador')}</h3>
            <div className="mt-4 flex items-baseline justify-center gap-1">
              <span className="text-4xl font-black" style={{ color: '#fbbf24', textShadow: '0 0 25px rgba(251,191,36,0.5)' }}>$100</span>
              <span className="text-sm font-semibold" style={{ color: 'rgba(148,163,184,0.7)' }}>{mo}</span>
            </div>
            <div className="mt-2 text-xs font-bold px-3 py-1 rounded-full" style={{ background: 'rgba(251,191,36,0.15)', color: '#fcd34d' }}>{t('Sponsor 1 Senior', 'Patrocine a 1 adulto mayor')}</div>
            <p className="mt-3 text-xs leading-relaxed" style={{ color: 'rgba(148,163,184,0.8)' }}>{t('Your name becomes their shield — full monthly coverage for one real person.', 'Su nombre se convierte en su escudo: cobertura mensual completa para una persona real.')}</p>
            <button onClick={() => onDonateClick(100)} className="mt-7 w-full rounded-2xl py-3 text-sm font-black text-slate-900 transition-all duration-300 hover:brightness-110" style={{ background: 'linear-gradient(135deg, #fbbf24, #f59e0b)', boxShadow: '0 8px 30px rgba(251,191,36,0.35)' }}>
              {t('Become a Guardian', 'Hágase Guardián')}
            </button>
          </div>

        </div>

        {/* OTHER WAYS TO SUPPORT */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-extrabold text-white">{t('Choose another way to support', 'Elija otra forma de apoyar')}</h3>
            <p className="mt-3 text-sm" style={{ color: 'rgba(148,163,184,0.7)' }}>{t('Every contribution — big or small — creates real impact.', 'Cada aporte, grande o pequeño, genera un impacto real.')}</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {supportCards.map((c) => (
              <div key={c.title} className="group overflow-hidden rounded-3xl flex flex-col transition-all duration-500 hover:-translate-y-2"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.10)', backdropFilter: 'blur(10px)', boxShadow: '0 4px 20px rgba(0,0,0,0.2)' }}
              >
                <div className="h-52 w-full overflow-hidden relative">
                  <div className="absolute inset-0 z-10 pointer-events-none" style={{ background: 'linear-gradient(to top, rgba(10,15,30,0.9) 0%, rgba(10,15,30,0.3) 50%, transparent 80%)' }} />
                  {c.image ? (
                    <img src={c.image} alt={t(c.title, c.titleEs)} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center" style={{ background: 'linear-gradient(135deg, rgba(30,41,59,0.8), rgba(15,23,42,0.9))' }}>
                      <span className="text-5xl mb-2 opacity-60">{c.icon}</span>
                      <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'rgba(148,163,184,0.5)' }}>{t(c.title, c.titleEs)}</span>
                    </div>
                  )}
                  {/* Icon overlay at bottom left of image */}
                  <div className="absolute bottom-3 left-4 z-20 flex items-center gap-2">
                    <span className="text-2xl drop-shadow-lg">{c.icon}</span>
                    <h3 className="text-base font-extrabold text-white drop-shadow-md">{t(c.title, c.titleEs)}</h3>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-sm leading-relaxed flex-1" style={{ color: 'rgba(148,163,184,0.85)' }}>{t(c.desc, c.descEs)}</p>
                  <div className="mt-5 w-full">
                    <button
                      onClick={() => onFormModalOpen(c.type)}
                      className="w-full inline-flex items-center justify-center rounded-2xl py-3 text-sm font-bold text-white transition-all duration-300 hover:brightness-110"
                      style={{ background: 'linear-gradient(135deg, #059669, #0d9488)', boxShadow: '0 4px 20px rgba(16,185,129,0.3)' }}
                    >
                      {t('Apply / Register →', 'Solicitar / Inscribirse →')}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* PAYMENT NOTICE */}
        <div className="mt-14 rounded-3xl p-8 flex flex-col sm:flex-row gap-6 items-center text-center sm:text-left" style={{ background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.25)' }}>
          <div className="text-4xl flex-shrink-0">🔒</div>
          <div className="flex-1">
            <div className="text-sm font-black text-white mb-1">{t('Secure Online Donations — 100% Safe', 'Donaciones en línea seguras, 100% protegidas')}</div>
            <p className="text-sm" style={{ color: 'rgba(148,163,184,0.8)' }}>
              {t('We accept ', 'Aceptamos ')}<strong className="text-white">{t('credit & debit cards', 'tarjetas de crédito y débito')}</strong>{t(" securely via Stripe. Your payment information is encrypted and never stored on our servers. All donations are tax-deductible — you'll receive a receipt instantly.", ' de forma segura a través de Stripe. Su información de pago está cifrada y nunca se guarda en nuestros servidores. Todas las donaciones son deducibles de impuestos y recibirá un recibo al instante.')}
            </p>
          </div>
          <div className="flex flex-col gap-2 items-center flex-shrink-0">
            <div className="flex gap-2 items-center">
              {['💳', '🅿️'].map(icon => (
                <span key={icon} className="text-2xl">{icon}</span>
              ))}
            </div>
            <span className="text-xs font-bold" style={{ color: '#34d399' }}>EIN: 35-2905128</span>
          </div>
        </div>

      </div>
    </section>
  );
}
