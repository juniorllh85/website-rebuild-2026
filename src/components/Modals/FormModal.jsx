import React from 'react';

export default function FormModal({ type, onClose, onSubmit }) {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8 overflow-y-auto w-full h-full bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-2xl my-auto flex flex-col pointer-events-auto transform transition-all animate-in zoom-in-95 duration-200">
        {/* Form Header */}
        <div className={`flex items-center justify-between px-6 pt-6 pb-4 border-b ${type === 'voluntariado' ? 'bg-amber-50 rounded-t-3xl border-amber-100' :
          type === 'alianza' ? 'bg-slate-50 rounded-t-3xl border-slate-200' :
            'bg-emerald-50 rounded-t-3xl border-emerald-100'
          }`}>
          <h3 className="text-xl font-extrabold text-slate-900 flex items-center gap-2">
            {type === "donacion_especie" && "❤️ In-Kind Donation Registration"}
            {type === "voluntariado" && "🤝 Volunteer Interview"}
            {type === "alianza" && "🏢 Institutional Partnership Request"}
          </h3>
          <button
            onClick={onClose}
            className="text-slate-500 hover:text-slate-800 hover:bg-white rounded-full p-2 transition shadow-sm"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
        </div>

        {/* Dynamic Body */}
        <div className="p-6 md:p-8 overflow-y-auto max-h-[75vh]">
          <form onSubmit={onSubmit} className="grid gap-6">

            {/* ---------- FORM 1: IN-KIND DONATION ---------- */}
            {type === "donacion_especie" && (
              <>
                <p className="text-sm text-slate-600 mb-2">
                  Thank you for wanting to donate products. Register your contribution to coordinate the logistics of delivery of supplies.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <label className="grid gap-2">
                    <span className="text-sm font-semibold">Full Name *</span>
                    <input name="fullName" required className="border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-200" placeholder="Ex: Maria Gonzalez" />
                  </label>
                  <label className="grid gap-2">
                    <span className="text-sm font-semibold">Company / Entity (Optional)</span>
                    <input name="company" className="border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-200" placeholder="If you denote on behalf of a company..." />
                  </label>
                </div>
                <label className="grid gap-2">
                  <span className="text-sm font-semibold">Email *</span>
                  <input name="email" type="email" required className="border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-200" placeholder="you@email.com" />
                </label>
                <label className="grid gap-2">
                  <span className="text-sm font-semibold">What product(s) do you want to donate? *</span>
                  <select name="productType" required className="border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-200 bg-white">
                    <option value="">Select the type of product...</option>
                    <option value="alimentos">Non-perishable food (boxes, cans, grains)</option>
                    <option value="higiene">Personal hygiene products (diapers, soap)</option>
                    <option value="medicinas">Supplements / Light medical equipment</option>
                    <option value="otros">Other (Please specify below)</option>
                  </select>
                </label>
                <label className="grid gap-2">
                  <span className="text-sm font-semibold">Details and Approximate Quantity *</span>
                  <textarea name="details" required className="border rounded-xl px-4 py-3 min-h-[100px] outline-none focus:ring-2 focus:ring-emerald-200" placeholder="Ex: 50 cans of tuna, 5 packs of size L diapers..." />
                </label>
              </>
            )}

            {/* ---------- FORM 2: VOLUNTEERING ---------- */}
            {type === "voluntariado" && (
              <>
                <p className="text-sm text-slate-600 mb-2">
                  Volunteers are the heart of our mission. Complete this form to contact you and perform an initial interview.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <label className="grid gap-2">
                    <span className="text-sm font-semibold">Full Name *</span>
                    <input name="fullName" required className="border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-amber-200" placeholder="Your name" />
                  </label>
                  <label className="grid gap-2">
                    <span className="text-sm font-semibold">Age *</span>
                    <input name="age" type="number" required className="border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-amber-200" placeholder="Min 18 years" />
                  </label>
                </div>
                <label className="grid gap-2">
                  <span className="text-sm font-semibold">Email *</span>
                  <input name="email" type="email" required className="border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-amber-200" placeholder="you@email.com" />
                </label>
                <label className="grid gap-2">
                  <span className="text-sm font-semibold">Availability *</span>
                  <select name="availability" required className="border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-amber-200 bg-white">
                    <option value="">Select your availability...</option>
                    <option value="fines">Weekends only</option>
                    <option value="semana">During the week (Morning/Afternoon)</option>
                    <option value="remoto">Remote Support / Admin</option>
                    <option value="flexible">Flexible / Any time</option>
                  </select>
                </label>
                <label className="grid gap-2">
                  <span className="text-sm font-semibold">Why do you want to join us?</span>
                  <textarea name="motivation" className="border rounded-xl px-4 py-3 min-h-[100px] outline-none focus:ring-2 focus:ring-amber-200" placeholder="Tell us a bit about your motivation..." />
                </label>
              </>
            )}

            {/* ---------- FORM 3: PARTNERSHIPS ---------- */}
            {type === "alianza" && (
              <>
                <p className="text-sm text-slate-600 mb-2">
                  We seek strategic companies and institutions to scale our impact. Request a meeting or an audit model of the project.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <label className="grid gap-2">
                    <span className="text-sm font-semibold">Company / Institution *</span>
                    <input name="company" required className="border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-slate-300" placeholder="Legal name" />
                  </label>
                  <label className="grid gap-2">
                    <span className="text-sm font-semibold">Contact Person *</span>
                    <input name="contactPerson" required className="border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-slate-300" placeholder="Name and Title" />
                  </label>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <label className="grid gap-2">
                    <span className="text-sm font-semibold">Work Email *</span>
                    <input name="email" type="email" required className="border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-slate-300" placeholder="corp@company.com" />
                  </label>
                  <label className="grid gap-2">
                    <span className="text-sm font-semibold">Type of Alliance *</span>
                    <select name="allianceType" required className="border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-slate-300 bg-white">
                      <option value="">Select a purpose...</option>
                      <option value="financiamiento">Direct funding / Matching grants</option>
                      <option value="logistica">Logistical support / Supplies</option>
                      <option value="auditoria">Request Pilot Audit Model</option>
                      <option value="otro">Other Collaboration</option>
                    </select>
                  </label>
                </div>
                <label className="grid gap-2">
                  <span className="text-sm font-semibold">Proposal / Comments</span>
                  <textarea name="proposal" className="border rounded-xl px-4 py-3 min-h-[100px] outline-none focus:ring-2 focus:ring-slate-300" placeholder="Tell us how you would like to support or if you need specific documents..." />
                </label>
              </>
            )}

            <button
              type="submit"
              className={`rounded-2xl py-4 font-bold text-white shadow-lg transition-all duration-300 hover:brightness-110 active:scale-95 ${type === 'voluntariado' ? 'bg-amber-600 shadow-amber-200' :
                type === 'alianza' ? 'bg-slate-900 shadow-slate-200' :
                  'bg-emerald-600 shadow-emerald-200'
                }`}
            >
              Send Information
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
