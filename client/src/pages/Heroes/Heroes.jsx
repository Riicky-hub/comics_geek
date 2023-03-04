import React, { useState, useEffect } from 'react';
import { Navbar, Footer, Character, SearchBar } from '../../components';
import { HeroesContainer, Container, InputContainer } from './styles';
import fetch from '../../api/marvel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
const Comics = () => {
  const [comics, setComics] = useState();
  const [order, setOrder] = useState('name');
  const [search, setSearch] = useState('');

  useEffect(() => {
    // order, limit, offset, type, search, startYear, months
    // PARA SETAR UM RANGE DE DATA USE: 'months='2023-01,2022-01''
    fetch(order, 20, false, 'characters', search, '').then((res) => {
      setComics(res.data.results);
    });
  }, [search, order]);

  if (comics === undefined) {
    return 'Waiting Data...';
  }
  const handleChangeOrder = (event) => {
    setOrder(event.target.value);
  };

  return (
    <>
      <Navbar />
      <Container>
        <div>
          <h3 style={{ paddingLeft: '7px' }}>Filtrar por</h3>
          <InputContainer>
            <div>
              <FormControl sx={{ m: 1, minWidth: 120 }} size='small'>
                <InputLabel id='demo-select-small'>Ordem</InputLabel>
                <Select
                  labelId='demo-select-small'
                  id='demo-select-small'
                  value={order}
                  label='Ordem'
                  onChange={handleChangeOrder}
                >
                  <MenuItem value='name'>
                    <em>A-Z</em>
                  </MenuItem>
                  <MenuItem value='modified'>Modificado</MenuItem>
                  <MenuItem value='-name'>Z-A</MenuItem>
                </Select>
              </FormControl>
            </div>
            <SearchBar func={setSearch} />
          </InputContainer>
        </div>
        <HeroesContainer>
          {comics.map((comic) => {
            return (
              <Character
                key={comic.id}
                name={comic.name}
                image={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                id={comic.id}
              />
            );
          })}
        </HeroesContainer>
      </Container>
      <Footer />
    </>
  );
};

export default Comics;
