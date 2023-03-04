import React from 'react';
import { Image, Container, Text } from './styles';
import { useNavigate } from 'react-router-dom';
const Character = ({ image, name, position, id }) => {
  const goto = useNavigate();
  return (
    <Container onClick={() => goto(`/heroes/${id}`)}>
      <Image image={image} imagePosition={position} />
      <Text>
        <p>{name}</p>
      </Text>
    </Container>
  );
};

export default Character;
