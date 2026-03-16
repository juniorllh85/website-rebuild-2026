import React, { useState } from "react";

/** ✅ Deja el número para el final */
const WHATSAPP_PHONE = "13050000000";
const WHATSAPP_MESSAGE =
  "Hola, quiero información sobre The Golden Years Foundation (501(c)(3)).";

function WhatsAppFloatingButton() {
  const message = encodeURIComponent(WHATSAPP_MESSAGE);
  const url = `https://wa.me/${WHATSAPP_PHONE}?text=${message}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-50 rounded-full bg-emerald-600 text-white shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition px-5 py-3 font-semibold flex items-center gap-2"
      aria-label="Chatear por WhatsApp"
      title="WhatsApp"
    >
      <span className="text-lg">💬</span>
      <span className="hidden sm:block">WhatsApp</span>
    </a>
  );
}

const impactStats = [
  { value: "400–500", label: "Adultos mayores en el edificio piloto" },
  { value: "3", label: "Edificios objetivo en el complejo" },
  { value: "1,200–1,500", label: "Alcance potencial total (complejo)" },
];

const helpCards = [
  {
    title: "Alimentación",
    desc: "Entrega periódica de alimentos esenciales para proteger nutrición y estabilidad.",
    icon: "🥗",
    image: "/images/food.png",
  },
  {
    title: "Medicinas",
    desc: "Apoyo para acceso y continuidad de medicamentos, reduciendo crisis evitables.",
    icon: "💊",
    image: "/images/medicine.png",
  },
  {
    title: "Aseo personal",
    desc: "Kits de higiene para mantener salud, dignidad y bienestar diario.",
    icon: "🧼",
    image: "/images/hygiene.png",
  },
];

const supportCards = [
  {
    title: "Donaciones (Especie)",
    desc: "Tu aporte impulsa entregas de alimentos, apoyo en medicinas y kits de higiene.",
    icon: "❤️",
    type: "donacion_especie",
    image: "/images/donation.png"
  },
  {
    title: "Voluntariado",
    desc: "Ayuda en entregas, organización y acompañamiento. Tu tiempo cambia vidas.",
    icon: "🤝",
    type: "voluntariado",
    image: "/images/volunteer.png"
  },
  {
    title: "Alianzas",
    desc: "Empresas e instituciones pueden apoyar con recursos, logística y matching grants.",
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
          alt={`Imagen dinámica ${index + 1}`}
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
    alert("¡Gracias! Hemos recibido tu información exitosamente. Nos pondremos en contacto muy pronto.");
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
                Inicio
              </a>
              <a href="#impacto" className="hover:text-emerald-700">
                Impacto
              </a>
              <a href="#metricas" className="hover:text-emerald-700">
                Métricas
              </a>
              <a href="#porque" className="hover:text-emerald-700">
                Por qué
              </a>
              <a href="#ayuda" className="hover:text-emerald-700">
                Cómo ayudamos
              </a>
              <a href="#vision" className="hover:text-emerald-700">
                Visión
              </a>
              <a href="#plan" className="hover:text-emerald-700">
                Plan
              </a>
              <a href="#piloto" className="hover:text-emerald-700">
                Piloto
              </a>
              <a href="#expansion" className="hover:text-emerald-700">
                Expansión
              </a>
              <a href="#donar" className="hover:text-emerald-700">
                Donar
              </a>
              <a href="#contacto" className="hover:text-emerald-700">
                Contacto
              </a>
            </nav>

            <button
              onClick={() => handleOpenModal(50)}
              className="rounded-xl bg-slate-900 text-white px-4 py-2 text-sm font-semibold hover:bg-slate-800"
            >
              Donar
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
                  501(c)(3) • Abrazando a Miami-Dade
                </div>

                <h1 className="mt-8 text-5xl sm:text-6xl md:text-[4rem] font-extrabold leading-[1.1] tracking-tight text-slate-900">
                  Rescatando del olvido a la generación que lo dio <span className="text-emerald-600 underline decoration-emerald-300 decoration-8 underline-offset-4">todo.</span>
                </h1>

                <p className="mt-8 text-lg sm:text-xl text-slate-600 leading-relaxed font-medium">
                  The Golden Years Foundation va mucho más allá de entregar una caja de alimentos. <strong className="text-slate-900">Rescatamos a nuestros adultos mayores de la soledad, el aislamiento y la depresión.</strong> A través de apoyo físico y contención emocional continua, convertimos hogares grises en espacios de celebración, dignidad y verdadera alegría.
                </p>

                <div className="mt-10 flex flex-wrap gap-4">
                  <button
                    onClick={() => handleOpenModal(50)}
                    className="rounded-full bg-emerald-600 text-white px-8 py-4 text-lg font-bold shadow-xl shadow-emerald-600/30 hover:shadow-2xl hover:bg-emerald-700 hover:-translate-y-1 transition-all duration-300"
                  >
                    ❤️ Quiero Devolverles la Sonrisa
                  </button>
                  <a
                    href="#impacto"
                    className="rounded-full border-2 border-slate-200 bg-white px-8 py-4 text-lg font-bold text-slate-700 hover:border-emerald-600 hover:text-emerald-700 hover:bg-emerald-50 transition-all duration-300"
                  >
                    Ver Nuestro Plan
                  </a>
                </div>

                <div className="mt-12 grid gap-4 text-base sm:text-lg text-slate-700 font-semibold bg-slate-50 p-6 sm:p-8 rounded-[2rem] border border-slate-200 shadow-inner">
                  <div className="flex items-center gap-4">
                    <div className="bg-white p-2 text-emerald-600 rounded-xl shadow-sm"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg></div>
                    <span>Dignidad Alimentaria y Cuidado Médico</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-white p-2 text-emerald-600 rounded-xl shadow-sm"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg></div>
                    <span>Salud Mental, Cumpleaños y Días Festivos</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-white p-2 text-emerald-600 rounded-xl shadow-sm"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg></div>
                    <span>Transparencia y Evaluaciones de Bienestar</span>
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
                      "Fomentando Lazos Inquebrantables",
                      "Nuestras Madres, Nuestro Tesoro",
                      "La Familia Que Elegimos",
                      "Generaciones Unidas",
                      "Alegría que Contagia"
                    ]}
                    interval={4500}
                  />

                  {/* Gradiente Oscuro de Fondo para el Texto Quote */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/10 to-transparent flex flex-col justify-end p-8 sm:p-12 z-10 pointer-events-none">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="h-3 w-3 rounded-full bg-rose-500 animate-pulse shadow-lg shadow-rose-500/50" />
                      <span className="text-rose-300 text-sm sm:text-base font-black tracking-[0.2em] uppercase">Misión Emocional</span>
                    </div>
                    <p className="text-white text-2xl sm:text-4xl font-extrabold leading-tight shadow-sm max-w-2xl italic">
                      «Nuestra obra maestra no se construye con dádivas, se construye con amor puro, empatía y esperanza humana.»
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </section>

          {/* IMPACTO */}
          <section id="impacto" className="border-t bg-white">
            <div className="mx-auto max-w-6xl px-4 py-20 text-center">
              <h2 className="text-3xl font-extrabold tracking-tight">Impacto y escala del enfoque</h2>
              <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto">
                Nuestro proyecto se concentra en un complejo residencial en Miami-Dade con tres edificios.
                Iniciamos con un piloto en un edificio para atender entre 400 y 500 adultos mayores.
                La expansión progresiva busca alcanzar entre 1,200 y 1,500 adultos mayores dentro del complejo.
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

          {/* MÉTRICAS Y PROGRAMAS (CON SALUD MENTAL) */}
          <section id="metricas" className="border-t bg-slate-50 py-24 sm:py-32">
            <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-4xl mx-auto mb-20">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 mb-8 leading-tight">
                  Más que Métricas:<br />
                  <span className="text-emerald-600">Compañía y Dignidad Absoluta</span>
                </h2>
                <p className="text-xl text-slate-600 leading-relaxed font-medium">
                  Para nuestros inversores sociales, reportamos datos duros con precisión milimétrica. Para nuestros adultos mayores, transformamos esos números en compañía real, dignidad, atención médica constante, y la certeza absoluta de que <strong>no son una carga, nos tienen a nosotros.</strong>
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
                    <h3 className="text-white text-2xl font-bold mb-3">Alcance de Vidas</h3>
                    <p className="text-slate-300 text-base leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                      Censo riguroso de beneficiarios activos en el piloto, garantizando apoyo sostenido mes a mes sin exclusiones.
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
                    <h3 className="text-white text-2xl font-bold mb-3">Nutrición Segura</h3>
                    <p className="text-slate-300 text-base leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                      Registro auditable de entregas de alimentos de alta calidad, previniendo malnutrición y debilitamiento severo.
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
                    <h3 className="text-white text-2xl font-bold mb-3">Kits de Dignidad</h3>
                    <p className="text-slate-300 text-base leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                      Distribución metódica de artículos de higiene personal. El aseo continuo previene infecciones y protege su dignidad.
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
                    <h3 className="text-white text-2xl font-bold mb-3">Continuidad Médica</h3>
                    <p className="text-slate-300 text-base leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                      Evitamos la interrupción de tratamientos críticos apoyando económicamente el copago de sus medicinas vitales.
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
                      "¡Celebrando 80 Años!",
                      "¡Sorpresa para María, 91 Años!",
                      "Tú nos importas"
                    ]}
                    interval={4500}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
                  <div className="absolute inset-0 p-8 sm:p-10 flex flex-col justify-end">
                    <div className="flex items-center gap-4 mb-4 transform group-hover:-translate-y-1 transition-transform duration-300">
                      <div className="bg-pink-500 text-white w-14 h-14 flex items-center justify-center rounded-2xl shadow-xl text-2xl">
                        🎂
                      </div>
                      <span className="bg-pink-500/20 text-pink-300 px-3 py-1 rounded-full font-bold tracking-widest uppercase text-xs border border-pink-500/30">Salud Mental Activa</span>
                    </div>
                    <h3 className="text-white text-3xl sm:text-4xl font-extrabold mb-4">Celebración por la Vida</h3>
                    <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-500">
                      <p className="text-slate-200 text-base sm:text-lg leading-relaxed font-medium">
                        Cortamos en seco la cadena de la depresión organizando <strong>Cumpleaños Colectivos</strong> mensuales. Queremos que sepan que más nunca apagarán las velas solos, porque no son una carga: son el tesoro más grande de nuestra comunidad y merecen sonreír todos los días.
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
                      "Gran Cena de Acción de Gracias",
                      "Creando Lazos Comunitarios",
                      "Hermosas Reuniones",
                      "Cenas Inolvidables",
                      "Festejando la Vida",
                      "¡Feliz Día de Las Madres!",
                      "Una Madre, Nuestro Tesoro",
                      "Rosas, Amor y Alegría"
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
                    <h3 className="text-white text-3xl sm:text-4xl font-extrabold mb-4">Eventos y Días Festivos</h3>
                    <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-500">
                      <p className="text-slate-200 text-base sm:text-lg leading-relaxed font-medium">
                        Desde el Día de las Madres y Padres hasta emotivas cenas por Thanksgiving. Fomentamos hermosos espacios físicos para reír, crear nuevas amistades entre vecinos y combatir agresivamente el deterioro cognitivo provocado por el aislamiento.
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
                    <h3 className="text-white text-2xl font-bold mb-3">Bienestar Reportado</h3>
                    <p className="text-slate-300 text-base leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                      Autorreportes periódicos cortos para medir científicamente la mejora humana percibida y ajustar el programa proactivamente.
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
                    <h3 className="text-white text-2xl font-bold mb-3">Tejido Voluntario</h3>
                    <p className="text-slate-300 text-base leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                      Construcción de una red de voluntarios empáticos, midiendo el enorme valor cálido y humano que inyectan en cada visita.
                    </p>
                  </div>
                </div>

              </div>

              {/* CARD RESUMEN Y BOTÓN */}
              <div className="mt-20 rounded-[2.5rem] border border-slate-200 bg-white p-8 sm:p-12 shadow-sm flex flex-col lg:flex-row items-center gap-12">
                <div className="flex-1">
                  <div className="text-sm font-bold text-emerald-600 tracking-widest uppercase mb-3">
                    Transparencia Total
                  </div>
                  <h3 className="text-3xl font-extrabold text-slate-900 mb-5">
                    Estructura del Ecosistema GYF
                  </h3>
                  <p className="text-lg text-slate-600 leading-relaxed mb-8">
                    Nuestros reportes de inversión social cruzan 3 ejes fundamentales: El <strong>Alcance Operativo</strong> (entregas físicas oportunas), la <strong>Calidad de Vida</strong> (nutrición y salud corporal), y el factor diferenciador, el <strong>Impacto Emocional</strong> (reducción de la soledad y protección de la salud mental social).
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <button
                      onClick={() => handleOpenFormModal('alianza')}
                      className="rounded-2xl bg-emerald-600 text-white px-8 py-4 text-lg font-bold hover:bg-emerald-700 transition shadow-lg hover:shadow-emerald-500/30"
                    >
                      Solicitar modelo de auditoría
                    </button>
                    <button
                      onClick={() => handleOpenModal(50)}
                      className="rounded-2xl bg-slate-900 text-white px-8 py-4 text-lg font-bold hover:bg-slate-800 transition shadow-lg"
                    >
                      Realizar donación
                    </button>
                  </div>
                </div>

                {/* Decoración visual derecha */}
                <div className="w-full lg:w-1/3 bg-slate-50 rounded-[2rem] p-8 border border-slate-100 shadow-inner">
                  <div className="grid gap-6">
                    <div className="flex items-center gap-4">
                      <div className="w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
                      <span className="text-base font-bold text-slate-700">Alcance: Metas Físicas</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                      <span className="text-base font-bold text-slate-700">Calidad: Intervención Médica</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-3 h-3 rounded-full bg-pink-500 shadow-[0_0_10px_rgba(236,72,153,0.5)]"></div>
                      <span className="text-base font-bold text-slate-700">Bienestar: Salud Mental y Redes</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </section>

          {/* POR QUÉ - GRANT READY PITCH DECK */}
          <section id="porque" className="relative bg-slate-900 overflow-hidden py-24 lg:py-32">
            {/* Decors: grid pattern and light spot */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDM5LjVMMzkuNSAwIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wNCkiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg==')] opacity-30"></div>
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-12 lg:gap-16 items-start">

                {/* Lado Izquierdo: Data y Contexto */}
                <div className="lg:col-span-7">
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6">
                    El Costo de la Inacción
                  </h2>
                  <p className="text-lg text-slate-300 leading-relaxed mb-4">
                    Miles de personas mayores en nuestra comunidad viven aisladas y bajo la línea de pobreza. Para ellos, la inflación no es una estadística; es elegir diariamente entre <strong>comer, comprar medicinas o pagar la renta.</strong>
                  </p>
                  <div className="border-l-4 border-amber-500 pl-4 py-1 mb-10">
                    <p className="text-amber-400 font-medium italic">
                      "Intervenciones simples y estructuradas reducen drásticamente emergencias hospitalarias y crisis depresivas severas."
                    </p>
                  </div>

                  {/* Impact Metrics Cards */}
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                    {/* Tarjeta 1 */}
                    <div className="bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-5 hover:bg-slate-800 transition-colors">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className="bg-emerald-500/20 text-emerald-400 p-2 rounded-lg">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                          </div>
                          <span className="text-white font-bold text-lg">Impacto en Salud</span>
                        </div>
                        <span className="text-emerald-400 font-bold text-sm bg-emerald-500/10 px-2 py-0.5 rounded">-45% Emergencias</span>
                      </div>
                      <p className="text-slate-400 text-sm">Garantizar medicinas y nutrición detiene el deterioro agudo previsible.</p>
                      <div className="mt-3 w-full bg-slate-700 rounded-full h-1.5">
                        <div className="bg-emerald-500 h-1.5 rounded-full" style={{ width: '85%' }}></div>
                      </div>
                    </div>

                    {/* Tarjeta 2 */}
                    <div className="bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-5 hover:bg-slate-800 transition-colors">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className="bg-blue-500/20 text-blue-400 p-2 rounded-lg">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                          </div>
                          <span className="text-white font-bold text-lg">Impacto Económico</span>
                        </div>
                        <span className="text-blue-400 font-bold text-sm bg-blue-500/10 px-2 py-0.5 rounded">Alto ROI</span>
                      </div>
                      <p className="text-slate-400 text-sm">El apoyo mensual es significativamente más barato que hospitalizaciones cubiertas por el sistema público por malnutrición o abandonos.</p>
                    </div>

                    {/* Tarjeta 3 */}
                    <div className="bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-5 hover:bg-slate-800 transition-colors">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className="bg-amber-500/20 text-amber-400 p-2 rounded-lg">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                          </div>
                          <span className="text-white font-bold text-lg">Tejido Social</span>
                        </div>
                      </div>
                      <p className="text-slate-400 text-sm">Mitigamos la soledad aguda mediante la entrega recurrente e instauramos un robusto sistema local de voluntariado intergeneracional.</p>
                    </div>
                  </div>
                </div>

                {/* Lado Derecho: La tarjeta GRANT-READY */}
                <div className="lg:col-span-5 mt-12 lg:mt-0 relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>

                  <div className="relative bg-white rounded-3xl p-8 shadow-2xl xl:p-10">
                    <div className="flex items-center justify-between mb-8">
                      <div className="text-xs font-black uppercase tracking-widest text-slate-400">
                        Evaluación de Inversión
                      </div>
                      <div className="flex items-center gap-1.5 bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full border border-emerald-100 shadow-sm">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                        <span className="text-xs font-bold leading-none">GRANT-READY</span>
                      </div>
                    </div>

                    <h3 className="text-2xl font-extrabold text-slate-900 mb-6">
                      ¿Por qué financiar el modelo GYF?
                    </h3>

                    <ul className="space-y-4 mb-8">
                      <li className="flex gap-3 text-slate-700">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mt-0.5">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                        </span>
                        <span className="font-medium">Identificación de riesgos verificada en edificios *Senior*.</span>
                      </li>
                      <li className="flex gap-3 text-slate-700">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mt-0.5">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                        </span>
                        <span className="font-medium">Logística centralizada de entrega que minimiza el coste directo.</span>
                      </li>
                      <li className="flex gap-3 text-slate-700">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mt-0.5">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                        </span>
                        <span className="font-medium">KPIS y seguimiento de bienestar documentado.</span>
                      </li>
                      <li className="flex gap-3 text-slate-700">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mt-0.5">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                        </span>
                        <span className="font-medium">Auditoría transparente de ejecución de fondos.</span>
                      </li>
                    </ul>

                    <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5 mb-8">
                      <div className="font-bold text-slate-900 mb-1">El Piloto Escalable</div>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Con capital inicial, este piloto asienta la base (SOPs) para ser exportado orgánicamente a cualquier condado del estado de Florida bajo la franquicia GYF.
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <button
                        onClick={() => handleOpenFormModal('alianza')}
                        className="flex-1 rounded-xl bg-slate-900 text-white px-4 py-3.5 font-bold hover:bg-slate-800 transition-colors flex justify-center items-center gap-2"
                      >
                        Invertir en la Misión
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* CÓMO AYUDAMOS */}
          <section id="ayuda" className="border-t bg-white">
            <div className="mx-auto max-w-6xl px-4 py-20">
              <div className="text-center">
                <h2 className="text-3xl font-extrabold tracking-tight">Cómo ayudamos</h2>
                <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
                  Ayudamos a adultos mayores que viven solos en Miami-Dade con alimentos,
                  asistencia para medicamentos y suministros de higiene para proteger su bienestar diario.
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
                          <span>Entregas periódicas y organizadas</span>
                        </li>
                        <li className="flex gap-3 items-start">
                          <span className="text-emerald-600 shrink-0">✓</span>
                          <span>Enfoque en continuidad y prevención</span>
                        </li>
                        <li className="flex gap-3 items-start">
                          <span className="text-emerald-600 shrink-0">✓</span>
                          <span>Seguimiento simple y medible</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* VISIÓN - DISEÑO TIPO GRANTS / MAJOR DONORS */}
          <section id="vision" className="relative bg-white py-24 lg:py-32 overflow-hidden border-t">
            {/* Elementos de fondo borrosos (Ambient lights) */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-emerald-50/50 blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-amber-50/50 blur-3xl pointer-events-none"></div>

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">

                {/* Contenido de Texto - Lado Izquierdo */}
                <div className="lg:col-span-6 lg:col-start-1 xl:col-span-5">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-sm font-bold tracking-wide uppercase mb-6 border border-emerald-100 shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    Visión y Compromiso
                  </div>

                  <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
                    El Modelo para un <br className="hidden sm:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">Futuro Digno</span>
                  </h2>

                  <p className="mt-6 text-lg text-slate-600 leading-relaxed font-medium">
                    Construimos una red comunitaria inquebrantable. Nuestro objetivo es que <strong>ningún adulto mayor</strong> vuelva a elegir entre comprar alimento o medicina. Diseñado para ofrecer <span className="text-emerald-700 font-bold bg-emerald-50/50 px-1 rounded">Retorno de Inversión Social (ROI)</span> inmediato y claro a nuestros patrocinadores.
                  </p>

                  <div className="mt-10 grid gap-5">
                    {/* Pilar 1 */}
                    <div className="group flex items-start gap-4 rounded-3xl border border-slate-100 bg-white p-5 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-emerald-200 transition-all duration-300">
                      <div className="shrink-0 flex items-center justify-center w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-inner">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">Restauramos la Dignidad</h4>
                        <p className="mt-1 text-sm text-slate-600 leading-snug">Garantizamos lo esencial mes a mes, devolviendo la paz mental a sus hogares y familias, previniendo crisis críticas.</p>
                      </div>
                    </div>

                    {/* Pilar 2 */}
                    <div className="group flex items-start gap-4 rounded-3xl border border-slate-100 bg-white p-5 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-blue-200 transition-all duration-300">
                      <div className="shrink-0 flex items-center justify-center w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-inner">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors">Transparencia Radical</h4>
                        <p className="mt-1 text-sm text-slate-600 leading-snug">Datos 100% auditables: Medimos y reportamos rigurosamente cada entrega y el impacto percibido mensualmente.</p>
                      </div>
                    </div>

                    {/* Pilar 3 */}
                    <div className="group flex items-start gap-4 rounded-3xl border border-slate-100 bg-white p-5 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-amber-200 transition-all duration-300">
                      <div className="shrink-0 flex items-center justify-center w-12 h-12 rounded-2xl bg-amber-100 text-amber-600 group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-white transition-all duration-300 shadow-inner">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-slate-900 group-hover:text-amber-600 transition-colors">Modelo Altamente Escalable</h4>
                        <p className="mt-1 text-sm text-slate-600 leading-snug">Piloto geolocalizado, estructurado tecnológicamente para ser un modelo replicable en otras comunidades del estado.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Fotografía de Alto Impacto & Caja Flotante - Lado Derecho */}
                <div className="lg:col-span-6 xl:col-span-7 mt-16 lg:mt-0 relative">
                  <div className="relative mx-auto w-full rounded-[2rem] shadow-2xl lg:max-w-md xl:max-w-lg lg:ml-auto overflow-hidden ring-1 ring-slate-900/10 isolate">
                    <img
                      src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                      alt="Voluntario sosteniendo cálidamente las manos de una adulta mayor sonriente apoyándola incondicionalmente"
                      className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-1000 ease-out"
                      style={{ aspectRatio: "4/5" }}
                    />
                    {/* Gradiente sutil para oscurecer la base de la imagen para contraste */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent z-10 pointer-events-none"></div>
                  </div>

                  {/* Tarjeta Flotante (Glassmorphism) con la Promesa */}
                  <div className="absolute -bottom-8 -left-4 sm:bottom-12 sm:-left-12 lg:bottom-16 lg:-left-20 bg-white/85 backdrop-blur-xl rounded-3xl p-6 sm:p-8 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.25)] ring-1 ring-white/50 max-w-xs sm:max-w-sm transform hover:-translate-y-2 transition-transform duration-500 z-20">
                    <div className="text-amber-500 mb-4 opacity-80">
                      <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true"><path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" /></svg>
                    </div>
                    <p className="text-lg font-bold text-slate-800 leading-relaxed">
                      "Crear una sonrisa y esperanza de vida en cada hogar que visitamos."
                    </p>
                    <div className="mt-5 flex items-center gap-3 border-t border-slate-200/80 pt-5">
                      <div className="h-11 w-11 shrink-0 rounded-full bg-slate-900 border-2 border-white flex items-center justify-center text-white font-black text-sm shadow-md ring-2 ring-emerald-500/20">
                        GYF
                      </div>
                      <div>
                        <div className="text-sm font-bold text-slate-900 leading-tight">Nuestra Promesa</div>
                        <div className="text-xs font-bold text-emerald-600 uppercase tracking-widest mt-0.5">La Fundación</div>
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
                  Operamos con coordinación comunitaria, seguimiento por edificio y reportes claros para
                  garantizar transparencia, eficiencia y continuidad del servicio.
                </p>
              </div>

              <div className="mt-12 grid md:grid-cols-3 gap-8">
                <div className="rounded-3xl border bg-slate-50 p-8">
                  <div className="text-emerald-700 font-bold text-sm">Fase 1</div>
                  <h3 className="mt-2 text-xl font-bold">Piloto (0–4 meses)</h3>
                  <p className="mt-4 text-slate-600">
                    En un edificio: identificación, primeras entregas, validación logística y métricas base.
                  </p>
                </div>

                <div className="rounded-3xl border bg-slate-50 p-8">
                  <div className="text-emerald-700 font-bold text-sm">Fase 2</div>
                  <h3 className="mt-2 text-xl font-bold">Escalamiento (4–8 meses)</h3>
                  <p className="mt-4 text-slate-600">
                    Expansión al segundo edificio con más capacidad operativa y alianzas.
                  </p>
                </div>

                <div className="rounded-3xl border bg-slate-50 p-8">
                  <div className="text-emerald-700 font-bold text-sm">Fase 3</div>
                  <h3 className="mt-2 text-xl font-bold">Cobertura (8–12 meses)</h3>
                  <p className="mt-4 text-slate-600">
                    Cobertura de los 3 edificios y preparación para replicación en otras comunidades.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* PILOTO */}
          <section id="piloto" className="border-t bg-slate-50">
            <div className="mx-auto max-w-6xl px-4 py-20 grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-extrabold tracking-tight">Proyecto Piloto</h2>
                <p className="mt-4 text-lg text-slate-600">
                  Fase inicial: un edificio residencial en Miami-Dade, con cobertura para 400–500 adultos mayores
                  que viven solos. Mediremos mensualmente entregas, necesidades y resultados de bienestar.
                </p>

                <div className="mt-8 grid gap-3">
                  <div className="rounded-2xl border bg-white p-4">
                    <div className="font-semibold">Logística eficiente</div>
                    <div className="text-slate-600">
                      Un punto concentrado reduce costos y maximiza alcance.
                    </div>
                  </div>
                  <div className="rounded-2xl border bg-white p-4">
                    <div className="font-semibold">Impacto medible</div>
                    <div className="text-slate-600">
                      Entregas registradas y bienestar reportado para transparencia.
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl bg-slate-900 text-white p-10 shadow-xl">
                <div className="text-sm text-white/70">Oportunidad para donadores y grants</div>
                <div className="mt-3 text-2xl font-extrabold leading-snug">
                  Financiar el piloto significa construir un modelo replicable para toda Florida.
                </div>
                <p className="mt-6 text-white/80">
                  Con recursos sostenidos, el piloto puede expandirse dentro del año operativo a los tres edificios.
                </p>
                <div className="mt-8">
                  <button
                    onClick={() => handleOpenModal(50)}
                    className="rounded-2xl bg-emerald-500 text-white px-5 py-3 font-semibold hover:bg-emerald-600"
                  >
                    Financiar este piloto
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* EXPANSION */}
          <section id="expansion" className="border-t bg-white">
            <div className="mx-auto max-w-6xl px-4 py-20">
              <div className="text-center">
                <h2 className="text-3xl font-extrabold tracking-tight">Expansión</h2>
                <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
                  Meta de crecimiento: ampliar el modelo a los tres edificios residenciales del complejo y alcanzar
                  entre 1,200 y 1,500 adultos mayores con apoyo continuo, manteniendo métricas y transparencia.
                </p>
              </div>

              <div className="mt-12 grid md:grid-cols-3 gap-8">
                <div className="rounded-3xl border bg-slate-50 p-8">
                  <h3 className="text-xl font-bold">Edificio 1</h3>
                  <p className="mt-4 text-slate-600">
                    400–500 residentes. Fase piloto para implementación, logística y medición.
                  </p>
                </div>

                <div className="rounded-3xl border bg-slate-50 p-8">
                  <h3 className="text-xl font-bold">Edificio 2</h3>
                  <p className="mt-4 text-slate-600">
                    Expansión tras estabilización operativa y fortalecimiento de alianzas.
                  </p>
                </div>

                <div className="rounded-3xl border bg-slate-50 p-8">
                  <h3 className="text-xl font-bold">Edificio 3</h3>
                  <p className="mt-4 text-slate-600">
                    Cobertura total del complejo y preparación para replicación estatal.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* DONAR Y GUARDIANES DORADOS */}
          <section id="donar" className="border-t bg-slate-50 relative overflow-hidden">
            {/* Elementos decorativos de fondo */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-amber-400/10 blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />

            <div className="mx-auto max-w-6xl px-4 py-24 relative z-10">
              <div className="text-center">
                <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-4 py-1.5 text-sm font-bold text-amber-700 mb-6">
                  <span className="text-lg">⭐</span> Programa de Donaciones Recurrentes
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
                  Conviértete en un <span className="text-amber-500">Guardián Dorado</span>
                </h2>
                <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                  Las fundaciones estables y el apoyo constante no se logran con donaciones únicas.
                  Dependemos de corazones generosos que se comprometen mes a mes para llevar nutrición,
                  medicinas y dignidad a quienes más lo necesitan.
                </p>
              </div>

              {/* NIVELES DE DONACIÓN (PRICING CARDS) */}
              <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                {/* Nivel 1 */}
                <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300 flex flex-col items-center text-center">
                  <div className="h-16 w-16 rounded-2xl bg-slate-50 flex items-center justify-center text-3xl mb-6 shadow-inner">
                    🌱
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Semilla de Apoyo</h3>
                  <div className="mt-4 flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-extrabold tracking-tight text-slate-900">$15</span>
                    <span className="text-sm font-semibold text-slate-500">/ mes</span>
                  </div>
                  <p className="mt-4 text-sm text-slate-600 font-medium">Apoyo continuo básico</p>
                  <p className="mt-2 text-xs text-slate-500 leading-relaxed min-h-[40px]">
                    Ayúdanos a cubrir necesidades logísticas constantes.
                  </p>
                  <div className="mt-8 w-full">
                    <button onClick={() => handleOpenModal(15)} className="block w-full rounded-2xl border-2 border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-900 hover:border-slate-300 hover:bg-slate-50 transition">
                      Unirme con $15
                    </button>
                  </div>
                </div>

                {/* Nivel 2 */}
                <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300 flex flex-col items-center text-center">
                  <div className="h-16 w-16 rounded-2xl bg-amber-50 flex items-center justify-center text-3xl mb-6 shadow-inner">
                    🍲
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Plato Caliente</h3>
                  <div className="mt-4 flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-extrabold tracking-tight text-slate-900">$25</span>
                    <span className="text-sm font-semibold text-slate-500">/ mes</span>
                  </div>
                  <p className="mt-4 text-sm text-slate-600 font-medium">1 semana de alimentos</p>
                  <p className="mt-2 text-xs text-slate-500 leading-relaxed min-h-[40px]">
                    Asegura la comida para un adulto mayor por una semana al mes.
                  </p>
                  <div className="mt-8 w-full">
                    <button onClick={() => handleOpenModal(25)} className="block w-full rounded-2xl border-2 border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-900 hover:border-slate-300 hover:bg-slate-50 transition">
                      Unirme con $25
                    </button>
                  </div>
                </div>

                {/* Nivel 3 - RECOMENDADO DA VIDA */}
                <div className="relative rounded-3xl border-2 border-emerald-500 bg-white p-8 shadow-xl hover:-translate-y-2 transition duration-300 flex flex-col items-center text-center transform lg:-translate-y-4">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide shadow-md whitespace-nowrap">
                    Impacto Clave
                  </div>
                  <div className="h-16 w-16 rounded-2xl bg-emerald-50 flex items-center justify-center text-3xl mb-6 shadow-inner">
                    💚
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Cuidado Integral</h3>
                  <div className="mt-4 flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-extrabold tracking-tight text-emerald-600">$50</span>
                    <span className="text-sm font-semibold text-slate-500">/ mes</span>
                  </div>
                  <p className="mt-4 text-sm text-emerald-700 font-bold">Alimentos + Higiene</p>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed min-h-[40px]">
                    Protege su nutrición y su dignidad con entregas combinadas.
                  </p>
                  <div className="mt-8 w-full">
                    <button onClick={() => handleOpenModal(50)} className="block w-full rounded-2xl bg-emerald-600 px-4 py-3 text-sm font-semibold text-white hover:bg-emerald-700 shadow-md transition">
                      Unirme con $50
                    </button>
                  </div>
                </div>

                {/* Nivel 4 */}
                <div className="rounded-3xl border border-slate-200 bg-slate-900 text-white p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300 flex flex-col items-center text-center">
                  <div className="h-16 w-16 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center text-3xl mb-6 shadow-inner">
                    👑
                  </div>
                  <h3 className="text-xl font-bold text-white">Guardián Patrocinador</h3>
                  <div className="mt-4 flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-extrabold tracking-tight text-amber-400">$100</span>
                    <span className="text-sm font-semibold text-slate-400">/ mes</span>
                  </div>
                  <p className="mt-4 text-sm text-amber-400 font-bold">Apadrina 1 adulto mayor</p>
                  <p className="mt-2 text-xs text-slate-400 leading-relaxed min-h-[40px]">
                    Cubre integralmente a una persona durante todo un mes continuo.
                  </p>
                  <div className="mt-8 w-full">
                    <button onClick={() => handleOpenModal(100)} className="block w-full rounded-2xl bg-amber-500 px-4 py-3 text-sm font-semibold text-slate-900 hover:bg-amber-400 transition">
                      Conviértete en Guardián
                    </button>
                  </div>
                </div>

              </div>

              {/* OTRAS FORMAS DE AYUDAR */}
              <div className="mt-24 text-center">
                <h3 className="text-2xl font-bold text-slate-900 mb-8">Elegir otro tipo de donación</h3>
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
                          <span className="text-xs font-semibold uppercase tracking-widest text-slate-400 opacity-60">Próximamente</span>
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
                          Aplicar / Registrar
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
                  <div className="text-sm font-bold text-slate-900">Donar ahora (Próximamente online)</div>
                  <p className="mt-2 text-sm text-slate-700">
                    Estamos integrando métodos de pago seguros rápidos como Stripe, PayPal y Zelle.
                    Mientras tanto, si decides apoyar, simplemente rellena el formulario de abajo y nos comunicaremos de inmediato para gestionarlo.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CONTACTO */}
          <section id="contacto" className="border-t bg-white">
            <div className="mx-auto max-w-6xl px-4 py-20 grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-extrabold tracking-tight">Contacto</h2>
                <p className="mt-4 text-lg text-slate-600">
                  Si deseas apoyar como donador, aplicar a grants con nosotros o coordinar alianzas,
                  escríbenos y te respondemos lo antes posible.
                </p>

                <div className="mt-8 grid gap-4 text-slate-700">
                  <div className="rounded-2xl bg-slate-50 p-4">
                    <div className="text-sm font-semibold">📍 Miami-Dade County, Florida</div>
                    <div className="text-sm text-slate-600 mt-1">
                      Proyecto piloto y expansión a tres edificios.
                    </div>
                  </div>
                  <div className="rounded-2xl bg-slate-50 p-4">
                    <div className="text-sm font-semibold">💬 WhatsApp</div>
                    <div className="text-sm text-slate-600 mt-1">
                      Usa el botón flotante para escribirnos directo.
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border bg-white p-8 shadow-sm">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert("¡Gracias! Recibimos tu mensaje. (Luego conectamos el formulario.)");
                  }}
                  className="grid gap-4"
                >
                  <label className="grid gap-2">
                    <span className="text-sm font-semibold">Nombre</span>
                    <input
                      className="border rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-200"
                      placeholder="Tu nombre"
                    />
                  </label>

                  <label className="grid gap-2">
                    <span className="text-sm font-semibold">Teléfono o email</span>
                    <input
                      className="border rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-200"
                      placeholder="Cómo te contactamos"
                    />
                  </label>

                  <label className="grid gap-2">
                    <span className="text-sm font-semibold">Mensaje</span>
                    <textarea
                      className="border rounded-2xl px-4 py-3 min-h-[140px] outline-none focus:ring-2 focus:ring-emerald-200"
                      placeholder="Cuéntanos si deseas donar, apoyar el piloto o hablar sobre grants…"
                    />
                  </label>

                  <button className="rounded-2xl bg-slate-900 text-white px-6 py-3 font-semibold hover:bg-slate-800">
                    Enviar
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
                Inicio
              </a>
              <button onClick={() => handleOpenModal(50)} className="hover:text-white text-left">
                Donar
              </button>
              <a href="#contacto" className="hover:text-white">
                Contacto
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
              <h3 className="text-xl font-extrabold text-slate-900">Ayudar a un Adulto Mayor</h3>
              <button
                onClick={handleCloseModal}
                className="text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full p-2 transition"
                aria-label="Cerrar modal"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto flex-1">
              <p className="text-sm text-slate-600 font-medium mb-4">
                Elige un nivel mensual para convertirte en <span className="text-amber-500 font-bold">Guardián Dorado</span>:
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
                  ) : "Otro Monto"}
                </button>
              </div>

              {/* Payment Methods */}
              <div className="mt-8 border-t pt-6">
                <p className="text-sm font-semibold text-slate-900 mb-4 text-center">
                  Continuar pago seguro usando:
                </p>
                <div className="space-y-3">
                  <button
                    onClick={() => alert('¡Gracias por tu interés! Próximamente activaremos Stripe Checkout para pagos con tarjeta.')}
                    className="w-full flex items-center justify-center gap-3 bg-slate-900 text-white hover:bg-slate-800 rounded-2xl py-4 font-semibold shadow-sm transition group"
                  >
                    <span className="text-xl group-hover:scale-110 transition">💳</span> Tarjeta de Crédito / Débito
                  </button>
                  <button
                    onClick={() => alert('¡Gracias por tu interés! Próximamente activaremos PayPal Checkout.')}
                    className="w-full flex items-center justify-center gap-3 bg-[#0070BA] text-white hover:bg-[#003087] rounded-2xl py-4 font-semibold shadow-sm transition group"
                  >
                    <span className="text-xl group-hover:scale-110 transition">🅿️</span> PayPal
                  </button>
                  <button
                    onClick={() => alert('Pagos con Zelle. Actualmente por favor envíanos un WhatsApp para darte el correo/teléfono correcto de la cuenta 501(c)(3) real. (Cierra esta ventana para ir al contacto)')}
                    className="w-full flex items-center justify-center gap-3 bg-[#6329A8] text-white hover:bg-[#4E2184] rounded-2xl py-4 font-semibold shadow-sm transition group"
                  >
                    <span className="text-xl group-hover:scale-110 transition">💸</span> Zelle
                  </button>
                </div>
              </div>

              <p className="mt-6 text-center flex items-center justify-center gap-1 text-xs text-slate-500 font-medium">
                🔒 Donación 100% deducible de impuestos (501c3)
              </p>
            </div>
          </div>
        </div>
      )}

      {/* FORMULARIOS MODAL (Especie, Voluntariado, Alianzas) */}
      {formModalType && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8 overflow-y-auto w-full h-full bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-2xl my-auto flex flex-col pointer-events-auto transform transition-all animate-in zoom-in-95 duration-200">
            {/* Header del Formulario */}
            <div className={`flex items-center justify-between px-6 pt-6 pb-4 border-b ${formModalType === 'voluntariado' ? 'bg-amber-50 rounded-t-3xl border-amber-100' :
              formModalType === 'alianza' ? 'bg-slate-50 rounded-t-3xl border-slate-200' :
                'bg-emerald-50 rounded-t-3xl border-emerald-100'
              }`}>
              <h3 className="text-xl font-extrabold text-slate-900 flex items-center gap-2">
                {formModalType === "donacion_especie" && "❤️ Registro de Donación en Especie"}
                {formModalType === "voluntariado" && "🤝 Entrevista de Voluntariado"}
                {formModalType === "alianza" && "🏢 Solicitud de Alianza Institucional"}
              </h3>
              <button
                onClick={handleCloseFormModal}
                className="text-slate-500 hover:text-slate-800 hover:bg-white rounded-full p-2 transition shadow-sm"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>
            </div>

            {/* Body Dinámico */}
            <div className="p-6 md:p-8 overflow-y-auto max-h-[75vh]">
              <form onSubmit={handleFormSubmit} className="grid gap-6">

                {/* ---------- FORMULARIO 1: DONACIÓN EN ESPECIE ---------- */}
                {formModalType === "donacion_especie" && (
                  <>
                    <p className="text-sm text-slate-600 mb-2">
                      Gracias por querer donar productos. Registra tu aporte para coordinar la logística de entrega de los suministros.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <label className="grid gap-2">
                        <span className="text-sm font-semibold">Nombre Completo *</span>
                        <input required className="border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-200" placeholder="Ej: Maria Gonzalez" />
                      </label>
                      <label className="grid gap-2">
                        <span className="text-sm font-semibold">Empresa / Entidad (Opcional)</span>
                        <input className="border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-200" placeholder="Si donas a nombre de empresa..." />
                      </label>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <label className="grid gap-2">
                        <span className="text-sm font-semibold">Email *</span>
                        <input type="email" required className="border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-200" placeholder="tu@correo.com" />
                      </label>
                      <label className="grid gap-2">
                        <span className="text-sm font-semibold">Teléfono / WhatsApp *</span>
                        <input type="tel" required className="border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-200" placeholder="+1 (305)..." />
                      </label>
                    </div>
                    <label className="grid gap-2">
                      <span className="text-sm font-semibold">¿Qué producto(s) deseas donar? *</span>
                      <select required className="border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-200 bg-white">
                        <option value="">Selecciona el tipo de producto...</option>
                        <option value="alimentos">Alimentos no perecederos (cajas, latas, granos)</option>
                        <option value="higiene">Productos de higiene personal (pañales, jabón)</option>
                        <option value="medicinas">Suplementos / Equipos médicos ligeros</option>
                        <option value="otros">Otros (Por favor especifica abajo)</option>
                      </select>
                    </label>
                    <label className="grid gap-2">
                      <span className="text-sm font-semibold">Detalles y Cantidad Aproximada *</span>
                      <textarea required className="border rounded-xl px-4 py-3 min-h-[100px] outline-none focus:ring-2 focus:ring-emerald-200" placeholder="Ej: 50 latas de atún, 5 paquetes de pañales talla G..." />
                    </label>
                  </>
                )}

                {/* ---------- FORMULARIO 2: VOLUNTARIADO ---------- */}
                {formModalType === "voluntariado" && (
                  <>
                    <p className="text-sm text-slate-600 mb-2">
                      Los voluntarios son el corazón de nuestra misión. Completa esta planilla para contactarte y realizarte una entrevista inicial.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <label className="grid gap-2">
                        <span className="text-sm font-semibold">Nombre Completo *</span>
                        <input required className="border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-amber-200" placeholder="Tu nombre" />
                      </label>
                      <label className="grid gap-2">
                        <span className="text-sm font-semibold">Edad</span>
                        <input type="number" min="18" className="border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-amber-200" placeholder="+18 años recom." />
                      </label>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <label className="grid gap-2">
                        <span className="text-sm font-semibold">Email *</span>
                        <input type="email" required className="border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-amber-200" placeholder="Correo electrónico" />
                      </label>
                      <label className="grid gap-2">
                        <span className="text-sm font-semibold">Teléfono / WhatsApp *</span>
                        <input type="tel" required className="border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-amber-200" placeholder="Tu teléfono" />
                      </label>
                    </div>

                    <div className="border border-slate-200 p-4 rounded-xl bg-slate-50">
                      <span className="text-sm font-semibold block mb-3">Disponibilidad de Días *</span>
                      <div className="flex flex-wrap gap-4">
                        {['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sáb/Dom'].map(dia => (
                          <label key={dia} className="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" className="w-4 h-4 text-amber-600 rounded" />
                            <span className="text-sm text-slate-700">{dia}</span>
                          </label>
                        ))}
                      </div>

                      <span className="text-sm font-semibold block mt-5 mb-3">Preferencia de Horarios *</span>
                      <div className="flex flex-wrap gap-4">
                        {['Mañana (9am-12pm)', 'Tarde (1pm-5pm)', 'Flexible'].map(hora => (
                          <label key={hora} className="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" className="w-4 h-4 text-amber-600 rounded" />
                            <span className="text-sm text-slate-700">{hora}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <label className="grid gap-2">
                      <span className="text-sm font-semibold">¿Por qué te gustaría ser voluntario? (Breve)</span>
                      <textarea className="border rounded-xl px-4 py-3 min-h-[80px] outline-none focus:ring-2 focus:ring-amber-200" placeholder="Cuéntanos un poco de ti..." />
                    </label>
                  </>
                )}

                {/* ---------- FORMULARIO 3: ALIANZAS ---------- */}
                {formModalType === "alianza" && (
                  <>
                    <p className="text-sm text-slate-600 mb-2">
                      Buscamos unir fuerzas con instituciones y empresas. Déjanos los datos de tu organización y te contactaremos.
                    </p>
                    <label className="grid gap-2">
                      <span className="text-sm font-semibold">Nombre de la Organización / Fundación / Empresa *</span>
                      <input required className="border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-slate-300" placeholder="Ej: Fundación Salud Global" />
                    </label>
                    <div className="grid md:grid-cols-2 gap-4">
                      <label className="grid gap-2">
                        <span className="text-sm font-semibold">Tipo de Entidad *</span>
                        <select required className="border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-slate-300 bg-white">
                          <option value="">Seleccionar...</option>
                          <option value="ong">Fundación / ONG (501c3 u otra)</option>
                          <option value="corporacion">Empresa Corporativa Privada</option>
                          <option value="gobierno">Entidad Gubernamental / Pública</option>
                          <option value="iglesia">Iglesia / Centro Religioso</option>
                          <option value="otro">Asociación Civil / Otro</option>
                        </select>
                      </label>
                      <label className="grid gap-2">
                        <span className="text-sm font-semibold">Sitio Web (Opcional)</span>
                        <input type="url" className="border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-slate-300" placeholder="https://" />
                      </label>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <label className="grid gap-2">
                        <span className="text-sm font-semibold">Persona de Contacto *</span>
                        <input required className="border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-slate-300" placeholder="Nombre completo" />
                      </label>
                      <label className="grid gap-2">
                        <span className="text-sm font-semibold">Email / Teléfono *</span>
                        <input required className="border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-slate-300" placeholder="Correo y número directo" />
                      </label>
                    </div>
                    <label className="grid gap-2">
                      <span className="text-sm font-semibold">¿A qué se dedica su organización? (Propósito) *</span>
                      <textarea required className="border rounded-xl px-4 py-3 min-h-[80px] outline-none focus:ring-2 focus:ring-slate-300" placeholder="Nuestra misión es..." />
                    </label>
                    <label className="grid gap-2">
                      <span className="text-sm font-semibold">Detalle: Interés o motivo de la alianza *</span>
                      <textarea required className="border rounded-xl px-4 py-3 min-h-[100px] outline-none focus:ring-2 focus:ring-slate-300" placeholder="Nos gustaría colaborar porque hemos visto sinergias... podríamos aportar..." />
                    </label>
                  </>
                )}

                <div className="mt-4 border-t pt-6 flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={handleCloseFormModal}
                    className="px-6 py-3 rounded-xl font-semibold text-slate-600 hover:bg-slate-100 transition"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className={`px-8 py-3 rounded-xl font-bold text-white shadow-md transition ${formModalType === 'voluntariado' ? 'bg-amber-600 hover:bg-amber-700' :
                      formModalType === 'alianza' ? 'bg-slate-900 hover:bg-slate-800' :
                        'bg-emerald-600 hover:bg-emerald-700'
                      }`}
                  >
                    Enviar Solicitud
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