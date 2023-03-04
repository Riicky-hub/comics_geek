import React, { useState, useEffect } from 'react';
import { CircularProgress } from '@mui/material';
import { useParams } from 'react-router-dom';
import { Navbar, Footer, Comic } from '../../components';
import { fetchSingle } from '../../api/marvel';
import { Container, Image, Title, Content, Description, ComicsContainer } from './styles';

const HeroDetails = () => {
  const { id } = useParams();
  const [hero, setHero] = useState();
  const [comics, setComics] = useState();
  useEffect(() => {
    fetchSingle('character', id).then((res) => {
      setHero(res.data.results[0]);
    });
  }, [id]);
  useEffect(() => {
    fetchSingle('character', id, true, 12).then((res) => {
      setComics(res.data.results);
    });
  }, [id]);
  return (
    <div>
      <Navbar />
      <Container>
        {hero ? (
          <Content>
            <Title>{hero.name}</Title>
            <Image src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`} />
            <h3 style={{ padding: '20px 0' }}>Descrição</h3>
            <Description>{hero.description ? `${hero.description}` : 'N/A'}</Description>
          </Content>
        ) : (
          <CircularProgress />
        )}
        <h2 style={{ paddingTop: '20px', fontSize: '2rem', textAlign: 'center' }}>Comics</h2>
        <ComicsContainer>
          <Comic mode='product' imageWidth='220px' list={comics} />
        </ComicsContainer>
      </Container>
      <Footer />
    </div>
  );
};

export default HeroDetails;
