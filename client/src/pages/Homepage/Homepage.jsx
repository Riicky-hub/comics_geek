import React from 'react';
import { Navbar, Footer } from '../../components';
import { Hero, Latest, CharactersHero } from '../../layouts';

const Homepage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Latest />
      <CharactersHero />
      <Footer />
    </>
  );
};

export default Homepage;
