import React, { useState } from 'react';
import { useT } from '../../router';

export default function FormModal({ type, onClose, onSubmit }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const t = useT();

  if (!type) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await onSubmit(e);
    setIsSubmitting(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8 overflow-y-auto w-full h-full bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-2xl my-auto flex flex-col pointer-events-auto transform transition-all animate-in zoom-in-95 duration-200">
        {/* Form Header */}
        <div className={`flex items-center justify-between px-6 pt-6 pb-4 border-b ${type === 'voluntariado' ? 'bg-amber-50 rounded-t-3xl border-amber-100' :
          type === 'alianza' ? 'bg-slate-50 rounded-t-3xl border-slate-200' :
            'bg-emerald-50 rounded-t-3xl border-emerald-100'
          }`}>
          <h3 className="text-xl font-extrabold text-slate-900 flex items-center gap-2">
            {type === "donacion_especie" && t("❤️ In-Kind Donation Registration", "❤️ Registro de donación en especie")}
            {type === "voluntariado" && t("🤝 Volunteer Interview", "🤝 Entrevista de voluntariado")}
            {type === "alianza" && t("🏢 Institutional Partnership Request", "🏢 Solicitud de alianza institucional")}
          </h3>
          <button
            onClick={onClose}
            aria-label={t("Close", "Cerrar")}
            className="text-slate-500 hover:text-slate-800 hover:bg-white rounded-full p-2 transition shadow-sm"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
        </div>

        {/* Dynamic Body */}
        <div className="p-6 md:p-8 overflow-y-auto max-h-[75vh]">
          <form onSubmit={handleSubmit} className="grid gap-6">

            {/* ---------- FORM 1: IN-KIND DONATION ---------- */}
            {type === "donacion_especie" && (
              <>
                <p className="text-sm text-slate-600 mb-2">
                  {t("Thank you for wanting to donate products. Register your contribution to coordinate the logistics of delivery of supplies.", "Gracias por querer donar productos. Registre su aporte para coordinar la logística de entrega de los suministros.")}
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <label className="grid gap-2">
                    <span className="text-sm font-semibold">{t("Full Name *", "Nombre completo *")}</span>
                    <input name="fullName" required className="border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-200" placeholder={t("Ex: Maria Gonzalez", "Ej.: María González")} />
                  </label>
                  <label className="grid gap-2">
                    <span className="text-sm font-semibold">{t("Company / Entity (Optional)", "Empresa / Entidad (opcional)")}</span>
                    <input name="company" className="border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-200" placeholder={t("If you denote on behalf of a company...", "Si dona en nombre de una empresa...")} />
                  </label>
                </div>
                <label className="grid gap-2">
                  <span className="text-sm font-semibold">{t("Email *", "Correo electrónico *")}</span>
                  <input name="email" type="email" required className="border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-200" placeholder={t("you@email.com", "usted@correo.com")} />
                </label>
                <label className="grid gap-2">
                  <span className="text-sm font-semibold">{t("What product(s) do you want to donate? *", "¿Qué producto(s) desea donar? *")}</span>
                  <select name="productType" required className="border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-200 bg-white">
                    <option value="">{t("Select the type of product...", "Seleccione el tipo de producto...")}</option>
                    <option value="alimentos">{t("Non-perishable food (boxes, cans, grains)", "Alimentos no perecederos (cajas, latas, granos)")}</option>
                    <option value="higiene">{t("Personal hygiene products (diapers, soap)", "Productos de higiene personal (pañales, jabón)")}</option>
                    <option value="medicinas">{t("Supplements / Light medical equipment", "Suplementos / Equipo médico ligero")}</option>
                    <option value="otros">{t("Other (Please specify below)", "Otro (por favor especifique abajo)")}</option>
                  </select>
                </label>
                <label className="grid gap-2">
                  <span className="text-sm font-semibold">{t("Details and Approximate Quantity *", "Detalles y cantidad aproximada *")}</span>
                  <textarea name="details" required className="border rounded-xl px-4 py-3 min-h-[100px] outline-none focus:ring-2 focus:ring-emerald-200" placeholder={t("Ex: 50 cans of tuna, 5 packs of size L diapers...", "Ej.: 50 latas de atún, 5 paquetes de pañales talla L...")} />
                </label>
              </>
            )}

            {/* ---------- FORM 2: VOLUNTEERING ---------- */}
            {type === "voluntariado" && (
              <>
                <p className="text-sm text-slate-600 mb-2">
                  {t("Volunteers are the heart of our mission. Complete this form to contact you and perform an initial interview.", "Los voluntarios son el corazón de nuestra misión. Complete este formulario para que podamos contactarle y hacerle una entrevista inicial.")}
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <label className="grid gap-2">
                    <span className="text-sm font-semibold">{t("Full Name *", "Nombre completo *")}</span>
                    <input name="fullName" required className="border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-amber-200" placeholder={t("Your name", "Su nombre")} />
                  </label>
                  <label className="grid gap-2">
                    <span className="text-sm font-semibold">{t("Age *", "Edad *")}</span>
                    <input name="age" type="number" required className="border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-amber-200" placeholder={t("Min 18 years", "Mínimo 18 años")} />
                  </label>
                </div>
                <label className="grid gap-2">
                  <span className="text-sm font-semibold">{t("Email *", "Correo electrónico *")}</span>
                  <input name="email" type="email" required className="border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-amber-200" placeholder={t("you@email.com", "usted@correo.com")} />
                </label>
                <label className="grid gap-2">
                  <span className="text-sm font-semibold">{t("Availability *", "Disponibilidad *")}</span>
                  <select name="availability" required className="border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-amber-200 bg-white">
                    <option value="">{t("Select your availability...", "Seleccione su disponibilidad...")}</option>
                    <option value="fines">{t("Weekends only", "Solo fines de semana")}</option>
                    <option value="semana">{t("During the week (Morning/Afternoon)", "Entre semana (mañana/tarde)")}</option>
                    <option value="remoto">{t("Remote Support / Admin", "Apoyo remoto / Administración")}</option>
                    <option value="flexible">{t("Flexible / Any time", "Flexible / Cualquier horario")}</option>
                  </select>
                </label>
                <label className="grid gap-2">
                  <span className="text-sm font-semibold">{t("Why do you want to join us?", "¿Por qué desea unirse a nosotros?")}</span>
                  <textarea name="motivation" className="border rounded-xl px-4 py-3 min-h-[100px] outline-none focus:ring-2 focus:ring-amber-200" placeholder={t("Tell us a bit about your motivation...", "Cuéntenos un poco sobre su motivación...")} />
                </label>
              </>
            )}

            {/* ---------- FORM 3: PARTNERSHIPS ---------- */}
            {type === "alianza" && (
              <>
                <p className="text-sm text-slate-600 mb-2">
                  {t("We seek strategic companies and institutions to scale our impact. Request a meeting or an audit model of the project.", "Buscamos empresas e instituciones estratégicas para ampliar nuestro impacto. Solicite una reunión o un modelo de auditoría del proyecto.")}
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <label className="grid gap-2">
                    <span className="text-sm font-semibold">{t("Company / Institution *", "Empresa / Institución *")}</span>
                    <input name="company" required className="border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-slate-300" placeholder={t("Legal name", "Nombre legal")} />
                  </label>
                  <label className="grid gap-2">
                    <span className="text-sm font-semibold">{t("Contact Person *", "Persona de contacto *")}</span>
                    <input name="contactPerson" required className="border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-slate-300" placeholder={t("Name and Title", "Nombre y cargo")} />
                  </label>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <label className="grid gap-2">
                    <span className="text-sm font-semibold">{t("Work Email *", "Correo de trabajo *")}</span>
                    <input name="email" type="email" required className="border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-slate-300" placeholder={t("corp@company.com", "contacto@empresa.com")} />
                  </label>
                  <label className="grid gap-2">
                    <span className="text-sm font-semibold">{t("Type of Alliance *", "Tipo de alianza *")}</span>
                    <select name="allianceType" required className="border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-slate-300 bg-white">
                      <option value="">{t("Select a purpose...", "Seleccione un propósito...")}</option>
                      <option value="financiamiento">{t("Direct funding / Matching grants", "Financiamiento directo / Donaciones equivalentes")}</option>
                      <option value="logistica">{t("Logistical support / Supplies", "Apoyo logístico / Suministros")}</option>
                      <option value="auditoria">{t("Request Pilot Audit Model", "Solicitar modelo de auditoría del piloto")}</option>
                      <option value="otro">{t("Other Collaboration", "Otra colaboración")}</option>
                    </select>
                  </label>
                </div>
                <label className="grid gap-2">
                  <span className="text-sm font-semibold">{t("Proposal / Comments", "Propuesta / Comentarios")}</span>
                  <textarea name="proposal" className="border rounded-xl px-4 py-3 min-h-[100px] outline-none focus:ring-2 focus:ring-slate-300" placeholder={t("Tell us how you would like to support or if you need specific documents...", "Cuéntenos cómo le gustaría apoyar o si necesita documentos específicos...")} />
                </label>
              </>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className={`rounded-2xl py-4 font-bold text-white shadow-lg transition-all duration-300 hover:brightness-110 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed ${type === 'voluntariado' ? 'bg-amber-600 shadow-amber-200' :
                type === 'alianza' ? 'bg-slate-900 shadow-slate-200' :
                  'bg-emerald-600 shadow-emerald-200'
                }`}
            >
              {isSubmitting ? t('Sending...', 'Enviando...') : t('Send Information', 'Enviar información')}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
