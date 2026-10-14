import React from 'react';
import { PageHero, Prose, CtaBand } from '../components/PageParts';
import { useSeo } from '../router';
import { ORG, fullAddress } from '../data/site';

export default function About() {
  useSeo({
    path: '/about',
    title: 'About Us | The Golden Years Foundation – Miami-Dade Senior Nonprofit',
    description: `Learn who we are: a 501(c)(3) nonprofit (EIN ${ORG.ein}) founded in Miami-Dade to fight senior isolation with food, medicine support, hygiene kits and companionship.`,
  });

  const values = [
    ['Dignity first', 'Every senior is treated as a person with a story, not a case number. We ask, we listen and we respect choices.'],
    ['Presence over handouts', 'A bag of groceries matters. A volunteer who knows your name and comes back next week matters even more.'],
    ['Transparency', 'We publish how donations are used, report our numbers and keep our EIN and nonprofit status visible.'],
    ['Community', 'We work alongside building managers, local businesses, faith groups and neighbors to multiply impact.'],
  ];

  return (
    <>
      <PageHero eyebrow="About Us" title="Neighbors caring for the generation that cared for us"
        subtitle="The Golden Years Foundation is a Miami-Dade nonprofit that brings food, medicine support, hygiene essentials and real human connection to seniors living alone."
        image="/images/events_gathering.webp" />

      <Prose>
        <h2 className="text-3xl font-extrabold text-slate-900">Our story</h2>
        <p>
          The Golden Years Foundation began in {ORG.founded} with a simple observation: in the senior housing buildings of Miami-Dade, many residents were going days
          without a visitor, skipping meals at the end of the month and stretching medications to make them last. Most of them had worked their whole lives,
          raised families and built this community. Many now lived alone, on fixed incomes, with no one checking on them.
        </p>
        <p>
          A small group of volunteers started knocking on doors in a single senior residential building. We brought groceries, sat down for coffee and listened.
          What we heard shaped everything we do today: seniors needed food and basic supplies, yes, but they also needed someone to celebrate their birthdays,
          help them understand a Medicare letter and remind them that they still matter.
        </p>
        <p>
          Today our pilot program serves a residential complex of roughly 400–500 seniors, with more than 2,400 deliveries of food, hygiene kits and medicine
          support completed by volunteers. Our goal is to expand to all three buildings in the complex — reaching 1,200 to 1,500 older adults — and then replicate
          the model across {ORG.county}.
        </p>

        <h2 className="text-3xl font-extrabold text-slate-900 pt-6">What makes us different</h2>
        <p>
          We work building by building. Instead of one-time distributions, we build ongoing relationships with the same residents week after week. That lets us
          notice when someone is losing weight, missing medication or becoming withdrawn — and act before a small problem becomes a hospital visit.
        </p>

        <h2 className="text-3xl font-extrabold text-slate-900 pt-6">Our values</h2>
        <div className="grid sm:grid-cols-2 gap-5 not-prose">
          {values.map(([t, d]) => (
            <div key={t} className="rounded-2xl border border-emerald-100 bg-emerald-50/50 p-6">
              <h3 className="font-extrabold text-emerald-800 text-xl mb-2">{t}</h3>
              <p className="text-base text-slate-700">{d}</p>
            </div>
          ))}
        </div>

        <h2 className="text-3xl font-extrabold text-slate-900 pt-6">Accountability</h2>
        <p>
          {ORG.name} is a registered {ORG.legalStatus}. Our Employer Identification Number (EIN) is <strong>{ORG.ein}</strong>. Contributions are tax-deductible
          to the extent allowed by law. We are based in {fullAddress()} and can be reached at <a className="text-emerald-700 underline" href={ORG.phoneLink}>{ORG.phone}</a> or{' '}
          <a className="text-emerald-700 underline" href={`mailto:${ORG.email}`}>{ORG.email}</a>.
        </p>
      </Prose>
      <CtaBand />
    </>
  );
}
