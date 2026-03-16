import React, { useState } from "react";
import WhatsAppFloatingButton from "./components/WhatsAppFloatingButton";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Impact from "./components/Impact";
import Metrics from "./components/Metrics";
import PitchDeck from "./components/PitchDeck";
import HowWeHelp from "./components/HowWeHelp";
import Vision from "./components/Vision";
import Plan from "./components/Plan";
import Pilot from "./components/Pilot";
import Expansion from "./components/Expansion";
import DonationSection from "./components/DonationSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import PaymentModal from "./components/Modals/PaymentModal";
import FormModal from "./components/Modals/FormModal";

export default function App() {
  // Payment Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState(50);
  const [isCustomAmount, setIsCustomAmount] = useState(false);
  const [customAmountValue, setCustomAmountValue] = useState("");

  // Form Modal State
  const [formModalType, setFormModalType] = useState(null); 

  // Payment Modal Handlers
  const handleOpenModal = (amount) => {
    setSelectedAmount(amount);
    setIsCustomAmount(amount === "other");
    setIsModalOpen(true);
  };
  const handleCloseModal = () => setIsModalOpen(false);

  // Form Modal Handlers
  const handleOpenFormModal = (type) => setFormModalType(type);
  const handleCloseFormModal = () => setFormModalType(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! We have successfully received your information. We will contact you very soon.");
    handleCloseFormModal();
  };

  return (
    <>
      <WhatsAppFloatingButton />

      <div className="min-h-screen bg-white text-slate-900">
        <Header onDonateClick={handleOpenModal} />

        <main>
          <Hero onDonateClick={handleOpenModal} />
          <Impact />
          <Metrics onFormModalOpen={handleOpenFormModal} onDonateClick={handleOpenModal} />
          <Testimonials onDonateClick={handleOpenModal} />
          <PitchDeck />
          <HowWeHelp />
          <Vision />
          <Plan />
          <Pilot onDonateClick={handleOpenModal} />
          <Expansion />
          <DonationSection onDonateClick={handleOpenModal} onFormModalOpen={handleOpenFormModal} />
          <Contact />
        </main>

        <Footer onDonateClick={handleOpenModal} />
      </div>

      <PaymentModal 
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        selectedAmount={selectedAmount}
        setSelectedAmount={setSelectedAmount}
        isCustomAmount={isCustomAmount}
        setIsCustomAmount={setIsCustomAmount}
        customAmountValue={customAmountValue}
        setCustomAmountValue={setCustomAmountValue}
      />

      <FormModal 
        type={formModalType}
        onClose={handleCloseFormModal}
        onSubmit={handleFormSubmit}
      />
    </>
  );
}
