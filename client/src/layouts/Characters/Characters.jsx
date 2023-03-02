import React from 'react';
import { Character } from '../../components';
import { spiderman, captainamerica, captainmarvel, ironman, wolverine } from '../../assets/characters';
import { ContainerCharacters, Title, Container } from './styles';

const Characters = () => {
  return (
    <Container>
      <Title>Personagens</Title>
      <ContainerCharacters>
        <Character image={spiderman} name='Spiderman' />
        <Character image={captainamerica} name='Captain America' position='46%' />
        <Character image={captainmarvel} name='Captain Marvel' position='49%' />
        <Character image={ironman} name='Iron-man' position='51%' />
        <Character image={wolverine} name='Wolverine' position='58%' />
      </ContainerCharacters>
    </Container>
  );
};

export default Characters;
