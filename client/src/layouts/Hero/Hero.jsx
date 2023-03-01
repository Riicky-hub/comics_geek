import React from 'react';
import { ComicsHero } from '../../components';
import {
  Container,
  BgImage,
  InfoContainer,
  InfoContainer__texts,
  ComicsContainer,
  ComicsContainer__texts,
} from './styles';
import Input from './Input/Input';
import { Button } from '../../globalStyles';

const Hero = () => {
  return (
    <BgImage>
      <Container>
        <InfoContainer>
          <InfoContainer__texts>
            <div>
              <h1>
                Todas comics da <span>Marvel</span> em um lugar
              </h1>
              <p>
                Bem-vindo a Brisanet Geek, sua loja especializada nos quadrinhos da Marvel. Você encontrará as comics
                dos seus hérois favoritos e os mais recentes lançamentos da Marvel studios.
              </p>
              <Input type='text' />
            </div>
            <figure>
              <blockquote>“Com grandes poderes, vem grandes responsibilidades”</blockquote>
              <figcaption>Benjamin Parker (Tio Ben)</figcaption>
            </figure>
          </InfoContainer__texts>
        </InfoContainer>
        <ComicsContainer>
          <div style={{ width: '235px' }}>
            <ComicsHero limit={20} order='-focDate' />
          </div>
          <ComicsContainer__texts>
            <h4>Lançamentos</h4>
            <p>
              Crie uma conta para comprar os quadrinhos originais da Marvel studios, ganhar descontos e ficar atenado
              por novas historias dos seus hérois. Veja a lista de últimos lançamentos ou pesquise pelo seu personagem
              favorito!
            </p>
            <Button>Ver mais</Button>
          </ComicsContainer__texts>
        </ComicsContainer>
      </Container>
    </BgImage>
  );
};

export default Hero;
