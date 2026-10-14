import React from 'react';
import Hero from '../components/Hero';
import Impact from '../components/Impact';
import Metrics from '../components/Metrics';
import HowWeHelp from '../components/HowWeHelp';
import Testimonials from '../components/Testimonials';
import Blog from '../components/Blog';
import DonationSection from '../components/DonationSection';
import { CtaBand } from '../components/PageParts';
import { useSeo } from '../router';

export default function Home({ onDonateClick, onFormModalOpen }) {
  useSeo({
    path: '/',
    title: 'The Golden Years Foundation | Caring for Seniors in Miami-Dade',
    description: 'The Golden Years Foundation is a 501(c)(3) nonprofit (EIN 35-2905128) delivering food, medicine support, hygiene kits and companionship to isolated seniors in Miami-Dade, FL. Donate, volunteer or request help.',
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
