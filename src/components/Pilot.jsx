import React from 'react';

export default function Pilot({ onDonateClick }) {
  return (
    <section id="piloto" className="border-t bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-20 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight">Pilot Project</h2>
          <p className="mt-4 text-lg text-slate-600">
            Initial phase: a residential building in Miami-Dade, providing coverage for 400–500 seniors
            living alone. We will mechanically measure monthly deliveries, needs, and wellness outcomes.
          </p>

          <div className="mt-8 grid gap-3">
            <div className="rounded-2xl border bg-white p-4">
              <div className="font-semibold">Efficient logistics</div>
              <div className="text-slate-600">
                A centralized point reduces costs and maximizes reach.
              </div>
            </div>
            <div className="rounded-2xl border bg-white p-4">
              <div className="font-semibold">Measurable impact</div>
              <div className="text-slate-600">
                Registered deliveries and reported wellness for transparency.
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-slate-900 text-white p-10 shadow-xl">
          <div className="text-sm text-white/70">Opportunity for donors and grants</div>
          <div className="mt-3 text-2xl font-extrabold leading-snug">
            Funding the pilot means building a replicable model for all of Florida.
          </div>
          <p className="mt-6 text-white/80">
            With sustained resources, the pilot can expand within the operational year to all three buildings.
          </p>
          <div className="mt-8">
            <button
              onClick={() => onDonateClick(50)}
              className="rounded-2xl bg-emerald-500 text-white px-5 py-3 font-semibold hover:bg-emerald-600"
            >
              Fund this pilot
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
