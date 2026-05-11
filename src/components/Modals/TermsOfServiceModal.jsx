import React from 'react';

export default function TermsOfServiceModal({ isOpen, onClose }) {
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

        <h2 className="text-2xl font-extrabold text-slate-900 mb-1">Terms of Service</h2>
        <p className="text-xs text-slate-400 mb-6">Last updated: May 2026</p>

        <div className="space-y-5 text-sm text-slate-700 leading-relaxed">
          <section>
            <h3 className="font-bold text-slate-900 mb-1">1. Acceptance of Terms</h3>
            <p>By accessing or using the website of The Golden Years Foundation ("GYF," "we," "our," or "us"), you agree to be bound by these Terms of Service. If you do not agree, please do not use this website.</p>
          </section>

          <section>
            <h3 className="font-bold text-slate-900 mb-1">2. About Our Organization</h3>
            <p>The Golden Years Foundation is a 501(c)(3) nonprofit organization (EIN: 35-2905128) based in Miami-Dade County, Florida. Our mission is to combat loneliness, isolation, and unmet basic needs among seniors.</p>
          </section>

          <section>
            <h3 className="font-bold text-slate-900 mb-1">3. Use of the Website</h3>
            <p>You agree to use this website only for lawful purposes and in a manner that does not infringe the rights of others. You may not:</p>
            <ul className="list-disc ml-5 mt-2 space-y-1">
              <li>Use the site to transmit harmful, offensive, or fraudulent content</li>
              <li>Attempt to gain unauthorized access to any part of the site</li>
              <li>Reproduce or redistribute our content without written permission</li>
              <li>Use automated tools to scrape or collect data from our site</li>
            </ul>
          </section>

          <section>
            <h3 className="font-bold text-slate-900 mb-1">4. Donations</h3>
            <p>All donations made through this website are voluntary and non-refundable unless required by applicable law. Donations to The Golden Years Foundation are tax-deductible to the extent permitted by law. You will receive a donation receipt for your records.</p>
          </section>

          <section>
            <h3 className="font-bold text-slate-900 mb-1">5. Volunteer & Contact Forms</h3>
            <p>By submitting a volunteer application or contact form, you consent to being contacted by our team via the information you provide. We will only use your information to respond to your inquiry or coordinate volunteer activities.</p>
          </section>

          <section>
            <h3 className="font-bold text-slate-900 mb-1">6. Intellectual Property</h3>
            <p>All content on this website — including text, images, logos, and graphics — is the property of The Golden Years Foundation and protected by copyright law. You may not use our content without prior written consent.</p>
          </section>

          <section>
            <h3 className="font-bold text-slate-900 mb-1">7. Third-Party Links</h3>
            <p>Our website may contain links to third-party websites (e.g., PayPal, social media). We are not responsible for the content or privacy practices of those sites. We encourage you to review their terms and policies.</p>
          </section>

          <section>
            <h3 className="font-bold text-slate-900 mb-1">8. Disclaimer of Warranties</h3>
            <p>This website is provided "as is" without warranties of any kind. We do not guarantee that the site will be error-free, uninterrupted, or free of viruses or harmful components.</p>
          </section>

          <section>
            <h3 className="font-bold text-slate-900 mb-1">9. Limitation of Liability</h3>
            <p>To the fullest extent permitted by law, The Golden Years Foundation shall not be liable for any indirect, incidental, or consequential damages arising from your use of this website.</p>
          </section>

          <section>
            <h3 className="font-bold text-slate-900 mb-1">10. Changes to Terms</h3>
            <p>We reserve the right to update these Terms of Service at any time. Changes will be posted on this page with an updated date. Continued use of the site after changes constitutes acceptance of the new terms.</p>
          </section>

          <section>
            <h3 className="font-bold text-slate-900 mb-1">11. Governing Law</h3>
            <p>These terms are governed by the laws of the State of Florida, United States. Any disputes shall be resolved in the courts of Miami-Dade County, Florida.</p>
          </section>

          <section>
            <h3 className="font-bold text-slate-900 mb-1">12. Contact Us</h3>
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
