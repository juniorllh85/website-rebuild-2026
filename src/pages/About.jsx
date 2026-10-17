import React from 'react';
import { PageHero, Prose, CtaBand } from '../components/PageParts';
import { useSeo, useT, useLang } from '../router';
import { ORG, fullAddress } from '../data/site';

export default function About() {
  const t = useT();
  const lang = useLang();
  useSeo({
    path: '/about',
    title: t('About Us | The Golden Years Foundation – Miami-Dade Senior Nonprofit', 'Quiénes Somos | The Golden Years Foundation – Organización sin fines de lucro para adultos mayores en Miami-Dade'),
    description: t(
      `Learn who we are: a 501(c)(3) nonprofit (EIN ${ORG.ein}) founded in Miami-Dade to fight senior isolation with food, medicine support, hygiene kits and companionship.`,
      `Conozca quiénes somos: una organización sin fines de lucro 501(c)(3) (EIN ${ORG.ein}) fundada en Miami-Dade para combatir el aislamiento de los adultos mayores con alimentos, apoyo con medicamentos, kits de higiene y compañía.`
    ),
  });

  const values = [
    [t('Dignity first', 'La dignidad primero'), t('Every senior is treated as a person with a story, not a case number. We ask, we listen and we respect choices.', 'Cada adulto mayor es tratado como una persona con una historia, no como un número de caso. Preguntamos, escuchamos y respetamos sus decisiones.')],
    [t('Presence over handouts', 'Presencia, no solo ayuda'), t('A bag of groceries matters. A volunteer who knows your name and comes back next week matters even more.', 'Una bolsa de alimentos importa. Un voluntario que conoce su nombre y regresa la próxima semana importa todavía más.')],
    [t('Transparency', 'Transparencia'), t('We publish how donations are used, report our numbers and keep our EIN and nonprofit status visible.', 'Publicamos cómo se usan las donaciones, reportamos nuestras cifras y mantenemos visibles nuestro EIN y nuestro estatus de organización sin fines de lucro.')],
    [t('Community', 'Comunidad'), t('We work alongside building managers, local businesses, faith groups and neighbors to multiply impact.', 'Trabajamos junto a administradores de edificios, negocios locales, grupos religiosos y vecinos para multiplicar nuestro impacto.')],
  ];

  const phoneA = <a className="text-emerald-700 underline" href={ORG.phoneLink}>{ORG.phone}</a>;
  const emailA = <a className="text-emerald-700 underline" href={`mailto:${ORG.email}`}>{ORG.email}</a>;

  return (
    <>
      <PageHero eyebrow={t('About Us', 'Quiénes Somos')} title={t('Neighbors caring for the generation that cared for us', 'Vecinos cuidando a la generación que nos cuidó')}
        subtitle={t('The Golden Years Foundation is a Miami-Dade nonprofit that brings food, medicine support, hygiene essentials and real human connection to seniors living alone.', 'The Golden Years Foundation es una organización sin fines de lucro de Miami-Dade que lleva alimentos, apoyo con medicamentos, artículos de higiene y verdadera conexión humana a los adultos mayores que viven solos.')}
        image="/images/events_gathering.webp" />

      <Prose>
        <h2 className="text-3xl font-extrabold text-slate-900">{t('Our story', 'Nuestra historia')}</h2>
        <p>
          {t(
            `The Golden Years Foundation began in ${ORG.founded} with a simple observation: in the senior housing buildings of Miami-Dade, many residents were going days without a visitor, skipping meals at the end of the month and stretching medications to make them last. Most of them had worked their whole lives, raised families and built this community. Many now lived alone, on fixed incomes, with no one checking on them.`,
            `The Golden Years Foundation comenzó en ${ORG.founded} con una simple observación: en los edificios de vivienda para adultos mayores de Miami-Dade, muchos residentes pasaban días sin recibir una visita, se saltaban comidas a fin de mes y estiraban sus medicamentos para que les alcanzaran. La mayoría había trabajado toda su vida, criado a sus familias y construido esta comunidad. Muchos ahora vivían solos, con ingresos fijos y sin nadie que estuviera pendiente de ellos.`
          )}
        </p>
        <p>
          {t(
            'A small group of volunteers started knocking on doors in a single senior residential building. We brought groceries, sat down for coffee and listened. What we heard shaped everything we do today: seniors needed food and basic supplies, yes, but they also needed someone to celebrate their birthdays, help them understand a Medicare letter and remind them that they still matter.',
            'Un pequeño grupo de voluntarios comenzó a tocar puertas en un solo edificio residencial para adultos mayores. Llevamos alimentos, nos sentamos a tomar un cafecito y escuchamos. Lo que escuchamos dio forma a todo lo que hacemos hoy: los adultos mayores necesitaban comida y artículos básicos, sí, pero también necesitaban a alguien que celebrara sus cumpleaños, que les ayudara a entender una carta de Medicare y que les recordara que todavía importan.'
          )}
        </p>
        <p>
          {t(
            `Today we serve all three buildings of a senior residential complex, delivering food, hygiene kits and medicine support directly to each apartment door — so residents never have to travel to a food bank. Our volunteers have completed more than 2,400 deliveries. Our next goal is to replicate this door-to-door model across ${ORG.county}.`,
            `Hoy servimos a los tres edificios de un complejo residencial para adultos mayores, entregando alimentos, kits de higiene y apoyo con medicamentos directamente en la puerta de cada apartamento, para que los residentes nunca tengan que trasladarse a un banco de alimentos. Nuestros voluntarios han realizado más de 2,400 entregas. Nuestra próxima meta es replicar este modelo de puerta en puerta en todo ${ORG.county}.`
          )}
        </p>

        <h2 className="text-3xl font-extrabold text-slate-900 pt-6">{t('What makes us different', 'Lo que nos hace diferentes')}</h2>
        <p>
          {t(
            'We work building by building. Instead of one-time distributions, we build ongoing relationships with the same residents week after week. That lets us notice when someone is losing weight, missing medication or becoming withdrawn — and act before a small problem becomes a hospital visit.',
            'Trabajamos edificio por edificio. En lugar de repartos de una sola vez, construimos relaciones continuas con los mismos residentes semana tras semana. Eso nos permite notar cuando alguien está perdiendo peso, dejando de tomar sus medicamentos o aislándose, y actuar antes de que un pequeño problema termine en una visita al hospital.'
          )}
        </p>

        <h2 className="text-3xl font-extrabold text-slate-900 pt-6">{t('Our values', 'Nuestros valores')}</h2>
        <div className="grid sm:grid-cols-2 gap-5 not-prose">
          {values.map(([title, d]) => (
            <div key={title} className="rounded-2xl border border-emerald-100 bg-emerald-50/50 p-6">
              <h3 className="font-extrabold text-emerald-800 text-xl mb-2">{title}</h3>
              <p className="text-base text-slate-700">{d}</p>
            </div>
          ))}
        </div>

        <h2 className="text-3xl font-extrabold text-slate-900 pt-6">{t('Accountability', 'Rendición de cuentas')}</h2>
        {lang === 'es' ? (
          <p>
            {ORG.name} es una organización {ORG.legalStatus} registrada. Nuestro Número de Identificación del Empleador (EIN) es <strong>{ORG.ein}</strong>. Las contribuciones son
            deducibles de impuestos en la medida permitida por la ley. Estamos ubicados en {fullAddress()} y puede comunicarse con nosotros al {phoneA} o a{' '}
            {emailA}.
          </p>
        ) : (
          <p>
            {ORG.name} is a registered {ORG.legalStatus}. Our Employer Identification Number (EIN) is <strong>{ORG.ein}</strong>. Contributions are tax-deductible
            to the extent allowed by law. We are based in {fullAddress()} and can be reached at {phoneA} or{' '}
            {emailA}.
          </p>
        )}
      </Prose>
      <CtaBand />
    </>
  );
}
