import React from 'react';
import { Image, Container, Text } from './styles';
const Character = ({ image, name, position }) => {
  return (
    <Container>
      <Image image={image} imagePosition={position} />
      <Text>
        <p>{name}</p>
      </Text>
    </Container>
  );
};

export default Character;
