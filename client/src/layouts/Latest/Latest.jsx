import React from 'react';
import { Container, Title, Comics } from './styles';
import { Comic } from '../../components';

const Latest = () => {
  return (
    <Container>
      <Title>
        <h2>Últimos Lançamentos</h2>
      </Title>
      <Comics>
        <Comic mode='product' limit={4} />
      </Comics>
      <div></div>
    </Container>
  );
};

export default Latest;
