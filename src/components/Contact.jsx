import React, { useState } from 'react';
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa';

export default function Contact({ onSubmit }) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await onSubmit(e, 'contacto');
    setIsSubmitting(false);
  };
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
                info@thegoldenyearsfoundation.com
              </div>
            </div>
            <div className="rounded-2xl bg-slate-50 p-4">
              <div className="text-sm font-semibold">💬 WhatsApp</div>
              <div className="text-sm text-slate-600 mt-1">
                Use the floating button to write to us directly.
              </div>
            </div>
            <div className="rounded-2xl bg-slate-50 p-4">
              <div className="text-sm font-semibold">🌐 Social Media</div>
              <div className="flex gap-4 mt-3 text-slate-500">
                <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-600 hover:scale-110 transition-all p-2 -ml-2 rounded-full hover:bg-slate-200">
                  <FaFacebookF size={20} />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-600 hover:scale-110 transition-all p-2 rounded-full hover:bg-slate-200">
                  <FaInstagram size={20} />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-600 hover:scale-110 transition-all p-2 rounded-full hover:bg-slate-200">
                  <FaTiktok size={20} />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-600 hover:scale-110 transition-all p-2 rounded-full hover:bg-slate-200">
                  <FaYoutube size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border bg-white p-8 shadow-sm">
          <form
            onSubmit={handleSubmit}
            className="grid gap-4"
          >
            <label className="grid gap-2">
              <span className="text-sm font-semibold">Name</span>
              <input
                name="name"
                required
                className="border rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-200"
                placeholder="Your name"
              />
            </label>

            <label className="grid gap-2">
              <span className="text-sm font-semibold">Email</span>
              <input
                name="email"
                type="email"
                required
                className="border rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-200"
                placeholder="you@email.com"
              />
            </label>

            <label className="grid gap-2">
              <span className="text-sm font-semibold">Message</span>
              <textarea
                name="message"
                required
                className="border rounded-2xl px-4 py-3 min-h-[140px] outline-none focus:ring-2 focus:ring-emerald-200"
                placeholder="Tell us if you want to donate, support the pilot, or talk about grants…"
              />
            </label>

            <button 
              type="submit"
              disabled={isSubmitting}
              className="rounded-2xl bg-slate-900 text-white px-6 py-3 font-semibold hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Send'}
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
