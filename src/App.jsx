import React, { Suspense, lazy, useState } from "react";
import WhatsAppFloatingButton from "./components/WhatsAppFloatingButton";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PaymentModal from "./components/Modals/PaymentModal";
import FormModal from "./components/Modals/FormModal";
import Home from "./pages/Home";
import { usePath, splitPath, useT, Link } from "./router";

// Secondary pages are code-split so the home page loads faster.
const routes = {
  "/about": lazy(() => import("./pages/About")),
  "/mission": lazy(() => import("./pages/Mission")),
  "/programs": lazy(() => import("./pages/Programs")),
  "/news": lazy(() => import("./pages/News")),
  "/volunteer": lazy(() => import("./pages/Volunteer")),
  "/contact": lazy(() => import("./pages/Contact")),
  "/donate": lazy(() => import("./pages/Donate")),
  "/request-help": lazy(() => import("./pages/RequestHelp")),
};

export default function App() {
  const { lang, route: path } = splitPath(usePath());
  const t = useT();

  // Payment Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState(50);
  const [isCustomAmount, setIsCustomAmount] = useState(false);
  const [customAmountValue, setCustomAmountValue] = useState("");

  // Form Modal State
  const [formModalType, setFormModalType] = useState(null);

  const handleOpenModal = (amount) => {
    setSelectedAmount(amount);
    setIsCustomAmount(amount === "other");
    setIsModalOpen(true);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const data = { ...Object.fromEntries(new FormData(e.target).entries()), language: lang === "es" ? "ES (Spanish)" : "EN" };
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: formModalType, data }),
      });
      if (response.ok) {
        alert(t("Thank you! We have received your information and will contact you very soon.", "¡Gracias! Hemos recibido su información y nos comunicaremos con usted muy pronto."));
        setFormModalType(null);
        e.target.reset();
      } else {
        alert(t("There was an error sending the information. Please call 786-442-5540.", "Hubo un error al enviar la información. Por favor llame al 786-442-5540."));
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert(t("Connection error. Please check your internet and try again.", "Error de conexión. Por favor revise su internet e inténtelo de nuevo."));
    }
  };

  const Page = routes[path];

  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:bg-white focus:px-4 focus:py-2 focus:rounded">
        {t("Skip to content", "Saltar al contenido")}
      </a>
      <WhatsAppFloatingButton />

      <div className="min-h-screen bg-white text-slate-900 flex flex-col">
        <Header />
        <main id="main" className="flex-1">
          {path === "/" ? (
            <Home onDonateClick={handleOpenModal} onFormModalOpen={setFormModalType} />
          ) : Page ? (
            <Suspense fallback={<div className="min-h-[60vh]" />}>
              <Page />
            </Suspense>
          ) : (
            <NotFound />
          )}
        </main>
        <Footer />
      </div>

      <PaymentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedAmount={selectedAmount}
        setSelectedAmount={setSelectedAmount}
        isCustomAmount={isCustomAmount}
        setIsCustomAmount={setIsCustomAmount}
        customAmountValue={customAmountValue}
        setCustomAmountValue={setCustomAmountValue}
      />
      <FormModal type={formModalType} onClose={() => setFormModalType(null)} onSubmit={handleFormSubmit} />
    </>
  );
}

function NotFound() {
  const t = useT();
  return (
    <section className="mx-auto max-w-xl px-4 py-32 text-center">
      <h1 className="text-4xl font-extrabold mb-4">{t("Page not found", "Página no encontrada")}</h1>
      <p className="text-slate-600 mb-8">{t("The page you are looking for does not exist.", "La página que busca no existe.")}</p>
      <Link to="/" className="rounded-xl px-6 py-3 font-bold text-white bg-emerald-600">{t("Go to Home", "Ir al inicio")}</Link>
    </section>
  );
}
