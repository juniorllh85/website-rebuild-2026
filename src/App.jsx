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

  const handleFormSubmit = async (e, overrideType = null) => {
    e.preventDefault();
    const type = overrideType || formModalType;
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: type, data }),
      });

      if (response.ok) {
        alert("Thank you! We have successfully received your information. We will contact you very soon.");
        if (!overrideType) handleCloseFormModal();
        e.target.reset(); // Clear common form
      } else {
        alert("There was an error sending the information. Please try again or contact us via WhatsApp.");
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert("Connection error. Please check your internet and try again.");
    }
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
          <Contact onSubmit={handleFormSubmit} />
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
