export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <div className="font-bold text-xl">GYF</div>

          <nav className="flex gap-6 text-sm font-medium">
            <a href="#inicio" className="hover:text-blue-600">Inicio</a>
            <a href="#servicios" className="hover:text-blue-600">Servicios</a>
            <a href="#contacto" className="hover:text-blue-600">Contacto</a>
          </nav>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section id="inicio" className="bg-slate-50">
          <div className="mx-auto max-w-6xl px-4 py-24 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Construyendo el futuro digital de GYF
              </h1>

              <p className="mt-6 text-lg text-slate-600 max-w-xl">
                Soluciones digitales modernas, rápidas y optimizadas
                para hacer crecer tu negocio en internet.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a href="#contacto" className="bg-black text-white px-6 py-3 rounded-xl">
                  Empezar ahora
                </a>
                <a href="#servicios" className="border px-6 py-3 rounded-xl">
                  Ver Servicios
                </a>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="h-80 bg-gradient-to-br from-slate-800 to-slate-600 rounded-3xl shadow-xl" />
            </div>
          </div>
        </section>

        {/* SERVICIOS */}
        <section id="servicios" className="border-y">
          <div className="mx-auto max-w-6xl px-4 py-16">
            <h2 className="text-3xl font-bold">Servicios</h2>
            <p className="mt-3 text-slate-600 max-w-2xl">
              Una base inicial. Luego lo adaptamos exactamente a lo que ofrece GYF.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { title: "Diseño web moderno", desc: "Landing pages rápidas y enfocadas en conversión." },
                { title: "Optimización y SEO", desc: "Mejor rendimiento, estructura y posicionamiento." },
                { title: "Soporte y mejoras", desc: "Cambios, mantenimiento y evolución del sitio." },
              ].map((s) => (
                <div key={s.title} className="rounded-2xl border bg-white p-6 shadow-sm">
                  <h3 className="font-semibold text-lg">{s.title}</h3>
                  <p className="mt-2 text-slate-600">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACTO */}
        <section id="contacto" className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-3xl font-bold">Contacto</h2>
          <p className="mt-3 text-slate-600 max-w-2xl">
            Déjanos tus datos y te escribimos.
          </p>

          <form className="mt-8 grid gap-4 max-w-xl">
            <input className="border rounded-xl px-4 py-3" placeholder="Nombre" />
            <input className="border rounded-xl px-4 py-3" placeholder="Teléfono o Email" />
            <textarea className="border rounded-xl px-4 py-3 min-h-[120px]" placeholder="¿Qué necesitas?" />
            <button className="bg-black text-white rounded-xl px-6 py-3">
              Enviar
            </button>
          </form>
        </section>

        {/* FOOTER */}
        <footer className="border-t">
          <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-slate-600">
            © {new Date().getFullYear()} GYF. Todos los derechos reservados.
          </div>
        </footer>
      </main>
    </div>
  )
}