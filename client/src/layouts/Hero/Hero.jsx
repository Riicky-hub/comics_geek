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
                All <span>Marvel</span> Comics in one place
              </h1>
              <p>
                Welcome to Super-Heroes Shop specialized in Marvel Comics. You will find in the shelves of our shop all
                your favorite super heroes: Spider-Man, Iron Man, Avengers, X-men, Fanstastic 4...
              </p>
              <Input type='text' />
            </div>
            <figure>
              <blockquote>“With great power comes great responsibility”</blockquote>
              <figcaption>Benjamin Parker (aka Uncle Ben)</figcaption>
            </figure>
          </InfoContainer__texts>
        </InfoContainer>
        <ComicsContainer>
          <div style={{ width: '235px' }}>
            <ComicsHero limit={4} order='-focDate' />
          </div>
          <ComicsContainer__texts>
            <h4>Avengers Univers</h4>
            <p>
              Dernier round pour déterminer qui parmi les Avengers sera le nouvel hôte du Phénix, dans les deux derniers
              chapitres de la saga Voici le Phénix ! Et un Donald Blake devenu fou affronte Jane Foster, son ancien
              amour, devenue Valkyrie !
            </p>
            <Button>Ver mais</Button>
          </ComicsContainer__texts>
        </ComicsContainer>
      </Container>
    </BgImage>
  );
};

export default Hero;
