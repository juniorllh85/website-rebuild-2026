import React from 'react';

export default function PitchDeck() {
  return (
    <section id="porque" className="bg-slate-900 text-white py-24 sm:py-32 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-rose-500/10 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-6xl px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-emerald-400 font-bold tracking-widest uppercase text-sm mb-4 block">The Problem</span>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6">The Cost of Inaction</h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Loneliness and abandonment in old age are not just emotional issues; they are a public health crisis that silently consumes our community.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="bg-slate-800/50 border border-slate-700 rounded-[2rem] p-8 hover:bg-slate-800 transition duration-300">
            <div className="h-12 w-12 rounded-xl bg-rose-500/20 flex items-center justify-center mb-6">
              <span className="text-2xl">💔</span>
            </div>
            <h3 className="text-2xl font-bold mb-4">Health Impact</h3>
            <p className="text-slate-400 leading-relaxed mb-6">
              Chronic isolation increases the risk of mortality by <strong className="text-white">26%</strong>, comparable to smoking 15 cigarettes a day. Malnutrition accelerates cognitive and physical decline.
            </p>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-center gap-2"><span className="text-rose-400">✗</span> Severe depression</li>
              <li className="flex items-center gap-2"><span className="text-rose-400">✗</span> Preventable malnourishment</li>
              <li className="flex items-center gap-2"><span className="text-rose-400">✗</span> Treatment abandonment</li>
            </ul>
          </div>

          <div className="bg-slate-800/50 border border-slate-700 rounded-[2rem] p-8 hover:bg-slate-800 transition duration-300">
            <div className="h-12 w-12 rounded-xl bg-emerald-500/20 flex items-center justify-center mb-6">
              <span className="text-2xl">📉</span>
            </div>
            <h3 className="text-2xl font-bold mb-4">Economic Impact</h3>
            <p className="text-slate-400 leading-relaxed mb-6">
              Lack of prevention results in frequent emergency room visits and preventable hospitalizations, overwhelming the local health system with massive costs.
            </p>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-center gap-2"><span className="text-emerald-400">✓</span> Less unnecessary 911 calls</li>
              <li className="flex items-center gap-2"><span className="text-emerald-400">✓</span> Reduction in emergency admissions</li>
              <li className="flex items-center gap-2"><span className="text-emerald-400">✓</span> System decongestion</li>
            </ul>
          </div>

          <div className="bg-slate-800/50 border border-slate-700 rounded-[2rem] p-8 hover:bg-slate-800 transition duration-300">
            <div className="h-12 w-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-6">
              <span className="text-2xl">🏛️</span>
            </div>
            <h3 className="text-2xl font-bold mb-4">Social Fabric</h3>
            <p className="text-slate-400 leading-relaxed mb-6">
              A society that forgets those who built it loses its moral compass. The structural dissolution of community support leaves seniors invisible.
            </p>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-center gap-2"><span className="text-blue-400">✗</span> Invisible to the system</li>
              <li className="flex items-center gap-2"><span className="text-blue-400">✗</span> Loss of historical memory</li>
              <li className="flex items-center gap-2"><span className="text-blue-400">✗</span> Individualistic paradigm</li>
            </ul>
          </div>
        </div>

        <div className="mt-20 border-t border-slate-800 pt-16 flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/3">
            <h3 className="text-3xl font-extrabold text-white">Why fund the GYF model?</h3>
          </div>
          <div className="md:w-2/3 grid sm:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <div className="text-emerald-500 text-2xl">🎯</div>
              <div>
                <h4 className="font-bold text-white mb-1">Hyper-focus</h4>
                <p className="text-sm text-slate-400">We don't get diluted. We concentrate on high-density buildings to maximize logistical ROI.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-emerald-500 text-2xl">📊</div>
              <div>
                <h4 className="font-bold text-white mb-1">Traceability</h4>
                <p className="text-sm text-slate-400">Every delivered box, every visit, every birthday is documented to ensure transparency.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
