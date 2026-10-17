import React from 'react';
import { PageHero, Prose, CtaBand } from '../components/PageParts';
import { useSeo, useT, useLang, Link } from '../router';

export default function Mission() {
  const t = useT();
  const lang = useLang();
  useSeo({
    path: '/mission',
    title: t('Our Mission & Vision | The Golden Years Foundation', 'Nuestra Misión y Visión | The Golden Years Foundation'),
    description: t(
      'Our mission is to end loneliness, isolation and unmet basic needs among seniors in Miami-Dade through food security, medicine support, hygiene and companionship.',
      'Nuestra misión es acabar con la soledad, el aislamiento y las necesidades básicas insatisfechas de los adultos mayores en Miami-Dade mediante seguridad alimentaria, apoyo con medicamentos, higiene y compañía.'
    ),
  });

  const goals = [
    [t('Food security', 'Seguridad alimentaria'), t('No senior in our buildings goes hungry at the end of the month.', 'Ningún adulto mayor en nuestros edificios pasa hambre a fin de mes.')],
    [t('Health continuity', 'Continuidad en la salud'), t('Seniors keep taking their medications and understand their benefits.', 'Los adultos mayores siguen tomando sus medicamentos y entienden sus beneficios.')],
    [t('Dignity & hygiene', 'Dignidad e higiene'), t('Every resident has the basic personal care supplies they need.', 'Cada residente tiene los artículos básicos de cuidado personal que necesita.')],
    [t('Connection', 'Conexión'), t('Every senior has at least one person who checks on them every week.', 'Cada adulto mayor tiene al menos una persona que está pendiente de él o ella cada semana.')],
  ];

  return (
    <>
      <PageHero eyebrow={t('Mission', 'Misión')} title={t('No senior should grow old alone, hungry or forgotten', 'Ningún adulto mayor debería envejecer solo, con hambre u olvidado')}
        subtitle={t('We exist to rescue older adults in Miami-Dade from loneliness, isolation and unmet basic needs.', 'Existimos para rescatar a los adultos mayores de Miami-Dade de la soledad, el aislamiento y las necesidades básicas insatisfechas.')}
        image="/images/carmen_birthday.webp" />

      <Prose>
        <div className="rounded-3xl bg-slate-900 text-white p-8 not-prose">
          <p className="text-xs font-black uppercase tracking-widest text-emerald-400 mb-3">{t('Mission statement', 'Declaración de misión')}</p>
          <p className="text-2xl font-bold leading-snug">
            {t(
              'To improve the quality of life of low-income and isolated seniors in Miami-Dade County by delivering food, medicine support, hygiene essentials and consistent companionship — with dignity, respect and love.',
              'Mejorar la calidad de vida de los adultos mayores de bajos ingresos y aislados del condado de Miami-Dade, llevándoles alimentos, apoyo con medicamentos, artículos de higiene y compañía constante, con dignidad, respeto y amor.'
            )}
          </p>
        </div>

        <h2 className="text-3xl font-extrabold text-slate-900 pt-4">{t('Why it matters', 'Por qué es importante')}</h2>
        <p>
          {t(
            'Social isolation is not just sad — it is dangerous. Public health research links chronic loneliness in older adults to higher risks of depression, heart disease, dementia and early death. When isolation combines with a fixed income, seniors are often forced to choose between groceries, rent and prescriptions.',
            'El aislamiento social no solo es triste: es peligroso. Las investigaciones de salud pública relacionan la soledad crónica en los adultos mayores con mayores riesgos de depresión, enfermedades del corazón, demencia y muerte prematura. Cuando el aislamiento se combina con un ingreso fijo, los adultos mayores a menudo se ven obligados a elegir entre la comida, la renta y sus recetas médicas.'
          )}
        </p>
        <p>
          {t(
            'Miami-Dade is home to hundreds of thousands of people aged 65 and older, many of them immigrants living far from family, with limited English and limited access to transportation. They are often invisible to the systems designed to help them. Our mission is to make them visible again.',
            'Miami-Dade es el hogar de cientos de miles de personas de 65 años o más, muchas de ellas inmigrantes que viven lejos de su familia, con un inglés limitado y poco acceso a transporte. A menudo son invisibles para los sistemas diseñados para ayudarles. Nuestra misión es hacerlos visibles otra vez.'
          )}
        </p>

        <h2 className="text-3xl font-extrabold text-slate-900 pt-4">{t('Our vision', 'Nuestra visión')}</h2>
        <p>
          {t(
            'We envision a Miami-Dade where every senior building has a caring network around it: volunteers who know residents by name, local partners who supply food and essentials, and a foundation that coordinates it all transparently. We start with one complex, measure results carefully and scale what works.',
            'Soñamos con un Miami-Dade donde cada edificio de adultos mayores tenga a su alrededor una red de apoyo: voluntarios que conocen a los residentes por su nombre, aliados locales que aportan alimentos y artículos esenciales, y una fundación que lo coordina todo con transparencia. Comenzamos con un complejo, medimos los resultados con cuidado y ampliamos lo que funciona.'
          )}
        </p>

        <h2 className="text-3xl font-extrabold text-slate-900 pt-4">{t('The outcomes we work toward', 'Los resultados que buscamos')}</h2>
        <div className="grid sm:grid-cols-2 gap-5 not-prose">
          {goals.map(([title, d]) => (
            <div key={title} className="rounded-2xl border border-slate-200 p-6 shadow-sm">
              <h3 className="font-extrabold text-slate-900 text-xl mb-2">✔ {title}</h3>
              <p className="text-base text-slate-600">{d}</p>
            </div>
          ))}
        </div>

        <h2 className="text-3xl font-extrabold text-slate-900 pt-4">{t('How we measure success', 'Cómo medimos el éxito')}</h2>
        {lang === 'es' ? (
          <p>
            Registramos las entregas realizadas, el número de adultos mayores inscritos, las horas de voluntariado y breves chequeos de bienestar con los residentes. Estas cifras guían
            nuestras decisiones y se comparten con donantes y aliados en nuestras <Link to="/news" className="text-emerald-700 underline">noticias y novedades</Link>.
          </p>
        ) : (
          <p>
            We track deliveries completed, the number of seniors enrolled, volunteer hours, and simple wellbeing check-ins with residents. These numbers guide
            our decisions and are shared with donors and partners in our <Link to="/news" className="text-emerald-700 underline">news updates</Link>.
          </p>
        )}
      </Prose>
      <CtaBand />
    </>
  );
}
