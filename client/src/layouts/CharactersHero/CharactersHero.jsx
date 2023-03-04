import React from 'react';
import { Character } from '../../components';
import { spiderman, captainamerica, captainmarvel, ironman, wolverine } from '../../assets/characters';
import { ContainerCharacters, Title, Container } from './styles';

const Characters = () => {
  return (
    <Container>
      <Title>Personagens</Title>
      <ContainerCharacters>
        <Character image={spiderman} name='Spiderman' id='1009610' />
        <Character image={captainamerica} name='Captain America' position='46%' id='1009220' />
        <Character image={captainmarvel} name='Captain Marvel' position='49%' id='1010338' />
        <Character image={ironman} name='Iron-man' position='51%' id='1009368' />
        <Character image={wolverine} name='Wolverine' position='58%' id='1009718' />
      </ContainerCharacters>
    </Container>
  );
};

export default Characters;
