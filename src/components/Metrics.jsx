import React, { useState } from 'react';
import ImageCarousel from './ImageCarousel';
import { useT } from '../router';

export default function Metrics({ onFormModalOpen, onDonateClick }) {
  const [lightboxImage, setLightboxImage] = useState(null);
  const t = useT();

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
            {t('📊 Impact Programs', '📊 Programas de impacto')}
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white mb-6">
            {t('More than Metrics:', 'Más que cifras:')}{' '}
            <span style={{ background: 'linear-gradient(90deg, #34d399, #2dd4bf)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              {t('Companionship & Dignity', 'Compañía y dignidad')}
            </span>
          </h2>
          <p className="text-lg leading-relaxed" style={{ color: 'rgba(203,213,225,0.8)' }}>
            {t('For our donors, clear and honest numbers. For our seniors, real companionship, dignity, help with their medicines — and the certainty that ', 'Para nuestros donantes, cifras claras y honestas. Para nuestros adultos mayores, compañía real, dignidad, ayuda con sus medicinas y la certeza de que ')}<strong className="text-white">{t('they are not a burden, they have us.', 'no son una carga: nos tienen a nosotros.')}</strong>
          </p>
        </div>

        {/* BENTO GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

          {/* 1 - Lives Reached */}
          <div className="group relative rounded-3xl overflow-hidden cursor-pointer" style={{ minHeight: '24rem' }} onClick={handleCardClick}>
            <img src="/images/hero.webp" alt={t('Lives Reached', 'Vidas alcanzadas')} className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 transition-all duration-500" style={{ background: 'linear-gradient(to top, rgba(5,10,20,0.96) 0%, rgba(5,10,20,0.45) 50%, rgba(5,10,20,0.2) 100%)' }} />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'linear-gradient(to top, rgba(16,185,129,0.25) 0%, rgba(5,10,20,0.5) 100%)' }} />
            <div className="absolute inset-0 p-7 flex flex-col justify-end">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-xl mb-4 transform group-hover:-translate-y-1 transition-transform duration-300" style={{ background: 'rgba(16,185,129,0.2)', border: '1px solid rgba(52,211,153,0.3)', boxShadow: '0 0 20px rgba(16,185,129,0.3)' }}>👥</div>
              <div className="text-3xl font-black text-white mb-1">500+</div>
              <h3 className="text-lg font-extrabold text-white mb-2">{t('Lives Reached', 'Vidas alcanzadas')}</h3>
              <p className="text-sm leading-relaxed " style={{ color: 'rgba(148,163,184,0.9)' }}>{t('Rigorous census of active beneficiaries in the pilot, ensuring sustained support month by month without exclusions.', 'Censo riguroso de beneficiarios activos en el piloto, que garantiza un apoyo constante mes a mes sin exclusiones.')}</p>
            </div>
          </div>

          {/* 2 - Safe Nutrition */}
          <div className="group relative rounded-3xl overflow-hidden cursor-pointer" style={{ minHeight: '24rem' }} onClick={handleCardClick}>
            <img src="/images/food.webp" alt={t('Safe Nutrition', 'Nutrición segura')} className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 transition-all duration-500" style={{ background: 'linear-gradient(to top, rgba(5,10,20,0.96) 0%, rgba(5,10,20,0.45) 50%, rgba(5,10,20,0.2) 100%)' }} />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'linear-gradient(to top, rgba(245,158,11,0.25) 0%, rgba(5,10,20,0.5) 100%)' }} />
            <div className="absolute inset-0 p-7 flex flex-col justify-end">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-xl mb-4 transform group-hover:-translate-y-1 transition-transform duration-300" style={{ background: 'rgba(245,158,11,0.2)', border: '1px solid rgba(251,191,36,0.3)', boxShadow: '0 0 20px rgba(245,158,11,0.3)' }}>📦</div>
              <div className="text-3xl font-black text-white mb-1">2,400+</div>
              <h3 className="text-lg font-extrabold text-white mb-2">{t('Safe Nutrition', 'Nutrición segura')}</h3>
              <p className="text-sm leading-relaxed " style={{ color: 'rgba(148,163,184,0.9)' }}>{t('Auditable record of high-quality food deliveries, preventing malnutrition and severe weakening in our seniors.', 'Registro verificable de entregas de alimentos de calidad, que previene la desnutrición y el debilitamiento grave de nuestros adultos mayores.')}</p>
            </div>
          </div>

          {/* 3 - Dignity Kits */}
          <div className="group relative rounded-3xl overflow-hidden cursor-pointer" style={{ minHeight: '24rem' }} onClick={handleCardClick}>
            <img src="/images/hygiene.webp" alt={t('Dignity Kits', 'Kits de dignidad')} className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 transition-all duration-500" style={{ background: 'linear-gradient(to top, rgba(5,10,20,0.96) 0%, rgba(5,10,20,0.45) 50%, rgba(5,10,20,0.2) 100%)' }} />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'linear-gradient(to top, rgba(59,130,246,0.25) 0%, rgba(5,10,20,0.5) 100%)' }} />
            <div className="absolute inset-0 p-7 flex flex-col justify-end">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-xl mb-4 transform group-hover:-translate-y-1 transition-transform duration-300" style={{ background: 'rgba(59,130,246,0.2)', border: '1px solid rgba(96,165,250,0.3)', boxShadow: '0 0 20px rgba(59,130,246,0.3)' }}>🧼</div>
              <h3 className="text-lg font-extrabold text-white mb-2">{t('Dignity Kits', 'Kits de dignidad')}</h3>
              <p className="text-sm leading-relaxed " style={{ color: 'rgba(148,163,184,0.9)' }}>{t('Personal hygiene kits to maintain health, well-being, and outward dignity with every distribution cycle.', 'Kits de higiene personal para mantener la salud, el bienestar y la dignidad en cada ciclo de entrega.')}</p>
            </div>
          </div>

          {/* 4 - Medical Continuity */}
          <div className="group relative rounded-3xl overflow-hidden cursor-pointer" style={{ minHeight: '24rem' }} onClick={handleCardClick}>
            <img src="/images/vitamins.webp" alt={t('Medical Continuity', 'Continuidad médica')} className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 transition-all duration-500" style={{ background: 'linear-gradient(to top, rgba(5,10,20,0.96) 0%, rgba(5,10,20,0.45) 50%, rgba(5,10,20,0.2) 100%)' }} />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'linear-gradient(to top, rgba(239,68,68,0.25) 0%, rgba(5,10,20,0.5) 100%)' }} />
            <div className="absolute inset-0 p-7 flex flex-col justify-end">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-xl mb-4 transform group-hover:-translate-y-1 transition-transform duration-300" style={{ background: 'rgba(239,68,68,0.2)', border: '1px solid rgba(252,165,165,0.3)', boxShadow: '0 0 20px rgba(239,68,68,0.3)' }}>💊</div>
              <h3 className="text-lg font-extrabold text-white mb-2">{t('Medical Continuity', 'Continuidad médica')}</h3>
              <p className="text-sm leading-relaxed " style={{ color: 'rgba(148,163,184,0.9)' }}>{t('We prevent critical treatment interruptions by supporting co-pays for their vital medicines every month.', 'Evitamos interrupciones críticas en sus tratamientos ayudando cada mes con los copagos de sus medicinas esenciales.')}</p>
            </div>
          </div>

          {/* 5 - Celebration of Life — WIDE card */}
          <div className="group relative rounded-3xl overflow-hidden cursor-pointer lg:col-span-2" style={{ minHeight: '28rem' }} onClick={handleCardClick}>
            <ImageCarousel
              images={[
                "/images/carmen_birthday_custom.webp",
                "/images/festivo_4.webp",
                "/images/festivo_5.webp"
              ]}
              overlayTexts={[t("Monthly Birthday Celebration", "Celebración mensual de cumpleaños"), t("Celebrating Together", "Celebrando juntos"), t("You Matter To Us", "Usted nos importa")]}
              interval={4500}
            />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(5,10,20,0.97) 0%, rgba(5,10,20,0.5) 50%, rgba(5,10,20,0.15) 100%)' }} />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'linear-gradient(to top, rgba(236,72,153,0.25) 0%, transparent 60%)' }} />
            <div className="absolute inset-0 p-8 sm:p-10 flex flex-col justify-end">
              <div className="flex items-center gap-3 mb-4 transform group-hover:-translate-y-1 transition-transform duration-300">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl" style={{ background: 'rgba(236,72,153,0.2)', border: '1px solid rgba(249,168,212,0.3)', boxShadow: '0 0 25px rgba(236,72,153,0.3)' }}>🎂</div>
                <span className="text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full" style={{ background: 'rgba(236,72,153,0.15)', color: '#f9a8d4', border: '1px solid rgba(236,72,153,0.25)' }}>{t('Active Mental Health', 'Salud mental activa')}</span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">{t('Celebration of Life', 'Celebración de la vida')}</h3>
              <p className="text-sm sm:text-base leading-relaxed " style={{ color: 'rgba(203,213,225,0.85)' }}>
                {t('We cut the chain of depression short by organizing monthly ', 'Cortamos la cadena de la depresión organizando cada mes ')}<strong className="text-white">{t('Collective Birthdays', 'Cumpleaños colectivos')}</strong>{t('. We want them to know they will never blow out candles alone again — because they are not a burden, they are the greatest treasure of our community.', '. Queremos que sepan que nunca más soplarán las velas solos, porque no son una carga: son el mayor tesoro de nuestra comunidad.')}
              </p>
            </div>
          </div>

          {/* 6 - Events & Holidays — WIDE card */}
          <div className="group relative rounded-3xl overflow-hidden cursor-pointer lg:col-span-2" style={{ minHeight: '28rem' }} onClick={handleCardClick}>
            <ImageCarousel
              images={[
                "/images/events_thanksgiving.webp",
                "/images/events_mothers_day.webp",
                "/images/events_gathering.webp"
              ]}
              overlayTexts={[t("Great Thanksgiving Dinner", "Gran cena de Acción de Gracias"), t("Happy Mother's Day!", "¡Feliz Día de las Madres!"), t("Unforgettable Gatherings", "Encuentros inolvidables")]}
              interval={4000}
            />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(5,10,20,0.97) 0%, rgba(5,10,20,0.5) 50%, rgba(5,10,20,0.15) 100%)' }} />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'linear-gradient(to top, rgba(139,92,246,0.25) 0%, transparent 60%)' }} />
            <div className="absolute inset-0 p-8 sm:p-10 flex flex-col justify-end">
              <div className="flex items-center gap-3 mb-4 transform group-hover:-translate-y-1 transition-transform duration-300">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl" style={{ background: 'rgba(139,92,246,0.2)', border: '1px solid rgba(196,181,253,0.3)', boxShadow: '0 0 25px rgba(139,92,246,0.3)' }}>🎉</div>
              </div>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">{t('Events & Holidays', 'Eventos y festividades')}</h3>
              <p className="text-sm sm:text-base leading-relaxed " style={{ color: 'rgba(203,213,225,0.85)' }}>
                {t("From Mother's and Father's Day to emotional Thanksgiving dinners — we foster deep community bonds that combat cognitive decline caused by isolation, one celebration at a time.", 'Desde el Día de las Madres y de los Padres hasta emotivas cenas de Acción de Gracias, fomentamos lazos comunitarios profundos que combaten el deterioro cognitivo causado por el aislamiento, una celebración a la vez.')}
              </p>
            </div>
          </div>

          {/* 7 - Reported Wellness */}
          <div className="group relative rounded-3xl overflow-hidden cursor-pointer" style={{ minHeight: '24rem' }} onClick={handleCardClick}>
            <img src="/images/volunteers_white.webp" alt={t('Reported Wellness', 'Bienestar reportado')} className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 transition-all duration-500" style={{ background: 'linear-gradient(to top, rgba(5,10,20,0.96) 0%, rgba(5,10,20,0.45) 50%, rgba(5,10,20,0.2) 100%)' }} />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'linear-gradient(to top, rgba(20,184,166,0.25) 0%, rgba(5,10,20,0.5) 100%)' }} />
            <div className="absolute inset-0 p-7 flex flex-col justify-end">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-xl mb-4 transform group-hover:-translate-y-1 transition-transform duration-300" style={{ background: 'rgba(20,184,166,0.2)', border: '1px solid rgba(94,234,212,0.3)', boxShadow: '0 0 20px rgba(20,184,166,0.3)' }}>📈</div>
              <h3 className="text-lg font-extrabold text-white mb-2">{t('Reported Wellness', 'Bienestar reportado')}</h3>
              <p className="text-sm leading-relaxed " style={{ color: 'rgba(148,163,184,0.9)' }}>{t('Periodic self-reports to scientifically measure perceived improvement and proactively adjust each program.', 'Autoevaluaciones periódicas para medir de forma rigurosa la mejora percibida y ajustar cada programa a tiempo.')}</p>
            </div>
          </div>

          {/* 8 - Volunteer Network */}
          <div className="group relative rounded-3xl overflow-hidden cursor-pointer lg:col-span-3" style={{ minHeight: '28rem' }} onClick={handleCardClick}>
            <img src="/images/volunteer_network_gyf.webp" alt={t('Volunteer Network', 'Red de voluntarios')} className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 transition-all duration-500" style={{ background: 'linear-gradient(to top, rgba(5,10,20,0.96) 0%, rgba(5,10,20,0.45) 50%, rgba(5,10,20,0.2) 100%)' }} />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'linear-gradient(to top, rgba(99,102,241,0.25) 0%, transparent 60%)' }} />
            <div className="absolute inset-0 p-8 sm:p-10 flex flex-col justify-end">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-4 transform group-hover:-translate-y-1 transition-transform duration-300" style={{ background: 'rgba(99,102,241,0.2)', border: '1px solid rgba(165,180,252,0.3)', boxShadow: '0 0 25px rgba(99,102,241,0.3)' }}>🤝</div>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">{t('Volunteer Network', 'Red de voluntarios')}</h3>
              <p className="text-sm sm:text-base leading-relaxed " style={{ color: 'rgba(203,213,225,0.85)' }}>{t('Building a magnificent network of empathetic volunteers, measuring the enormous human value they inject into each distribution route and visit.', 'Construimos una gran red de voluntarios con empatía y medimos el enorme valor humano que aportan en cada ruta de entrega y en cada visita.')}</p>
            </div>
          </div>

        </div>

        {/* Bottom CTA card */}
        <div className="mt-14 rounded-3xl p-8 sm:p-12 flex flex-col lg:flex-row items-center gap-10" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.10)' }}>
          <div className="flex-1">
            <div className="text-xs font-black uppercase tracking-widest mb-3" style={{ color: '#34d399' }}>{t('Total Transparency', 'Transparencia total')}</div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">{t('How We Measure Our Impact', 'Cómo medimos nuestro impacto')}</h3>
            <p className="leading-relaxed mb-8" style={{ color: 'rgba(148,163,184,0.85)' }}>
              {t('Our impact reports look at 3 areas: ', 'Nuestros informes de impacto miden 3 áreas: ')}<strong className="text-white">{t('Operational Reach', 'Alcance operativo')}</strong>, <strong className="text-white">{t('Quality of Life', 'Calidad de vida')}</strong>{t(', and the differentiating factor, ', ' y el factor diferenciador, ')}<strong className="text-white">{t('Emotional Impact', 'Impacto emocional')}</strong>{t(' — reduction of loneliness and protection of mental health.', ': la reducción de la soledad y la protección de la salud mental.')}
            </p>
            <div className="flex flex-wrap gap-4">
              <button onClick={() => onFormModalOpen('alianza')} className="rounded-2xl px-7 py-3.5 text-base font-bold text-white transition-all duration-300 hover:brightness-110" style={{ background: 'linear-gradient(135deg, #059669, #0d9488)', boxShadow: '0 6px 25px rgba(16,185,129,0.35)' }}>
                {t('Request Our Impact Report', 'Solicitar nuestro informe de impacto')}
              </button>
              <button onClick={() => onDonateClick(50)} className="rounded-2xl px-7 py-3.5 text-base font-bold text-white transition-all duration-300" style={{ background: 'rgba(255,255,255,0.10)', border: '1px solid rgba(255,255,255,0.2)' }}>
                {t('Make a Donation', 'Hacer una donación')}
              </button>
            </div>
          </div>
          <div className="w-full lg:w-72 rounded-2xl p-7 grid gap-4" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
            {[
              { color: '#34d399', glow: 'rgba(52,211,153,0.5)', label: t('Reach: Physical Goals', 'Alcance: metas físicas') },
              { color: '#60a5fa', glow: 'rgba(96,165,250,0.5)', label: t('Quality: Medical Intervention', 'Calidad: intervención médica') },
              { color: '#f472b6', glow: 'rgba(244,114,182,0.5)', label: t('Wellness: Mental Health', 'Bienestar: salud mental') },
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
              aria-label={t('Close fullscreen image', 'Cerrar imagen ampliada')}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
            <img 
              src={lightboxImage} 
              alt={t('Expanded view', 'Vista ampliada')} 
              className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.5)] animate-in zoom-in-95 duration-300 pointer-events-auto"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </section>
  );
}
