import React, { useState } from 'react';
import { helpCards } from '../data/constants';

export default function HowWeHelp() {
  const [lightboxImage, setLightboxImage] = useState(null);
  return (
    <section id="ayuda" className="border-t bg-emerald-50/50">
      <div className="mx-auto max-w-6xl px-4 py-20 text-center">
        <h2 className="text-3xl font-extrabold tracking-tight">How We Help</h2>
        <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
          Targeted and consistent interventions that go straight to the basic needs of seniors living alone.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {helpCards.map((c) => (
          <div
            key={c.title}
            className="group overflow-hidden rounded-3xl border bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300 flex flex-col"
          >
            <div 
              className="h-72 sm:h-80 w-full overflow-hidden relative cursor-pointer"
              onClick={() => setLightboxImage(c.image)}
            >
              <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition duration-300 z-10 pointer-events-none" />
              <img src={c.image} alt={c.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <div className="flex items-center gap-3">
                <div className="text-3xl">{c.icon}</div>
                <h3 className="text-xl font-bold text-slate-900">{c.title}</h3>
              </div>
              <p className="mt-4 text-slate-600 leading-relaxed flex-1">{c.desc}</p>
              <ul className="mt-6 space-y-3 text-sm text-slate-600 border-t pt-6">
                <li className="flex gap-3 items-start">
                  <span className="text-emerald-600 shrink-0">✓</span>
                  <span>Periodic and organized deliveries</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-emerald-600 shrink-0">✓</span>
                  <span>Focus on continuity and prevention</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-emerald-600 shrink-0">✓</span>
                  <span>Simple and measurable tracking</span>
                </li>
              </ul>
            </div>
          </div>
        ))}
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
