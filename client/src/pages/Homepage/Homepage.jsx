import React from 'react';
import { Navbar } from '../../components';
import { Hero, Latest } from '../../layouts';

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Latest />
    </div>
  );
};

export default Homepage;
