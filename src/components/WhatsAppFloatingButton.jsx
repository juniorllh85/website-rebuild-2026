import React from 'react';
import { WHATSAPP_PHONE, WHATSAPP_MESSAGE } from '../data/constants';
import { useT } from '../router';

export default function WhatsAppFloatingButton() {
  const t = useT();
  const message = encodeURIComponent(WHATSAPP_MESSAGE);
  const url = `https://wa.me/${WHATSAPP_PHONE}?text=${message}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-50 rounded-full bg-emerald-600 text-white shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition px-5 py-3 font-semibold flex items-center gap-2"
      aria-label={t('Chat on WhatsApp', 'Escríbanos por WhatsApp')}
      title="WhatsApp"
    >
      <span className="text-lg">💬</span>
      <span className="hidden sm:block">WhatsApp</span>
    </a>
  );
}
