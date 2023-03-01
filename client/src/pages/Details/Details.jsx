import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { publicKey } from '../../constants';
import { CircularProgress } from '@mui/material';
import { Image } from './styles';

const Details = () => {
  // http://gateway.marvel.com/v1/public/characters/${id}?apikey=${publicKey}
  const { id } = useParams();
  const [hero, setHero] = useState();
  const fetch = async () => {
    if (!hero) {
      const res = await axios
        .get(`https://gateway.marvel.com:443/v1/public/characters/${id}?apikey=${publicKey}`)
        .catch((err) => console.log(err));
      setHero(res.data.data.results[0]);
    }
  };
  fetch();
  return hero ? (
    <div>
      <Image src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`} />
      <h1>{hero.name}</h1>
      <p>{hero.description ? `${hero.description}` : 'N/A'}</p>
    </div>
  ) : (
    <CircularProgress />
  );
};

export default Details;
