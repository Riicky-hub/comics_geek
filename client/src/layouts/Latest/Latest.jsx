import React from 'react';
import { Comic } from '../../components';
import { month1, month2, month3 } from '../../assets/latest';
import { Container, Title, Comics, MonthContainer, Image, ImageContainer, ImageIcon } from './styles';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

const Latest = () => {
  return (
    <Container>
      <Title>
        <h2>Últimos Lançamentos</h2>
      </Title>
      <Comics>
        <Comic mode='product' limit={4} />
      </Comics>
      <MonthContainer>
        <ImageContainer>
          <Image src={month1} alt='Dezembro' />
          <h3>Dezembro 2022</h3>
          <ImageIcon>
            <ArrowOutwardIcon />
          </ImageIcon>
        </ImageContainer>
        <ImageContainer>
          <Image src={month2} alt='Janeiro' />
          <h3>Janeiro 2023</h3>
          <ImageIcon>
            <ArrowOutwardIcon />
          </ImageIcon>
        </ImageContainer>
        <ImageContainer>
          <Image src={month3} alt='Fevereiro' />
          <h3>Fevereiro 2023</h3>
          <ImageIcon>
            <ArrowOutwardIcon />
          </ImageIcon>
        </ImageContainer>
      </MonthContainer>
    </Container>
  );
};

export default Latest;
