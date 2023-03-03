import React, { useState, useEffect } from 'react';
import { Navbar, Footer, Comic, SearchBar } from '../../components';
import { ComicsContainer, Container, InputContainer } from './styles';
import fetch from '../../api/marvel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Comics = () => {
  let today = new Date().toISOString().slice(0, 10);
  const [comics, setComics] = useState();
  const [order, setOrder] = useState('-focDate');
  const [data, setData] = useState('');
  const [search, setSearch] = useState('');

  useEffect(() => {
    // order, limit, offset, type, search, startYear, months
    // PARA SETAR UM RANGE DE DATA USE: 'months='2023-01,2022-01''
    fetch(order, 16, false, false, search, '', data).then((res) => {
      setComics(res.data.results);
    });
  }, [order, data, search]);

  if (comics === undefined) {
    return 'Waiting Data...';
  }
  const handleChangeOrder = (event) => {
    setOrder(event.target.value);
  };
  const handleChangeDate = (event) => {
    setData(event.target.value);
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
                  <MenuItem value='-focDate'>
                    <em>Mais recente</em>
                  </MenuItem>
                  <MenuItem value='focDate'>Mais Antigo</MenuItem>
                  <MenuItem value='issueNumber'>Mais Vendidos</MenuItem>
                  <MenuItem value='title'>Titulo</MenuItem>
                  <MenuItem value='modified'>Modificado</MenuItem>
                </Select>
              </FormControl>

              <FormControl sx={{ m: 1, minWidth: 120 }} size='small'>
                <InputLabel id='select-date'>Ano</InputLabel>
                <Select labelId='select-date' id='select-date' value={data} label='Ano' onChange={handleChangeDate}>
                  <MenuItem value=''>
                    <em>Todos</em>
                  </MenuItem>
                  <MenuItem value={`2023-01,${today}`}>2023</MenuItem>
                  <MenuItem value={'2022-01-01,2023-01-01'}>2022</MenuItem>
                  <MenuItem value={'2021-01,2022-01'}>2021</MenuItem>
                  <MenuItem value={'2020-01,2021-01'}>2020</MenuItem>
                </Select>
              </FormControl>
            </div>
            <SearchBar func={setSearch} />
          </InputContainer>
        </div>
        <ComicsContainer>
          <Comic limit={16} mode='product' imageWidth='250px' list={comics} />
        </ComicsContainer>
      </Container>
      <Footer />
    </>
  );
};

export default Comics;
