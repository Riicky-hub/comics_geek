import React from 'react';
import { Navbar, Footer } from '../../components';
import { Hero, Latest, Characters } from '../../layouts';

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Latest />
      <Characters />
      <Footer />
    </div>
  );
};

export default Homepage;
