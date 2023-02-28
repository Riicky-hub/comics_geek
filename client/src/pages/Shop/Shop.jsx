import React, { useState, useEffect } from 'react';
import { timeStamp, publicKey, hash } from '../../constants';
import { CircularProgress } from '@mui/material';
import { ContainerItems, Container } from './styles';
import { ShopItem, SearchBar, Navbar } from '../../components';
import axios from 'axios';

const Shop = () => {
  const [url, setUrl] = useState(
    `https://gateway.marvel.com:443/v1/public/characters?ts=${timeStamp}&apikey=${publicKey}&hash=${hash}`,
  );
  const [search, setSearch] = useState('');
  const [heroes, setHeroes] = useState();
  const searchText = () => {
    setUrl(
      `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${search}&ts=${timeStamp}&apikey=${publicKey}&hash=${hash}`,
    );
  };
  useEffect(() => {
    const fetchAll = async () => {
      const res = await axios.get(url).catch((err) => console.log(err));
      setHeroes(res.data.data.results);
    };
    fetchAll();
  }, [url]);
  return (
    <>
      <Navbar />
      <Container>
        <SearchBar searchKey={setSearch} event={searchText} id='search' />
        <ContainerItems id='display'>{!heroes ? <CircularProgress /> : <ShopItem data={heroes} />}</ContainerItems>
      </Container>
    </>
  );
};

export default Shop;
