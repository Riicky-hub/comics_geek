import React from 'react';
import logo from '../../assets/logo_mini.png';
import { useNavigate } from 'react-router-dom';
import { Logo, Container, LogoContainer, SocialMedia, ListContainer } from './styles';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = () => {
  let goto = useNavigate();
  return (
    <Container>
      <LogoContainer>
        <Logo onClick={() => goto('/')}>
          <img src={logo} />
          <h3>
            Brisanet <br /> Geek
          </h3>
        </Logo>
        <p>Copyright 2022 &copy; Brisanet Geek</p>
        <SocialMedia>
          <a href=''>
            <InstagramIcon />
          </a>
          <a href=''>
            <TwitterIcon />
          </a>
          <a href=''>
            <FacebookIcon />
          </a>
        </SocialMedia>
      </LogoContainer>
      <div>
        <ListContainer>
          <ul>
            <li>Menu</li>
            <li>
              <a href=''>Personagens</a>
            </li>
            <li>
              <a href=''>Quadrinhos</a>
            </li>
            <li>
              <a href=''>Eventos</a>
            </li>
          </ul>
          <ul>
            <li>Empresa</li>
            <li>
              <a href=''>Administração</a>
            </li>
            <li>
              <a href=''>Historia Nossa</a>
            </li>
            <li>
              <a href=''>Carreiras</a>
            </li>
          </ul>
          <ul>
            <li>Suporte</li>
            <li>
              <a href=''>Centro de Suporte</a>
            </li>
            <li>
              <a href=''>Transações</a>
            </li>
            <li>
              <a href=''>Entre em contato</a>
            </li>
          </ul>
        </ListContainer>
      </div>
    </Container>
  );
};

export default Footer;
