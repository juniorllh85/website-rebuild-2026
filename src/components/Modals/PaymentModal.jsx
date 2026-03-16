import React, { useState } from 'react';
import { donationAmounts, whatsappInfo } from '../../data/constants';

export default function PaymentModal({
  isOpen,
  onClose,
  selectedAmount,
  setSelectedAmount,
  isCustomAmount,
  setIsCustomAmount,
  customAmountValue,
  setCustomAmountValue
}) {
  const [paymentMethod, setPaymentMethod] = useState(null); // 'card', 'paypal', 'zelle'
  const [isRecurring, setIsRecurring] = useState(true);

  if (!isOpen) return null;

  const amounts = donationAmounts;
  const foundationEmail = whatsappInfo.email;

  const handleBack = () => setPaymentMethod(null);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 overflow-y-auto w-full h-full bg-slate-900/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-md my-8 flex flex-col pointer-events-auto transform transition-all animate-in zoom-in-95 duration-200">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b">
          <div className="flex items-center gap-3">
            {paymentMethod && (
              <button onClick={handleBack} className="p-1 hover:bg-slate-100 rounded-full transition text-slate-500">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
              </button>
            )}
            <h3 className="text-xl font-extrabold text-slate-900">
              {paymentMethod === 'card' ? 'Card Details' :
               paymentMethod === 'paypal' ? 'PayPal Checkout' :
               paymentMethod === 'zelle' ? 'Zelle Transfer' : 'Help a Senior'}
            </h3>
          </div>
          <button
            onClick={() => {
              setPaymentMethod(null);
              onClose();
            }}
            className="text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full p-2 transition"
            aria-label="Close modal"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto flex-1">
          {!paymentMethod ? (
            <>
              <p className="text-sm text-slate-600 font-medium mb-4">
                Choose a donation level to become a <span className="text-amber-500 font-bold">Golden Guardian</span>:
              </p>

              {/* Amount Selector */}
              <div className="grid grid-cols-4 gap-2 mb-3">
                {amounts.map((amount) => (
                  <button
                    key={amount}
                    onClick={() => {
                      setSelectedAmount(amount);
                      setIsCustomAmount(false);
                    }}
                    className={`py-3 rounded-2xl font-bold transition flex items-center justify-center text-sm md:text-base ${selectedAmount === amount && !isCustomAmount
                      ? "bg-emerald-600 text-white shadow-md"
                      : "bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200"
                      }`}
                  >
                    ${amount}
                  </button>
                ))}
              </div>

              <div className="mb-6">
                <button
                  onClick={() => setIsCustomAmount(true)}
                  className={`w-full py-3 rounded-2xl font-bold transition flex items-center justify-center text-sm md:text-base ${isCustomAmount
                    ? "bg-emerald-600 text-white shadow-md relative"
                    : "bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200"
                    }`}
                >
                  {isCustomAmount ? (
                    <div className="flex bg-transparent w-full">
                      <span className="font-bold flex items-center justify-center text-white px-3">$</span>
                      <input
                        type="number"
                        autoFocus
                        placeholder="0.00"
                        value={customAmountValue}
                        onChange={(e) => setCustomAmountValue(e.target.value)}
                        className="bg-transparent border-none outline-none font-bold text-white w-full placeholder:text-emerald-300"
                      />
                    </div>
                  ) : "Other Amount"}
                </button>
              </div>

              {/* Recurring Switch */}
              <div className="flex items-center justify-between p-4 rounded-2xl bg-emerald-50 border border-emerald-100 mb-8">
                <div>
                  <div className="font-bold text-slate-900 text-sm">Monthly Donation</div>
                  <div className="text-xs text-slate-600">Automate your kindness every month</div>
                </div>
                <button
                  onClick={() => setIsRecurring(!isRecurring)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 focus:outline-none ${isRecurring ? 'bg-emerald-600' : 'bg-slate-200'}`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${isRecurring ? 'translate-x-6' : 'translate-x-1'}`}
                  />
                </button>
              </div>

              {/* Payment Methods */}
              <div className="space-y-3">
                <p className="text-sm font-semibold text-slate-900 mb-2 text-center">
                  Select payment method:
                </p>
                <button
                  onClick={() => setPaymentMethod('card')}
                  className="w-full flex items-center justify-center gap-3 bg-slate-900 text-white hover:bg-slate-800 rounded-2xl py-4 font-semibold shadow-sm transition group"
                >
                  <span className="text-xl group-hover:scale-110 transition">💳</span> Credit / Debit Card
                </button>
                <button
                  onClick={() => setPaymentMethod('paypal')}
                  className="w-full flex items-center justify-center gap-3 bg-[#0070BA] text-white hover:bg-[#003087] rounded-2xl py-4 font-semibold shadow-sm transition group"
                >
                  <span className="text-xl group-hover:scale-110 transition">🅿️</span> PayPal
                </button>
                <button
                  onClick={() => setPaymentMethod('zelle')}
                  className="w-full flex items-center justify-center gap-3 bg-[#6329A8] text-white hover:bg-[#4E2184] rounded-2xl py-4 font-semibold shadow-sm transition group"
                >
                  <span className="text-xl group-hover:scale-110 transition">💸</span> Zelle
                </button>
              </div>
            </>
          ) : (
            <div className="animate-in slide-in-from-right-4 duration-300">
              {paymentMethod === 'card' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-bold text-slate-900">Amount to pay:</span>
                    <span className="text-lg font-black text-emerald-600">${isCustomAmount ? customAmountValue : selectedAmount}{isRecurring ? '/mo' : ''}</span>
                  </div>
                  <label className="grid gap-1.5">
                    <span className="text-xs font-bold text-slate-500 uppercase">Card Number</span>
                    <input className="border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-200" placeholder="0000 0000 0000 0000" />
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <label className="grid gap-1.5">
                      <span className="text-xs font-bold text-slate-500 uppercase">Expiry Date</span>
                      <input className="border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-200" placeholder="MM / YY" />
                    </label>
                    <label className="grid gap-1.5">
                      <span className="text-xs font-bold text-slate-500 uppercase">CVC</span>
                      <input className="border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-200" placeholder="123" />
                    </label>
                  </div>
                  <button className="w-full mt-4 rounded-2xl bg-emerald-600 py-4 text-white font-black shadow-lg shadow-emerald-200 hover:brightness-110">
                    Pay Now
                  </button>
                </div>
              )}

              {paymentMethod === 'paypal' && (
                <div className="text-center py-4">
                  <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-4xl text-[#0070BA]">🅿️</span>
                  </div>
                  <h4 className="text-xl font-bold mb-2">PayPal Checkout</h4>
                  <p className="text-sm text-slate-600 mb-8">
                    Click continue to securely login to your <strong className="text-slate-900">PayPal</strong> account and complete your {isRecurring ? 'monthly donation' : 'donation'} of <strong className="text-emerald-600">${isCustomAmount ? customAmountValue : selectedAmount}</strong>.
                  </p>
                  <button onClick={() => window.open('https://www.paypal.com', '_blank')} className="w-full rounded-2xl bg-[#0070BA] py-4 text-white font-black shadow-lg shadow-blue-200 hover:bg-[#003087]">
                    Continue to PayPal
                  </button>
                </div>
              )}

              {paymentMethod === 'zelle' && (
                <div className="py-2">
                  <div className="w-20 h-20 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-4xl">💸</span>
                  </div>
                  <h4 className="text-xl font-bold mb-4 text-center">Zelle Information</h4>
                  <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 mb-6">
                    <p className="text-xs font-bold text-slate-500 uppercase mb-2 tracking-wider">Account Email</p>
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-sm font-black text-slate-900 break-all">{foundationEmail}</span>
                      <button 
                        onClick={() => {
                          navigator.clipboard.writeText(foundationEmail);
                          alert('Email copied to clipboard!');
                        }}
                        className="p-2 hover:bg-slate-200 rounded-lg transition"
                      >
                        📋
                      </button>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 text-center leading-relaxed">
                    Please send your transfer of <strong>${isCustomAmount ? customAmountValue : selectedAmount}</strong> directly to this email from your banking app.
                  </p>
                  <div className="mt-8 text-center text-xs text-slate-400">
                    Once sent, please send us a WhatsApp with the confirmation screenshot.
                  </div>
                </div>
              )}
            </div>
          )}

          <p className="mt-6 text-center flex items-center justify-center gap-1 text-xs text-slate-500 font-medium">
            🔒 100% tax-deductible donation (501c3)
          </p>
        </div>
      </div>
    </div>
  );
}
