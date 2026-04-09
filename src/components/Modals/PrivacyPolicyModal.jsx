import React from 'react';

export default function PrivacyPolicyModal({ isOpen, onClose }) {
  if (!isOpen) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-8"
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 text-2xl font-bold leading-none"
        >
          &times;
        </button>

        <h2 className="text-2xl font-extrabold text-slate-900 mb-1">Privacy Policy</h2>
        <p className="text-xs text-slate-400 mb-6">Last updated: April 2026</p>

        <div className="space-y-5 text-sm text-slate-700 leading-relaxed">
          <section>
            <h3 className="font-bold text-slate-900 mb-1">1. Who We Are</h3>
            <p>The Golden Years Foundation is a 501(c)(3) nonprofit organization (EIN: 35-2905128) based in Miami-Dade County, Florida. We are committed to protecting the dignity, health, and well-being of isolated seniors. Contact: <strong>info@thegoldenyearsfoundation.com</strong>.</p>
          </section>

          <section>
            <h3 className="font-bold text-slate-900 mb-1">2. Information We Collect</h3>
            <p>We may collect the following personal information:</p>
            <ul className="list-disc ml-5 mt-2 space-y-1">
              <li>Name and email address (via contact or volunteer forms)</li>
              <li>Phone number (if provided voluntarily)</li>
              <li>Donation information (processed securely by third-party processors)</li>
              <li>Usage data via analytics tools</li>
            </ul>
          </section>

          <section>
            <h3 className="font-bold text-slate-900 mb-1">3. How We Use Your Information</h3>
            <ul className="list-disc ml-5 mt-2 space-y-1">
              <li>Respond to inquiries and coordinate volunteer activities</li>
              <li>Process donations and send receipts</li>
              <li>Send program updates (with your consent)</li>
              <li>Improve our website and services</li>
              <li>Comply with legal requirements</li>
            </ul>
          </section>

          <section>
            <h3 className="font-bold text-slate-900 mb-1">4. Data Sharing</h3>
            <p>We do not sell, rent, or trade your personal information. We may share data with trusted third-party services solely to operate our services.</p>
          </section>

          <section>
            <h3 className="font-bold text-slate-900 mb-1">5. Cookies</h3>
            <p>Our website may use cookies to enhance your browsing experience. You may disable cookies through your browser settings.</p>
          </section>

          <section>
            <h3 className="font-bold text-slate-900 mb-1">6. Data Security</h3>
            <p>We implement appropriate technical measures to protect your personal information. Donation payments are processed through secure, encrypted connections.</p>
          </section>

          <section>
            <h3 className="font-bold text-slate-900 mb-1">7. Your Rights</h3>
            <p>You have the right to access, correct, or delete your personal data. Contact us at <strong>info@thegoldenyearsfoundation.com</strong>.</p>
          </section>

          <section>
            <h3 className="font-bold text-slate-900 mb-1">8. Children's Privacy</h3>
            <p>Our website is not directed to individuals under 13. We do not knowingly collect personal information from children.</p>
          </section>

          <section>
            <h3 className="font-bold text-slate-900 mb-1">9. Contact Us</h3>
            <p>
              <strong>The Golden Years Foundation</strong><br />
              Miami-Dade County, Florida<br />
              Email: info@thegoldenyearsfoundation.com<br />
              EIN: 35-2905128
            </p>
          </section>
        </div>

        <button
          onClick={onClose}
          className="mt-8 w-full rounded-2xl bg-slate-900 text-white py-3 font-semibold hover:bg-slate-800 transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  );
}
