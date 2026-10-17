import React from 'react';
import Blog from '../components/Blog';
import { PageHero, CtaBand } from '../components/PageParts';
import { useSeo, useT } from '../router';

export default function News() {
  const t = useT();
  useSeo({
    path: '/news',
    title: t('News & Updates | The Golden Years Foundation', 'Noticias y Novedades | The Golden Years Foundation'),
    description: t(
      'Stories, events, program updates and plain-language senior resources (Medicare, Social Security, hurricane preparedness) from The Golden Years Foundation in Miami-Dade.',
      'Historias, eventos, novedades de nuestros programas y guías sencillas para adultos mayores (Medicare, Seguro Social, preparación para huracanes) de The Golden Years Foundation en Miami-Dade.'
    ),
  });
  return (
    <>
      <PageHero eyebrow={t('News & Updates', 'Noticias y Novedades')} title={t('What’s happening at the foundation', 'Lo que está pasando en la fundación')}
        subtitle={t('Stories from our volunteers and seniors, program updates, and plain-language guides on benefits and resources.', 'Historias de nuestros voluntarios y adultos mayores, novedades de nuestros programas y guías sencillas sobre beneficios y recursos.')} />
      <Blog />
      <CtaBand />
    </>
  );
}
