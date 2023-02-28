import React from 'react';
import marvelLogo from '../../assets/marvel_logo.png';
import { FooterContainer, FooterLogo } from './styles';

const Footer = () => {
  return (
    <FooterContainer>
      <div>
        <FooterLogo src={marvelLogo} />
      </div>
      <div>
        <p>Heroi 1</p>
        <p>Heroi 2</p>
        <p>Heroi 3</p>
      </div>
      <div>
        <button>Explorar</button>
      </div>
    </FooterContainer>
  );
};

export default Footer;
