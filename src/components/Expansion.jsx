import React from 'react';

export default function Expansion() {
  return (
    <section id="expansion" className="border-t bg-white">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight">Expansion</h2>
          <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
            Growth goal: expand the model to all three residential buildings of the complex and reach
            between 1,200 and 1,500 seniors with continuous support, maintaining metrics and transparency.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          <div className="rounded-3xl border bg-slate-50 p-8">
            <h3 className="text-xl font-bold">Building 1</h3>
            <p className="mt-4 text-slate-600">
              400–500 residents. Pilot phase for implementation, logistics, and measurement.
            </p>
          </div>

          <div className="rounded-3xl border bg-slate-50 p-8">
            <h3 className="text-xl font-bold">Building 2</h3>
            <p className="mt-4 text-slate-600">
              Expansion after operational stabilization and strengthening of partnerships.
            </p>
          </div>

          <div className="rounded-3xl border bg-slate-50 p-8">
            <h3 className="text-xl font-bold">Building 3</h3>
            <p className="mt-4 text-slate-600">
              Total coverage of the complex and preparation for state replication.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
