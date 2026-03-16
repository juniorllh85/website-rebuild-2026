import React from 'react';

export default function Contact() {
  return (
    <section id="contacto" className="border-t bg-white">
      <div className="mx-auto max-w-6xl px-4 py-20 grid lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight">Contact</h2>
          <p className="mt-4 text-lg text-slate-600">
            If you wish to support as a donor, apply for grants with us, or coordinate partnerships,
            write to us and we will respond as soon as possible.
          </p>

          <div className="mt-8 grid gap-4 text-slate-700">
            <div className="rounded-2xl bg-slate-50 p-4">
              <div className="text-sm font-semibold">📍 Miami-Dade County, Florida</div>
              <div className="text-sm text-slate-600 mt-1">
                Pilot project and expansion to three buildings.
              </div>
            </div>
            <div className="rounded-2xl bg-slate-50 p-4">
              <div className="text-sm font-semibold">✉️ Email</div>
              <div className="text-sm text-slate-600 mt-1 font-bold">
                thegoldenyearsfoundation@gmail.com
              </div>
            </div>
            <div className="rounded-2xl bg-slate-50 p-4">
              <div className="text-sm font-semibold">💬 WhatsApp</div>
              <div className="text-sm text-slate-600 mt-1">
                Use the floating button to write to us directly.
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border bg-white p-8 shadow-sm">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you! We received your message. (Later we will connect the form.)");
            }}
            className="grid gap-4"
          >
            <label className="grid gap-2">
              <span className="text-sm font-semibold">Name</span>
              <input
                className="border rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-200"
                placeholder="Your name"
              />
            </label>

            <label className="grid gap-2">
              <span className="text-sm font-semibold">Phone or email</span>
              <input
                className="border rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-200"
                placeholder="How to contact you"
              />
            </label>

            <label className="grid gap-2">
              <span className="text-sm font-semibold">Message</span>
              <textarea
                className="border rounded-2xl px-4 py-3 min-h-[140px] outline-none focus:ring-2 focus:ring-emerald-200"
                placeholder="Tell us if you want to donate, support the pilot, or talk about grants…"
              />
            </label>

            <button className="rounded-2xl bg-slate-900 text-white px-6 py-3 font-semibold hover:bg-slate-800">
              Send
            </button>

            <p className="text-xs text-slate-500">
              © {new Date().getFullYear()} The Golden Years Foundation • 501(c)(3).
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
