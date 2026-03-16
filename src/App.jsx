import React, { useState } from "react";

/** ✅ Deja el número para el final */
const WHATSAPP_PHONE = "13050000000";
const WHATSAPP_MESSAGE =
  "Hello, I would like information about The Golden Years Foundation (501(c)(3)).";

function WhatsAppFloatingButton() {
  const message = encodeURIComponent(WHATSAPP_MESSAGE);
  const url = `https://wa.me/${WHATSAPP_PHONE}?text=${message}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-50 rounded-full bg-emerald-600 text-white shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition px-5 py-3 font-semibold flex items-center gap-2"
      aria-label="Chat on WhatsApp"
      title="WhatsApp"
    >
      <span className="text-lg">💬</span>
      <span className="hidden sm:block">WhatsApp</span>
    </a>
  );
}

const impactStats = [
  { value: "400–500", label: "Seniors in the pilot building" },
  { value: "3", label: "Target buildings in the complex" },
  { value: "1,200–1,500", label: "Total potential reach (complex)" },
];

const helpCards = [
  {
    title: "Food Security",
    desc: "Regular delivery of essential groceries to protect nutrition and stability.",
    icon: "🥗",
    image: "/images/food.png",
  },
  {
    title: "Medicine Support",
    desc: "Support for access and continuity of medications, reducing preventable crises.",
    icon: "💊",
    image: "/images/medicine.png",
  },
  {
    title: "Personal Hygiene",
    desc: "Hygiene kits to maintain health, dignity, and daily well-being.",
    icon: "🧼",
    image: "/images/hygiene.png",
  },
];

const supportCards = [
  {
    title: "In-Kind Donations",
    desc: "Your contribution fuels food deliveries, medicine support, and hygiene kits.",
    icon: "❤️",
    type: "donacion_especie",
    image: "/images/donation.png"
  },
  {
    title: "Volunteering",
    desc: "Help with deliveries, organization, and companionship. Your time changes lives.",
    icon: "🤝",
    type: "voluntariado",
    image: "/images/volunteer.png"
  },
  {
    title: "Partnerships",
    desc: "Companies and institutions can support with resources, logistics, and matching grants.",
    icon: "🏢",
    type: "alianza",
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
];

const ImageCarousel = ({ images, overlayTexts, interval = 4000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <>
      {images.map((img, index) => (
        <img
          key={img}
          src={img}
          alt={`Dynamic image ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transform transition-all duration-1000 ease-in-out ${index === currentIndex ? 'opacity-80 group-hover:opacity-100 group-hover:scale-105 z-0' : 'opacity-0 scale-100 -z-10'
            }`}
        />
      ))}
      {overlayTexts && overlayTexts[currentIndex] && (
        <div className="absolute top-6 right-6 bg-rose-600/90 backdrop-blur text-white px-5 py-2 rounded-2xl font-bold text-sm sm:text-base shadow-xl z-20 transform rotate-2 border-2 border-rose-400 uppercase tracking-widest pointer-events-none transition-all duration-500">
          {overlayTexts[currentIndex]}
        </div>
      )}
    </>
  );
};

export default function App() {
  // Estado Modal de Pagos (Guardianes Dorados)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState(50);
  const [isCustomAmount, setIsCustomAmount] = useState(false);
  const [customAmountValue, setCustomAmountValue] = useState("");

  // Estado Modal de Formularios (Voluntarios, Especie, Alianzas)
  const [formModalType, setFormModalType] = useState(null); // 'donacion_especie' | 'voluntariado' | 'alianza' | null

  // Manejadores Modal Pagos
  const handleOpenModal = (amount) => {
    setSelectedAmount(amount);
    setIsCustomAmount(amount === "other");
    setIsModalOpen(true);
  };
  const handleCloseModal = () => setIsModalOpen(false);

  // Manejadores Modal Formularios
  const handleOpenFormModal = (type) => setFormModalType(type);
  const handleCloseFormModal = () => setFormModalType(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! We have successfully received your information. We will contact you very soon.");
    handleCloseFormModal();
  };

  const amounts = [15, 25, 50, 100];

  return (
    <>
      <WhatsAppFloatingButton />

      <div className="min-h-screen bg-white text-slate-900">
        {/* HEADER */}
        <header className="sticky top-0 z-40 border-b bg-white/80 backdrop-blur">
          <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between gap-4">
            <div className="font-extrabold tracking-tight text-lg sm:text-xl">
              <span className="hidden sm:inline">The Golden Years Foundation</span>
              <span className="sm:hidden">TGYF</span>
            </div>

            <nav className="hidden lg:flex items-center gap-5 text-sm font-medium">
              <a href="#inicio" className="hover:text-emerald-700">
                Home
              </a>
              <a href="#impacto" className="hover:text-emerald-700">
                Impact
              </a>
              <a href="#metricas" className="hover:text-emerald-700">
                Metrics
              </a>
              <a href="#porque" className="hover:text-emerald-700">
                Why Us
              </a>
              <a href="#ayuda" className="hover:text-emerald-700">
                How We Help
              </a>
              <a href="#vision" className="hover:text-emerald-700">
                Vision
              </a>
              <a href="#plan" className="hover:text-emerald-700">
                Plan
              </a>
              <a href="#piloto" className="hover:text-emerald-700">
                Pilot
              </a>
              <a href="#expansion" className="hover:text-emerald-700">
                Expansion
              </a>
              <a href="#donar" className="hover:text-emerald-700">
                Donate
              </a>
              <a href="#contacto" className="hover:text-emerald-700">
                Contact
              </a>
            </nav>

            <button
              onClick={() => handleOpenModal(50)}
              className="rounded-xl bg-slate-900 text-white px-4 py-2 text-sm font-semibold hover:bg-slate-800"
            >
              Donate
            </button>
          </div>
        </header>

        <main>
          {/* INICIO */}
          <section id="inicio" className="bg-gradient-to-b from-slate-50 to-white overflow-hidden pb-12 pt-8">
            <div className="mx-auto max-w-[90rem] px-4 py-8 sm:py-16 grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">

              {/* TEXTO Y LLAMADOS A LA ACCIÓN */}
              <div className="lg:col-span-5 order-2 lg:order-1">
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-bold text-emerald-800 shadow-sm">
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse shadow" />
                  501(c)(3) • Embracing Miami-Dade
                </div>

                <h1 className="mt-8 text-5xl sm:text-6xl md:text-[4rem] font-extrabold leading-[1.1] tracking-tight text-slate-900">
                  Rescuing from oblivion the generation that gave it <span className="text-emerald-600 underline decoration-emerald-300 decoration-8 underline-offset-4">all.</span>
                </h1>

                <p className="mt-8 text-lg sm:text-xl text-slate-600 leading-relaxed font-medium">
                  The Golden Years Foundation goes far beyond delivering a box of food. <strong className="text-slate-900">We rescue our seniors from loneliness, isolation, and depression.</strong> Through continuous physical support and emotional care, we transform gray homes into spaces of celebration, dignity, and true joy.
                </p>

                <div className="mt-10 flex flex-wrap gap-4">
                  <button
                    onClick={() => handleOpenModal(50)}
                    className="rounded-full bg-emerald-600 text-white px-8 py-4 text-lg font-bold shadow-xl shadow-emerald-600/30 hover:shadow-2xl hover:bg-emerald-700 hover:-translate-y-1 transition-all duration-300"
                  >
                    ❤️ I Want to Give Them Their Smile Back
                  </button>
                  <a
                    href="#impacto"
                    className="rounded-full border-2 border-slate-200 bg-white px-8 py-4 text-lg font-bold text-slate-700 hover:border-emerald-600 hover:text-emerald-700 hover:bg-emerald-50 transition-all duration-300"
                  >
                    View Our Plan
                  </a>
                </div>

                <div className="mt-12 grid gap-4 text-base sm:text-lg text-slate-700 font-semibold bg-slate-50 p-6 sm:p-8 rounded-[2rem] border border-slate-200 shadow-inner">
                  <div className="flex items-center gap-4">
                    <div className="bg-white p-2 text-emerald-600 rounded-xl shadow-sm"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg></div>
                    <span>Food Dignity and Medical Care</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-white p-2 text-emerald-600 rounded-xl shadow-sm"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg></div>
                    <span>Mental Health, Birthdays, and Holidays</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-white p-2 text-emerald-600 rounded-xl shadow-sm"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg></div>
                    <span>Transparency and Wellness Evaluations</span>
                  </div>
                </div>
              </div>

              {/* IMAGEN GIGANTE ROTATIVA (CARRUSEL) */}
              <div className="lg:col-span-7 relative order-1 lg:order-2 perspective-1000">
                <div className="absolute -inset-10 bg-emerald-600/15 blur-[80px] rounded-[5rem]" />
                <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[1.4/1] rounded-[3rem] overflow-hidden shadow-2xl border-[10px] border-white group transform transition-transform duration-700 hover:rotate-1">

                  <ImageCarousel
                    images={[
                      "/images/hero.png",
                      "/images/mothers_day_1.png",
                      "/images/festivo_1.png",
                      "/images/volunteer.png",
                      "/images/festivo_3.png"
                    ]}
                    overlayTexts={[
                      "Fostering Unbreakable Bonds",
                      "Our Mothers, Our Treasure",
                      "The Family We Choose",
                      "Generations United",
                      "Contagious Joy"
                    ]}
                    interval={4500}
                  />

                  {/* Gradiente Oscuro de Fondo para el Texto Quote */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/10 to-transparent flex flex-col justify-end p-8 sm:p-12 z-10 pointer-events-none">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="h-3 w-3 rounded-full bg-rose-500 animate-pulse shadow-lg shadow-rose-500/50" />
                      <span className="text-rose-300 text-sm sm:text-base font-black tracking-[0.2em] uppercase">Emotional Mission</span>
                    </div>
                    <p className="text-white text-2xl sm:text-4xl font-extrabold leading-tight shadow-sm max-w-2xl italic">
                      «Our masterpiece is not built with handouts, it is built with pure love, empathy, and human hope.»
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </section>

          {/* IMPACT */}
          <section id="impacto" className="border-t bg-white">
            <div className="mx-auto max-w-6xl px-4 py-20 text-center">
              <h2 className="text-3xl font-extrabold tracking-tight">Impact and Scale of the Approach</h2>
              <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto">
                Our project focuses on a residential complex in Miami-Dade with three buildings.
                We started with a pilot in one building to serve between 400 and 500 seniors.
                The progressive expansion seeks to reach between 1,200 and 1,500 seniors within the complex.
              </p>

              <div className="mt-12 grid sm:grid-cols-3 gap-8">
                {impactStats.map((s) => (
                  <div key={s.label} className="rounded-3xl border bg-white p-8 shadow-sm">
                    <div className="text-4xl font-extrabold text-emerald-600">{s.value}</div>
                    <p className="mt-2 text-slate-600">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* METRICS AND PROGRAMS (WITH MENTAL HEALTH) */}
          <section id="metricas" className="border-t bg-slate-50 py-24 sm:py-32">
            <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-4xl mx-auto mb-20">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 mb-8 leading-tight">
                  More than Metrics:<br />
                  <span className="text-emerald-600">Companionship and Absolute Dignity</span>
                </h2>
                <p className="text-xl text-slate-600 leading-relaxed font-medium">
                  For our social investors, we report hard data with absolute precision. For our seniors, we transform those numbers into real companionship, dignity, constant medical care, and the absolute certainty that <strong>they are not a burden, they have us.</strong>
                </p>
              </div>

              {/* GRID INTERACTIVO DE PROGRAMAS (8 TARJETAS) GRANDES */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">

                {/* 1. Adultos atendidos */}
                <div className="group relative min-h-[26rem] md:min-h-[30rem] rounded-[2rem] overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500">
                  <img src="/images/hero.png" alt="Alcance de vidas" className="absolute inset-0 w-full h-full object-cover transform opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-in-out" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <div className="bg-emerald-500 text-white w-12 h-12 flex items-center justify-center rounded-2xl mb-4 shadow-lg transform group-hover:-translate-y-2 transition-transform duration-300 text-xl">
                      👥
                    </div>
                    <h3 className="text-white text-2xl font-bold mb-3">Lives Reached</h3>
                    <p className="text-slate-300 text-base leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                      Rigorous census of active beneficiaries in the pilot, ensuring sustained support month by month without exclusions.
                    </p>
                  </div>
                </div>

                {/* 2. Alimentación y Entregas */}
                <div className="group relative min-h-[26rem] md:min-h-[30rem] rounded-[2rem] overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500">
                  <img src="/images/food.png" alt="Entrega de alimentos" className="absolute inset-0 w-full h-full object-cover transform opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-in-out" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <div className="bg-amber-500 text-white w-12 h-12 flex items-center justify-center rounded-2xl mb-4 shadow-lg transform group-hover:-translate-y-2 transition-transform duration-300 text-xl">
                      📦
                    </div>
                    <h3 className="text-white text-2xl font-bold mb-3">Safe Nutrition</h3>
                    <p className="text-slate-300 text-base leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                      Auditable record of high-quality food deliveries, preventing malnutrition and severe weakening.
                    </p>
                  </div>
                </div>

                {/* 3. Kits de higiene */}
                <div className="group relative min-h-[26rem] md:min-h-[30rem] rounded-[2rem] overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500">
                  <img src="/images/hygiene.png" alt="Productos de higiene personal" className="absolute inset-0 w-full h-full object-cover transform opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-in-out" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <div className="bg-blue-500 text-white w-12 h-12 flex items-center justify-center rounded-2xl mb-4 shadow-lg transform group-hover:-translate-y-2 transition-transform duration-300 text-xl">
                      🧼
                    </div>
                    <h3 className="text-white text-2xl font-bold mb-3">Dignity Kits</h3>
                    <p className="text-slate-300 text-base leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                      Methodical distribution of personal hygiene items. Continuous grooming prevents infections and protects their dignity.
                    </p>
                  </div>
                </div>

                {/* 4. Apoyo a medicinas */}
                <div className="group relative min-h-[26rem] md:min-h-[30rem] rounded-[2rem] overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500">
                  <img src="/images/medicine.png" alt="Apoyo médico" className="absolute inset-0 w-full h-full object-cover transform opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-in-out" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <div className="bg-rose-500 text-white w-12 h-12 flex items-center justify-center rounded-2xl mb-4 shadow-lg transform group-hover:-translate-y-2 transition-transform duration-300 text-xl">
                      💊
                    </div>
                    <h3 className="text-white text-2xl font-bold mb-3">Medical Continuity</h3>
                    <p className="text-slate-300 text-base leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                      We prevent the interruption of critical treatments by financially supporting the co-pay for their vital medicines.
                    </p>
                  </div>
                </div>

                {/* N U E V O ! 5. Cumpleaños Colectivos (Salud Mental) MEGA TARJETA */}
                <div className="group relative min-h-[28rem] md:min-h-[34rem] rounded-[2.5rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 lg:col-span-2">
                  <ImageCarousel
                    images={[
                      "https://images.unsplash.com/photo-1530103862676-de8892bc952f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                      "https://images.unsplash.com/photo-1558636508-e0db3814bd1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                      "https://images.unsplash.com/photo-1464349153735-7db50ed83c84?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    ]}
                    overlayTexts={[
                      "Celebrating 80 Years!",
                      "Surprise for Maria, 91 Years Old!",
                      "You matter to us"
                    ]}
                    interval={4500}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
                  <div className="absolute inset-0 p-8 sm:p-10 flex flex-col justify-end">
                    <div className="flex items-center gap-4 mb-4 transform group-hover:-translate-y-1 transition-transform duration-300">
                      <div className="bg-pink-500 text-white w-14 h-14 flex items-center justify-center rounded-2xl shadow-xl text-2xl">
                        🎂
                      </div>
                      <span className="bg-pink-500/20 text-pink-300 px-3 py-1 rounded-full font-bold tracking-widest uppercase text-xs border border-pink-500/30">Active Mental Health</span>
                    </div>
                    <h3 className="text-white text-3xl sm:text-4xl font-extrabold mb-4">Celebration of Life</h3>
                    <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-500">
                      <p className="text-slate-200 text-base sm:text-lg leading-relaxed font-medium">
                        We cut the chain of depression short by organizing monthly <strong>Collective Birthdays</strong>. We want them to know they will never blow out candles alone again, because they are not a burden: they are the greatest treasure of our community and deserve to smile every day.
                      </p>
                    </div>
                  </div>
                </div>

                {/* N U E V O ! 6. Días Festivos (Socialización) MEGA TARJETA */}
                <div className="group relative min-h-[28rem] md:min-h-[34rem] rounded-[2.5rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 lg:col-span-2">
                  <ImageCarousel
                    images={[
                      "/images/festivo_1.png",
                      "/images/festivo_2.png",
                      "/images/festivo_3.png",
                      "/images/festivo_4.png",
                      "/images/festivo_5.png",
                      "/images/mothers_day_1.png",
                      "/images/mothers_day_2.png",
                      "/images/mothers_day_3.png"
                    ]}
                    overlayTexts={[
                      "Great Thanksgiving Dinner",
                      "Creating Community Ties",
                      "Beautiful Gatherings",
                      "Unforgettable Dinners",
                      "Celebrating Life",
                      "Happy Mother's Day!",
                      "A Mother, Our Treasure",
                      "Roses, Love, and Joy"
                    ]}
                    interval={4000}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
                  <div className="absolute inset-0 p-8 sm:p-10 flex flex-col justify-end">
                    <div className="flex items-center gap-4 mb-4 transform group-hover:-translate-y-1 transition-transform duration-300">
                      <div className="bg-violet-500 text-white w-14 h-14 flex items-center justify-center rounded-2xl shadow-xl text-2xl">
                        🎉
                      </div>
                    </div>
                    <h3 className="text-white text-3xl sm:text-4xl font-extrabold mb-4">Events and Holidays</h3>
                    <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-500">
                      <p className="text-slate-200 text-base sm:text-lg leading-relaxed font-medium">
                        From Mother's and Father's Day to emotional Thanksgiving dinners. We foster beautiful physical spaces to laugh, create new friendships among neighbors, and aggressively combat cognitive decline caused by isolation.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 7. Bienestar Mapeado */}
                <div className="group relative min-h-[26rem] md:min-h-[30rem] rounded-[2rem] overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500">
                  <img src="/images/volunteer.png" alt="Bienestar Evaluado" className="absolute inset-0 w-full h-full object-cover transform opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-in-out" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <div className="bg-teal-500 text-white w-12 h-12 flex items-center justify-center rounded-2xl mb-4 shadow-lg transform group-hover:-translate-y-2 transition-transform duration-300 text-xl">
                      📈
                    </div>
                    <h3 className="text-white text-2xl font-bold mb-3">Reported Wellness</h3>
                    <p className="text-slate-300 text-base leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                      Short periodic self-reports to scientifically measure perceived human improvement and proactively adjust the program.
                    </p>
                  </div>
                </div>

                {/* 8. Voluntarios (Tejido humano) */}
                <div className="group relative min-h-[26rem] md:min-h-[30rem] rounded-[2rem] overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500">
                  <img src="/images/hero.png" alt="Comunidad unida" className="absolute inset-0 w-full h-full object-cover transform opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-in-out" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <div className="bg-indigo-500 text-white w-12 h-12 flex items-center justify-center rounded-2xl mb-4 shadow-lg transform group-hover:-translate-y-2 transition-transform duration-300 text-xl">
                      🤝
                    </div>
                    <h3 className="text-white text-2xl font-bold mb-3">Volunteer Network</h3>
                    <p className="text-slate-300 text-base leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                      Building a network of empathetic volunteers, measuring the enormous warm and human value they inject into each visit.
                    </p>
                  </div>
                </div>

              </div>

              {/* CARD RESUMEN Y BOTÓN */}
              <div className="mt-20 rounded-[2.5rem] border border-slate-200 bg-white p-8 sm:p-12 shadow-sm flex flex-col lg:flex-row items-center gap-12">
                <div className="flex-1">
                  <div className="text-sm font-bold text-emerald-600 tracking-widest uppercase mb-3">
                    Total Transparency
                  </div>
                  <h3 className="text-3xl font-extrabold text-slate-900 mb-5">
                    Structure of the GYF Ecosystem
                  </h3>
                  <p className="text-lg text-slate-600 leading-relaxed mb-8">
                    Our social investment reports cross 3 fundamental axes: The <strong>Operational Reach</strong> (timely physical deliveries), the <strong>Quality of Life</strong> (nutrition and bodily health), and the differentiating factor, the <strong>Emotional Impact</strong> (reduction of loneliness and protection of social mental health).
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <button
                      onClick={() => handleOpenFormModal('alianza')}
                      className="rounded-2xl bg-emerald-600 text-white px-8 py-4 text-lg font-bold hover:bg-emerald-700 transition shadow-lg hover:shadow-emerald-500/30"
                    >
                      Request Audit Model
                    </button>
                    <button
                      onClick={() => handleOpenModal(50)}
                      className="rounded-2xl bg-slate-900 text-white px-8 py-4 text-lg font-bold hover:bg-slate-800 transition shadow-lg"
                    >
                      Make a Donation
                    </button>
                  </div>
                </div>

                {/* Decoración visual derecha */}
                <div className="w-full lg:w-1/3 bg-slate-50 rounded-[2rem] p-8 border border-slate-100 shadow-inner">
                  <div className="grid gap-6">
                    <div className="flex items-center gap-4">
                      <div className="w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
                      <span className="text-base font-bold text-slate-700">Reach: Physical Goals</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                      <span className="text-base font-bold text-slate-700">Quality: Medical Intervention</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-3 h-3 rounded-full bg-pink-500 shadow-[0_0_10px_rgba(236,72,153,0.5)]"></div>
                      <span className="text-base font-bold text-slate-700">Wellness: Mental Health & Networks</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </section>

          {/* PITCH DECK SECTION (THE PROBLEM) */}
          <section id="porque" className="bg-slate-900 text-white py-24 sm:py-32 relative overflow-hidden">
            {/* Elementos decorativos de fondo */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-rose-500/10 blur-3xl pointer-events-none" />

            <div className="mx-auto max-w-6xl px-4 relative z-10">
              <div className="text-center mb-16">
                <span className="text-emerald-400 font-bold tracking-widest uppercase text-sm mb-4 block">The Problem</span>
                <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6">The Cost of Inaction</h2>
                <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                  Loneliness and abandonment in old age are not just emotional issues; they are a public health crisis that silently consumes our community.
                </p>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                <div className="bg-slate-800/50 border border-slate-700 rounded-[2rem] p-8 hover:bg-slate-800 transition duration-300">
                  <div className="h-12 w-12 rounded-xl bg-rose-500/20 flex items-center justify-center mb-6">
                    <span className="text-2xl">💔</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Health Impact</h3>
                  <p className="text-slate-400 leading-relaxed mb-6">
                    Chronic isolation increases the risk of mortality by <strong className="text-white">26%</strong>, comparable to smoking 15 cigarettes a day. Malnutrition accelerates cognitive and physical decline.
                  </p>
                  <ul className="space-y-3 text-sm text-slate-300">
                    <li className="flex items-center gap-2"><span className="text-rose-400">✗</span> Severe depression</li>
                    <li className="flex items-center gap-2"><span className="text-rose-400">✗</span> Preventable malnourishment</li>
                    <li className="flex items-center gap-2"><span className="text-rose-400">✗</span> Treatment abandonment</li>
                  </ul>
                </div>

                <div className="bg-slate-800/50 border border-slate-700 rounded-[2rem] p-8 hover:bg-slate-800 transition duration-300">
                  <div className="h-12 w-12 rounded-xl bg-emerald-500/20 flex items-center justify-center mb-6">
                    <span className="text-2xl">📉</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Economic Impact</h3>
                  <p className="text-slate-400 leading-relaxed mb-6">
                    Lack of prevention results in frequent emergency room visits and preventable hospitalizations, overwhelming the local health system with massive costs.
                  </p>
                  <ul className="space-y-3 text-sm text-slate-300">
                    <li className="flex items-center gap-2"><span className="text-emerald-400">✓</span> Less unnecessary 911 calls</li>
                    <li className="flex items-center gap-2"><span className="text-emerald-400">✓</span> Reduction in emergency admissions</li>
                    <li className="flex items-center gap-2"><span className="text-emerald-400">✓</span> System decongestion</li>
                  </ul>
                </div>

                <div className="bg-slate-800/50 border border-slate-700 rounded-[2rem] p-8 hover:bg-slate-800 transition duration-300">
                  <div className="h-12 w-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-6">
                    <span className="text-2xl">🏚️</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Social Fabric</h3>
                  <p className="text-slate-400 leading-relaxed mb-6">
                    A society that forgets those who built it loses its moral compass. The structural dissolution of community support leaves seniors invisible.
                  </p>
                  <ul className="space-y-3 text-sm text-slate-300">
                    <li className="flex items-center gap-2"><span className="text-blue-400">✗</span> Invisible to the system</li>
                    <li className="flex items-center gap-2"><span className="text-blue-400">✗</span> Loss of historical memory</li>
                    <li className="flex items-center gap-2"><span className="text-blue-400">✗</span> Individualistic paradigm</li>
                  </ul>
                </div>
              </div>

              <div className="mt-20 border-t border-slate-800 pt-16 flex flex-col md:flex-row items-center gap-10">
                <div className="md:w-1/3">
                  <h3 className="text-3xl font-extrabold text-white">Why fund the GYF model?</h3>
                </div>
                <div className="md:w-2/3 grid sm:grid-cols-2 gap-6">
                  <div className="flex gap-4">
                    <div className="text-emerald-500 text-2xl">🎯</div>
                    <div>
                      <h4 className="font-bold text-white mb-1">Hyper-focus</h4>
                      <p className="text-sm text-slate-400">We don't get diluted. We concentrate on high-density buildings to maximize logistical ROI.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="text-emerald-500 text-2xl">📊</div>
                    <div>
                      <h4 className="font-bold text-white mb-1">Traceability</h4>
                      <p className="text-sm text-slate-400">Every delivered box, every visit, every birthday is documented to ensure transparency.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* HOW WE HELP */}
          <section id="ayuda" className="border-t bg-emerald-50/50">
            <div className="mx-auto max-w-6xl px-4 py-20 text-center">
              <h2 className="text-3xl font-extrabold tracking-tight">How We Help</h2>
              <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
                Targeted and consistent interventions that go straight to the basic needs of seniors living alone.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {helpCards.map((c) => (
                <div
                  key={c.title}
                  className="group overflow-hidden rounded-3xl border bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300 flex flex-col"
                >
                  <div className="h-56 w-full overflow-hidden relative">
                    <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition duration-300 z-10" />
                    <img src={c.image} alt={c.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
                  </div>
                  <div className="p-8 flex-1 flex flex-col">
                    <div className="flex items-center gap-3">
                      <div className="text-3xl">{c.icon}</div>
                      <h3 className="text-xl font-bold text-slate-900">{c.title}</h3>
                    </div>
                    <p className="mt-4 text-slate-600 leading-relaxed flex-1">{c.desc}</p>
                    <ul className="mt-6 space-y-3 text-sm text-slate-600 border-t pt-6">
                      <li className="flex gap-3 items-start">
                        <span className="text-emerald-600 shrink-0">✓</span>
                        <span>Periodic and organized deliveries</span>
                      </li>
                      <li className="flex gap-3 items-start">
                        <span className="text-emerald-600 shrink-0">✓</span>
                        <span>Focus on continuity and prevention</span>
                      </li>
                      <li className="flex gap-3 items-start">
                        <span className="text-emerald-600 shrink-0">✓</span>
                        <span>Simple and measurable tracking</span>
                      </li>
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* VISION SECTION */}
          <section id="vision" className="relative bg-white py-24 lg:py-32 overflow-hidden border-t">
            {/* Ambient lights */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-emerald-50/50 blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-amber-50/50 blur-3xl pointer-events-none"></div>

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">

                {/* Left Side - Text Content */}
                <div className="lg:col-span-6 lg:col-start-1 xl:col-span-5">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-sm font-bold tracking-wide uppercase mb-6 border border-emerald-100 shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    Vision and Commitment
                  </div>

                  <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
                    The Model for a <br className="hidden sm:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">Dignified Future</span>
                  </h2>

                  <p className="mt-6 text-lg text-slate-600 leading-relaxed font-medium">
                    We are building an unbreakable community network. Our goal is that <strong>no senior</strong> ever has to choose between buying food or medicine again. Designed to offer immediate and clear <span className="text-emerald-700 font-bold bg-emerald-50/50 px-1 rounded">Social Return on Investment (ROI)</span> to our sponsors.
                  </p>

                  <div className="mt-10 grid gap-5">
                    {/* Pilar 1 */}
                    <div className="group flex items-start gap-4 rounded-3xl border border-slate-100 bg-white p-5 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-emerald-200 transition-all duration-300">
                      <div className="shrink-0 flex items-center justify-center w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-inner">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">Restoring Dignity</h4>
                        <p className="mt-1 text-sm text-slate-600 leading-snug">We guarantee the essentials month by month, bringing peace of mind back to their homes and families, and preventing critical crises.</p>
                      </div>
                    </div>

                    {/* Pilar 2 */}
                    <div className="group flex items-start gap-4 rounded-3xl border border-slate-100 bg-white p-5 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-blue-200 transition-all duration-300">
                      <div className="shrink-0 flex items-center justify-center w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-inner">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors">Radical Transparency</h4>
                        <p className="mt-1 text-sm text-slate-600 leading-snug">100% auditable data: We rigorously measure and report every delivery and the perceived impact on a monthly basis.</p>
                      </div>
                    </div>

                    {/* Pilar 3 */}
                    <div className="group flex items-start gap-4 rounded-3xl border border-slate-100 bg-white p-5 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-amber-200 transition-all duration-300">
                      <div className="shrink-0 flex items-center justify-center w-12 h-12 rounded-2xl bg-amber-100 text-amber-600 group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-white transition-all duration-300 shadow-inner">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-slate-900 group-hover:text-amber-600 transition-colors">Highly Scalable Model</h4>
                        <p className="mt-1 text-sm text-slate-600 leading-snug">Geolocated pilot, technologically structured to be a replicable model in other communities across the state.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* High Impact Photography & Floating Box - Right Side */}
                <div className="lg:col-span-6 xl:col-span-7 mt-16 lg:mt-0 relative">
                  <div className="relative mx-auto w-full rounded-[2rem] shadow-2xl lg:max-w-md xl:max-w-lg lg:ml-auto overflow-hidden ring-1 ring-slate-900/10 isolate">
                    <img
                      src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                      alt="Volunteer warmly holding hands of a smiling senior woman, supporting her unconditionally"
                      className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-1000 ease-out"
                      style={{ aspectRatio: "4/5" }}
                    />
                    {/* Subtle gradient to darken the base of the image for contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent z-10 pointer-events-none"></div>
                  </div>

                  {/* Tarjeta Flotante (Glassmorphism) con la Promesa */}
                  <div className="absolute -bottom-8 -left-4 sm:bottom-12 sm:-left-12 lg:bottom-16 lg:-left-20 bg-white/85 backdrop-blur-xl rounded-3xl p-6 sm:p-8 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.25)] ring-1 ring-white/50 max-w-xs sm:max-w-sm transform hover:-translate-y-2 transition-transform duration-500 z-20">
                    <div className="text-amber-500 mb-4 opacity-80">
                      <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true"><path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" /></svg>
                    </div>
                    <p className="text-lg font-bold text-slate-800 leading-relaxed">
                      "To create a smile and life-giving hope in every home we visit."
                    </p>
                    <div className="mt-5 flex items-center gap-3 border-t border-slate-200/80 pt-5">
                      <div className="h-11 w-11 shrink-0 rounded-full bg-slate-900 border-2 border-white flex items-center justify-center text-white font-black text-sm shadow-md ring-2 ring-emerald-500/20">
                        GYF
                      </div>
                      <div>
                        <div className="text-sm font-bold text-slate-900 leading-tight">Our Promise</div>
                        <div className="text-xs font-bold text-emerald-600 uppercase tracking-widest mt-0.5">The Foundation</div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* PLAN */}
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

          {/* PILOT */}
          <section id="piloto" className="border-t bg-slate-50">
            <div className="mx-auto max-w-6xl px-4 py-20 grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-extrabold tracking-tight">Pilot Project</h2>
                <p className="mt-4 text-lg text-slate-600">
                  Initial phase: a residential building in Miami-Dade, providing coverage for 400–500 seniors
                  living alone. We will mechanically measure monthly deliveries, needs, and wellness outcomes.
                </p>

                <div className="mt-8 grid gap-3">
                  <div className="rounded-2xl border bg-white p-4">
                    <div className="font-semibold">Efficient logistics</div>
                    <div className="text-slate-600">
                      A centralized point reduces costs and maximizes reach.
                    </div>
                  </div>
                  <div className="rounded-2xl border bg-white p-4">
                    <div className="font-semibold">Measurable impact</div>
                    <div className="text-slate-600">
                      Registered deliveries and reported wellness for transparency.
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl bg-slate-900 text-white p-10 shadow-xl">
                <div className="text-sm text-white/70">Opportunity for donors and grants</div>
                <div className="mt-3 text-2xl font-extrabold leading-snug">
                  Funding the pilot means building a replicable model for all of Florida.
                </div>
                <p className="mt-6 text-white/80">
                  With sustained resources, the pilot can expand within the operational year to all three buildings.
                </p>
                <div className="mt-8">
                  <button
                    onClick={() => handleOpenModal(50)}
                    className="rounded-2xl bg-emerald-500 text-white px-5 py-3 font-semibold hover:bg-emerald-600"
                  >
                    Fund this pilot
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* EXPANSION */}
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

          {/* DONATE AND GOLDEN GUARDIANS */}
          <section id="donar" className="border-t bg-slate-50 relative overflow-hidden">
            {/* Elementos decorativos de fondo */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-amber-400/10 blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />

            <div className="mx-auto max-w-6xl px-4 py-24 relative z-10">
              <div className="text-center">
                <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-4 py-1.5 text-sm font-bold text-amber-700 mb-6">
                  <span className="text-lg">⭐</span> Recurring Donation Program
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
                  Become a <span className="text-amber-500">Golden Guardian</span>
                </h2>
                <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                  Stable foundations and constant support are not achieved with one-time donations.
                  We depend on generous hearts who commit month after month to bring nutrition,
                  medicines, and dignity to those who need it most.
                </p>
              </div>

              {/* NIVELES DE DONACIÓN (PRICING CARDS) */}
              <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                {/* Nivel 1 */}
                <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300 flex flex-col items-center text-center">
                  <div className="h-16 w-16 rounded-2xl bg-slate-50 flex items-center justify-center text-3xl mb-6 shadow-inner">
                    🌱
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Seed of Support</h3>
                  <div className="mt-4 flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-extrabold tracking-tight text-slate-900">$15</span>
                    <span className="text-sm font-semibold text-slate-500">/ mo</span>
                  </div>
                  <p className="mt-4 text-sm text-slate-600 font-medium">Basic continuous support</p>
                  <p className="mt-2 text-xs text-slate-500 leading-relaxed min-h-[40px]">
                    Help us cover constant logistical needs.
                  </p>
                  <div className="mt-8 w-full">
                    <button onClick={() => handleOpenModal(15)} className="block w-full rounded-2xl border-2 border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-900 hover:border-slate-300 hover:bg-slate-50 transition">
                      Join with $15
                    </button>
                  </div>
                </div>

                {/* Nivel 2 */}
                <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300 flex flex-col items-center text-center">
                  <div className="h-16 w-16 rounded-2xl bg-amber-50 flex items-center justify-center text-3xl mb-6 shadow-inner">
                    🍲
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Hot Meal</h3>
                  <div className="mt-4 flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-extrabold tracking-tight text-slate-900">$25</span>
                    <span className="text-sm font-semibold text-slate-500">/ mo</span>
                  </div>
                  <p className="mt-4 text-sm text-slate-600 font-medium">1 week of meals</p>
                  <p className="mt-2 text-xs text-slate-500 leading-relaxed min-h-[40px]">
                    Ensures meals for a senior for one week a month.
                  </p>
                  <div className="mt-8 w-full">
                    <button onClick={() => handleOpenModal(25)} className="block w-full rounded-2xl border-2 border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-900 hover:border-slate-300 hover:bg-slate-50 transition">
                      Join with $25
                    </button>
                  </div>
                </div>

                {/* Nivel 3 - RECOMENDADO DA VIDA */}
                <div className="relative rounded-3xl border-2 border-emerald-500 bg-white p-8 shadow-xl hover:-translate-y-2 transition duration-300 flex flex-col items-center text-center transform lg:-translate-y-4">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide shadow-md whitespace-nowrap">
                    Key Impact
                  </div>
                  <div className="h-16 w-16 rounded-2xl bg-emerald-50 flex items-center justify-center text-3xl mb-6 shadow-inner">
                    💚
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Comprehensive Care</h3>
                  <div className="mt-4 flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-extrabold tracking-tight text-emerald-600">$50</span>
                    <span className="text-sm font-semibold text-slate-500">/ mo</span>
                  </div>
                  <p className="mt-4 text-sm text-emerald-700 font-bold">Food + Hygiene</p>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed min-h-[40px]">
                    Protects their nutrition and dignity with combined deliveries.
                  </p>
                  <div className="mt-8 w-full">
                    <button onClick={() => handleOpenModal(50)} className="block w-full rounded-2xl bg-emerald-600 px-4 py-3 text-sm font-semibold text-white hover:bg-emerald-700 shadow-md transition">
                      Join with $50
                    </button>
                  </div>
                </div>

                {/* Nivel 4 */}
                <div className="rounded-3xl border border-slate-200 bg-slate-900 text-white p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300 flex flex-col items-center text-center">
                  <div className="h-16 w-16 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center text-3xl mb-6 shadow-inner">
                    👑
                  </div>
                  <h3 className="text-xl font-bold text-white">Sponsoring Guardian</h3>
                  <div className="mt-4 flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-extrabold tracking-tight text-amber-400">$100</span>
                    <span className="text-sm font-semibold text-slate-400">/ mo</span>
                  </div>
                  <p className="mt-4 text-sm text-amber-400 font-bold">Sponsor 1 senior</p>
                  <p className="mt-2 text-xs text-slate-400 leading-relaxed min-h-[40px]">
                    Comprehensively covers a person for a continuous month.
                  </p>
                  <div className="mt-8 w-full">
                    <button onClick={() => handleOpenModal(100)} className="block w-full rounded-2xl bg-amber-500 px-4 py-3 text-sm font-semibold text-slate-900 hover:bg-amber-400 transition">
                      Become a Guardian
                    </button>
                  </div>
                </div>

              </div>

              {/* OTRAS FORMAS DE AYUDAR */}
              <div className="mt-24 text-center">
                <h3 className="text-2xl font-bold text-slate-900 mb-8">Choose another way to support</h3>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {supportCards.map((c) => (
                  <div
                    key={c.title}
                    className="group overflow-hidden rounded-3xl border bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300 flex flex-col"
                  >
                    <div className="h-48 w-full overflow-hidden relative bg-slate-800">
                      <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition duration-300 z-10" />
                      {c.image ? (
                        <img src={c.image} alt={c.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-700 to-slate-900 text-slate-500">
                          <span className="text-5xl opacity-50 mb-2">{c.icon}</span>
                          <span className="text-xs font-semibold uppercase tracking-widest text-slate-400 opacity-60">Coming Soon</span>
                        </div>
                      )}
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-center gap-3">
                        <div className="text-2xl">{c.icon}</div>
                        <h3 className="text-lg font-bold text-slate-900">{c.title}</h3>
                      </div>
                      <p className="mt-3 text-slate-600 leading-relaxed flex-1 text-sm">{c.desc}</p>

                      <div className="mt-5 w-full">
                        <button
                          onClick={() => handleOpenFormModal(c.type)}
                          className="w-full inline-flex items-center justify-center rounded-2xl bg-emerald-600 text-white px-4 py-3 font-semibold hover:bg-emerald-700 transition"
                        >
                          Apply / Register
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* AVISO IMPORTANTE */}
              <div className="mt-12 rounded-3xl border border-amber-200 bg-amber-50 p-8 flex flex-col sm:flex-row gap-6 items-center text-center sm:text-left">
                <div className="text-4xl">💳</div>
                <div>
                  <div className="text-sm font-bold text-slate-900">Donate Now (Coming soon online)</div>
                  <p className="mt-2 text-sm text-slate-700">
                    We are integrating fast secure payment methods like Stripe, PayPal, and Zelle.
                    In the meantime, if you decide to support, simply fill out the form below and we will contact you immediately to manage it.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CONTACT LIST */}
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
                    // Keep the alert strictly translation text without modification of logic.
                    // This was already translated in multi-replace chunk.
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
        </main>

        {/* FOOTER */}
        <footer className="border-t bg-slate-900 text-white">
          <div className="mx-auto max-w-6xl px-4 py-10 text-sm flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
            <p className="m-0">
              © {new Date().getFullYear()} The Golden Years Foundation · 501(c)(3)
            </p>
            <div className="flex gap-4 text-white/80">
              <a href="#inicio" className="hover:text-white">
                Home
              </a>
              <button onClick={() => handleOpenModal(50)} className="hover:text-white text-left">
                Donate
              </button>
              <a href="#contacto" className="hover:text-white">
                Contact
              </a>
            </div>
          </div>
        </footer>
      </div>

      {/* DONATION MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 overflow-y-auto w-full h-full bg-slate-900/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-md my-8 flex flex-col pointer-events-auto transform transition-all animate-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b">
              <h3 className="text-xl font-extrabold text-slate-900">Help a Senior</h3>
              <button
                onClick={handleCloseModal}
                className="text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full p-2 transition"
                aria-label="Close modal"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto flex-1">
              <p className="text-sm text-slate-600 font-medium mb-4">
                Choose a monthly level to become a <span className="text-amber-500 font-bold">Golden Guardian</span>:
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

              <div className="mb-8">
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

              {/* Payment Methods */}
              <div className="mt-8 border-t pt-6">
                <p className="text-sm font-semibold text-slate-900 mb-4 text-center">
                  Continue secure payment using:
                </p>
                <div className="space-y-3">
                  <button
                    onClick={() => alert('Thank you for your interest! We will soon activate Stripe Checkout for card payments.')}
                    className="w-full flex items-center justify-center gap-3 bg-slate-900 text-white hover:bg-slate-800 rounded-2xl py-4 font-semibold shadow-sm transition group"
                  >
                    <span className="text-xl group-hover:scale-110 transition">💳</span> Credit / Debit Card
                  </button>
                  <button
                    onClick={() => alert('Thank you for your interest! We will soon activate PayPal Checkout.')}
                    className="w-full flex items-center justify-center gap-3 bg-[#0070BA] text-white hover:bg-[#003087] rounded-2xl py-4 font-semibold shadow-sm transition group"
                  >
                    <span className="text-xl group-hover:scale-110 transition">🅿️</span> PayPal
                  </button>
                  <button
                    onClick={() => alert('Payments with Zelle. Currently please send us a WhatsApp to give you the correct email/phone of the real 501(c)(3) account. (Close this window to go to contact)')}
                    className="w-full flex items-center justify-center gap-3 bg-[#6329A8] text-white hover:bg-[#4E2184] rounded-2xl py-4 font-semibold shadow-sm transition group"
                  >
                    <span className="text-xl group-hover:scale-110 transition">💸</span> Zelle
                  </button>
                </div>
              </div>

              <p className="mt-6 text-center flex items-center justify-center gap-1 text-xs text-slate-500 font-medium">
                🔒 100% tax-deductible donation (501c3)
              </p>
            </div>
          </div>
        </div>
      )}

      {/* FORM MODALS (In-kind, Volunteering, Partnerships) */}
      {formModalType && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8 overflow-y-auto w-full h-full bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-2xl my-auto flex flex-col pointer-events-auto transform transition-all animate-in zoom-in-95 duration-200">
            {/* Form Header */}
            <div className={`flex items-center justify-between px-6 pt-6 pb-4 border-b ${formModalType === 'voluntariado' ? 'bg-amber-50 rounded-t-3xl border-amber-100' :
              formModalType === 'alianza' ? 'bg-slate-50 rounded-t-3xl border-slate-200' :
                'bg-emerald-50 rounded-t-3xl border-emerald-100'
              }`}>
              <h3 className="text-xl font-extrabold text-slate-900 flex items-center gap-2">
                {formModalType === "donacion_especie" && "❤️ In-Kind Donation Registration"}
                {formModalType === "voluntariado" && "🤝 Volunteer Interview"}
                {formModalType === "alianza" && "🏢 Institutional Partnership Request"}
              </h3>
              <button
                onClick={handleCloseFormModal}
                className="text-slate-500 hover:text-slate-800 hover:bg-white rounded-full p-2 transition shadow-sm"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>
            </div>

            {/* Dynamic Body */}
            <div className="p-6 md:p-8 overflow-y-auto max-h-[75vh]">
              <form onSubmit={handleFormSubmit} className="grid gap-6">

                {/* ---------- FORM 1: IN-KIND DONATION ---------- */}
                {formModalType === "donacion_especie" && (
                  <>
                    <p className="text-sm text-slate-600 mb-2">
                      Thank you for wanting to donate products. Register your contribution to coordinate the logistics of delivery of supplies.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <label className="grid gap-2">
                        <span className="text-sm font-semibold">Full Name *</span>
                        <input required className="border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-200" placeholder="Ex: Maria Gonzalez" />
                      </label>
                      <label className="grid gap-2">
                        <span className="text-sm font-semibold">Company / Entity (Optional)</span>
                        <input className="border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-200" placeholder="If you denote on behalf of a company..." />
                      </label>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <label className="grid gap-2">
                        <span className="text-sm font-semibold">Email *</span>
                        <input type="email" required className="border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-200" placeholder="you@email.com" />
                      </label>
                      <label className="grid gap-2">
                        <span className="text-sm font-semibold">Phone / WhatsApp *</span>
                        <input type="tel" required className="border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-200" placeholder="+1 (305)..." />
                      </label>
                    </div>
                    <label className="grid gap-2">
                      <span className="text-sm font-semibold">What product(s) do you want to donate? *</span>
                      <select required className="border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-200 bg-white">
                        <option value="">Select the type of product...</option>
                        <option value="alimentos">Non-perishable food (boxes, cans, grains)</option>
                        <option value="higiene">Personal hygiene products (diapers, soap)</option>
                        <option value="medicinas">Supplements / Light medical equipment</option>
                        <option value="otros">Other (Please specify below)</option>
                      </select>
                    </label>
                    <label className="grid gap-2">
                      <span className="text-sm font-semibold">Details and Approximate Quantity *</span>
                      <textarea required className="border rounded-xl px-4 py-3 min-h-[100px] outline-none focus:ring-2 focus:ring-emerald-200" placeholder="Ex: 50 cans of tuna, 5 packs of size L diapers..." />
                    </label>
                  </>
                )}

                {/* ---------- FORM 2: VOLUNTEERING ---------- */}
                {formModalType === "voluntariado" && (
                  <>
                    <p className="text-sm text-slate-600 mb-2">
                      Volunteers are the heart of our mission. Complete this form to contact you and perform an initial interview.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <label className="grid gap-2">
                        <span className="text-sm font-semibold">Full Name *</span>
                        <input required className="border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-amber-200" placeholder="Your name" />
                      </label>
                      <label className="grid gap-2">
                        <span className="text-sm font-semibold">Age</span>
                        <input type="number" min="18" className="border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-amber-200" placeholder="+18 years recom." />
                      </label>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <label className="grid gap-2">
                        <span className="text-sm font-semibold">Email *</span>
                        <input type="email" required className="border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-amber-200" placeholder="Email address" />
                      </label>
                      <label className="grid gap-2">
                        <span className="text-sm font-semibold">Phone / WhatsApp *</span>
                        <input type="tel" required className="border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-amber-200" placeholder="Your phone" />
                      </label>
                    </div>

                    <div className="border border-slate-200 p-4 rounded-xl bg-slate-50">
                      <span className="text-sm font-semibold block mb-3">Availability by Days *</span>
                      <div className="flex flex-wrap gap-4">
                        {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Sat/Sun'].map(dia => (
                          <label key={dia} className="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" className="w-4 h-4 text-amber-600 rounded" />
                            <span className="text-sm text-slate-700">{dia}</span>
                          </label>
                        ))}
                      </div>

                      <span className="text-sm font-semibold block mt-5 mb-3">Time Preference *</span>
                      <div className="flex flex-wrap gap-4">
                        {['Morning (9am-12pm)', 'Afternoon (1pm-5pm)', 'Flexible'].map(hora => (
                          <label key={hora} className="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" className="w-4 h-4 text-amber-600 rounded" />
                            <span className="text-sm text-slate-700">{hora}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <label className="grid gap-2">
                      <span className="text-sm font-semibold">Why would you like to volunteer? (Brief)</span>
                      <textarea className="border rounded-xl px-4 py-3 min-h-[80px] outline-none focus:ring-2 focus:ring-amber-200" placeholder="Tell us a little about yourself..." />
                    </label>
                  </>
                )}

                {/* ---------- FORM 3: PARTNERSHIPS ---------- */}
                {formModalType === "alianza" && (
                  <>
                    <p className="text-sm text-slate-600 mb-2">
                      We seek to join forces with institutions and companies. Leave us your organization's data and we will contact you.
                    </p>
                    <label className="grid gap-2">
                      <span className="text-sm font-semibold">Name of the Organization / Foundation / Company *</span>
                      <input required className="border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-slate-300" placeholder="Ex: Global Health Foundation" />
                    </label>
                    <div className="grid md:grid-cols-2 gap-4">
                      <label className="grid gap-2">
                        <span className="text-sm font-semibold">Type of Entity *</span>
                        <select required className="border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-slate-300 bg-white">
                          <option value="">Select...</option>
                          <option value="ong">Foundation / NGO (501c3 or other)</option>
                          <option value="corporacion">Private Corporate Company</option>
                          <option value="gobierno">Government / Public Entity</option>
                          <option value="iglesia">Church / Religious Center</option>
                          <option value="otro">Civil Association / Other</option>
                        </select>
                      </label>
                      <label className="grid gap-2">
                        <span className="text-sm font-semibold">Website (Optional)</span>
                        <input type="url" className="border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-slate-300" placeholder="https://" />
                      </label>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <label className="grid gap-2">
                        <span className="text-sm font-semibold">Contact Person *</span>
                        <input required className="border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-slate-300" placeholder="Full name" />
                      </label>
                      <label className="grid gap-2">
                        <span className="text-sm font-semibold">Email / Phone *</span>
                        <input required className="border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-slate-300" placeholder="Email and direct number" />
                      </label>
                    </div>
                    <label className="grid gap-2">
                      <span className="text-sm font-semibold">What is your organization dedicated to? (Purpose) *</span>
                      <textarea required className="border rounded-xl px-4 py-3 min-h-[80px] outline-none focus:ring-2 focus:ring-slate-300" placeholder="Our mission is..." />
                    </label>
                    <label className="grid gap-2">
                      <span className="text-sm font-semibold">Detail: Interest or reason for the partnership *</span>
                      <textarea required className="border rounded-xl px-4 py-3 min-h-[100px] outline-none focus:ring-2 focus:ring-slate-300" placeholder="We would like to collaborate because we have seen synergies... we could contribute..." />
                    </label>
                  </>
                )}

                <div className="mt-4 border-t pt-6 flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={handleCloseFormModal}
                    className="px-6 py-3 rounded-xl font-semibold text-slate-600 hover:bg-slate-100 transition"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className={`px-8 py-3 rounded-xl font-bold text-white shadow-md transition ${formModalType === 'voluntariado' ? 'bg-amber-600 hover:bg-amber-700' :
                      formModalType === 'alianza' ? 'bg-slate-900 hover:bg-slate-800' :
                        'bg-emerald-600 hover:bg-emerald-700'
                      }`}
                  >
                    Send Request
                  </button>
                </div>
              </form>
            </div>

          </div>
        </div>
      )}
    </>
  );
}