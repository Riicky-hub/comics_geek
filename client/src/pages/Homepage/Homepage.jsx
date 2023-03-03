import React from 'react';
import { Navbar, Footer } from '../../components';
import { Hero, Latest, Characters } from '../../layouts';

const Homepage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Latest />
      <Characters />
      <Footer />
    </>
  );
};

export default Homepage;
