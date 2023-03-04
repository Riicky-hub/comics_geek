import React, { useState, useEffect } from 'react';
import { CircularProgress } from '@mui/material';
import { useParams } from 'react-router-dom';
import { Navbar, Footer } from '../../components';
import fetch, { fetchSingle } from '../../api/marvel';
import CircleIcon from '@mui/icons-material/Circle';
import { Comic } from '../../components';
import {
  Container,
  Content,
  Image,
  Title,
  Description,
  BuyBlock,
  ListDescription,
  BuyBlockInfo,
  BuyBlockButtons,
  ComicsContainer,
} from './styles';

const HeroDetails = () => {
  const { id } = useParams();
  const [comic, setComic] = useState();
  const [comics, setComics] = useState();
  useEffect(() => {
    fetchSingle('comic', id).then((res) => {
      setComic(res.data.results[0]);
    });
  }, [id]);
  useEffect(() => {
    // order, limit, offset, type, search, startYear, months
    // PARA SETAR UM RANGE DE DATA USE: 'months='2023-01,2022-01''
    fetch('focDate', 4, false, 'comics').then((res) => {
      setComics(res.data.results);
    });
  }, []);
  return (
    <div>
      <Navbar />
      <Container>
        {comic ? (
          <>
            <Title>{comic.series.name}</Title>
            <Content>
              <Content>
                <Image src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} />
                <Description>
                  <div>
                    <ListDescription>
                      <li>
                        <span>Páginas:</span>
                        {comic.pageCount}
                      </li>
                      <li>
                        <span>Data:</span>
                        {comic.dates[0].date.split('T')[0] || 'N/A'}
                      </li>
                      <li>
                        <span>Personagem:</span>
                        {typeof comic.characters.items[0] == 'undefined'
                          ? comic.series.name
                          : comic.characters.items[0].name}
                      </li>
                    </ListDescription>
                  </div>
                  <h3 style={{ padding: '20px 0' }}>Descrição</h3>
                  <p>{comic.description ? `${comic.description}` : 'N/A'}</p>
                </Description>
              </Content>
              <BuyBlock>
                <BuyBlockInfo>
                  <h2>{`${comic.prices[0].price}$`}</h2>
                  <p>
                    <CircleIcon />
                    Em estoque
                  </p>
                </BuyBlockInfo>
                <BuyBlockButtons>
                  <button>Adicionar ao carro</button>
                  <button>Comprar agora</button>
                </BuyBlockButtons>
              </BuyBlock>
            </Content>
          </>
        ) : (
          <CircularProgress />
        )}
        <h2 style={{ paddingTop: '20px', fontSize: '2rem', textAlign: 'center' }}>Mais quadrinhos</h2>
        <ComicsContainer>
          <Comic mode='product' imageWidth='220px' list={comics} />
        </ComicsContainer>
      </Container>
      <Footer />
    </div>
  );
};

export default HeroDetails;
