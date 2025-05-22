import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import ResponsiveHero from '../components/layout/ResponsiveHero';
import PillarsSection from '../components/sections/PillarsSection';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Oleksiak Consult</title>
        <meta name="description" content="Expert business consulting services" />
      </Head>
      <ResponsiveHero />
      <PillarsSection />
    </>
  );
};

export default Home;