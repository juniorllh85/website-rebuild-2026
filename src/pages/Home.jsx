import React from 'react';
import Hero from '../components/Hero';
import Impact from '../components/Impact';
import Metrics from '../components/Metrics';
import HowWeHelp from '../components/HowWeHelp';
import Testimonials from '../components/Testimonials';
import Blog from '../components/Blog';
import DonationSection from '../components/DonationSection';
import { CtaBand } from '../components/PageParts';
import { useSeo, useT } from '../router';

export default function Home({ onDonateClick, onFormModalOpen }) {
  const t = useT();
  useSeo({
    path: '/',
    title: t('The Golden Years Foundation | Caring for Seniors in Miami-Dade', 'The Golden Years Foundation | Cuidando a los adultos mayores de Miami-Dade'),
    description: t('The Golden Years Foundation is a 501(c)(3) nonprofit (EIN 35-2905128) delivering food, medicine support, hygiene kits and companionship to isolated seniors in Miami-Dade, FL. Donate, volunteer or request help.', 'The Golden Years Foundation es una organización sin fines de lucro 501(c)(3) (EIN 35-2905128) que lleva alimentos, apoyo con medicamentos, kits de higiene y compañía a adultos mayores aislados en Miami-Dade, FL. Done, sea voluntario o solicite ayuda.'),
  });
  return (
    <>
      <Hero onDonateClick={onDonateClick} />
      <Impact />
      <HowWeHelp />
      <Metrics onFormModalOpen={onFormModalOpen} onDonateClick={onDonateClick} />
      <CtaBand />
      <Testimonials onDonateClick={onDonateClick} />
      <Blog limit={3} />
      <DonationSection onDonateClick={onDonateClick} onFormModalOpen={onFormModalOpen} />
    </>
  );
}
