import React from 'react';
import Layout from './../components/Layout/Layout';
import MovingBanner from './MovingBanner';

const HomePage = () => {
  const updates = [
    'New investment opportunity available!',
    'Stock market update: S&P 500 hits all-time high.',
    'Cryptocurrency prices surge.',
    'Real estate market trends for 2024.'
  ];

  return (
    <Layout>
      <MovingBanner updates={updates} />
    </Layout>
  );
};

export default HomePage;
