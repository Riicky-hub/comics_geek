import React, { useState, useEffect } from 'react';
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
import fetch from '../../api/marvel';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const goto = useNavigate();
  const [comics, setComics] = useState();
  useEffect(() => {
    // order, limit, offset, type, search, startYear, months
    // PARA SETAR UM RANGE DE DATA USE: 'monthStart='2023-01'' e 'monthEnd='2023-02''
    fetch('-focDate', 20, false, false, false, 2023).then((res) => {
      setComics(res.data.results);
    });
  }, []);
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
            <ComicsHero list={comics} />
          </div>
          <ComicsContainer__texts>
            <h4>Lançamentos</h4>
            <p>
              Crie uma conta para comprar os quadrinhos originais da Marvel studios, ganhar descontos e ficar atenado
              por novas historias dos seus hérois. Veja a lista de últimos lançamentos ou pesquise pelo seu personagem
              favorito!
            </p>
            <Button onClick={() => goto('/comics')}>Ver mais</Button>
          </ComicsContainer__texts>
        </ComicsContainer>
      </Container>
    </BgImage>
  );
};

export default Hero;
