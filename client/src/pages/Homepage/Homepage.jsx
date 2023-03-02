import React from 'react';
import { Navbar } from '../../components';
import { Hero, Latest, Characters } from '../../layouts';

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Latest />
      <Characters />
    </div>
  );
};

export default Homepage;
