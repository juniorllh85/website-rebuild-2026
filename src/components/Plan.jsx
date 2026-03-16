import React from 'react';

export default function Plan() {
  return (
    <section id="plan" className="border-t bg-white">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight">Plan</h2>
          <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
            We operate with community coordination, per-building tracking, and clear reports to
            guarantee transparency, efficiency, and continuity of service.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          <div className="rounded-3xl border bg-slate-50 p-8">
            <div className="text-emerald-700 font-bold text-sm">Phase 1</div>
            <h3 className="mt-2 text-xl font-bold">Pilot (0–4 months)</h3>
            <p className="mt-4 text-slate-600">
              In one building: identification, first deliveries, logistical validation, and baseline metrics.
            </p>
          </div>

          <div className="rounded-3xl border bg-slate-50 p-8">
            <div className="text-emerald-700 font-bold text-sm">Phase 2</div>
            <h3 className="mt-2 text-xl font-bold">Scaling (4–8 months)</h3>
            <p className="mt-4 text-slate-600">
              Expansion to the second building with more operational capacity and partnerships.
            </p>
          </div>

          <div className="rounded-3xl border bg-slate-50 p-8">
            <div className="text-emerald-700 font-bold text-sm">Phase 3</div>
            <h3 className="mt-2 text-xl font-bold">Coverage (8–12 months)</h3>
            <p className="mt-4 text-slate-600">
              Coverage of the 3 buildings and preparation for replication at the state level.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
