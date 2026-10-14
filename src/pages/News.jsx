import React from 'react';
import Blog from '../components/Blog';
import NewsFeed from '../components/NewsFeed';
import { PageHero, CtaBand } from '../components/PageParts';
import { useSeo } from '../router';

export default function News() {
  useSeo({
    path: '/news',
    title: 'News & Updates | The Golden Years Foundation',
    description: 'Latest stories, events, program updates and senior resources (Medicare, Social Security, hurricane preparedness) from The Golden Years Foundation in Miami-Dade.',
  });
  return (
    <>
      <PageHero eyebrow="News & Updates" title="What’s happening at the foundation"
        subtitle="Stories from our volunteers and seniors, program updates, and plain-language guides on benefits and resources." />
      <Blog />
      <NewsFeed />
      <CtaBand />
    </>
  );
}
