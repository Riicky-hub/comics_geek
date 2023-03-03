import React, { useState, useEffect } from 'react';
import { Navbar, Footer, Filter, Comic } from '../../components';
import { ComicsContainer, Container, PaginationContainer } from './styles';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import fetch from '../../api/marvel';

const Comics = () => {
  const [comics, setComics] = useState();
  const [total, setTotal] = useState();
  useEffect(() => {
    // order, limit, offset, type, search, startYear, monthStart, monthEnd
    // PARA SETAR UM RANGE DE DATA USE: 'monthStart='2023-01'' e 'monthEnd='2023-02''
    fetch('focDate', 16, false, false, false, 2023).then((res) => {
      setComics(res.data.results);
      setTotal(res.data.total);
    });
  }, []);
  if (comics === undefined) {
    return 'Waiting Data...';
  }
  return (
    <>
      <Navbar />
      <Container>
        <div>
          <Filter />
        </div>
        <ComicsContainer>
          <Comic limit={16} mode='product' imageWidth='250px' list={comics} />
        </ComicsContainer>
      </Container>
      <PaginationContainer>
        <Stack spacing={2}>
          <Pagination count={total} variant='outlined' shape='rounded' />
        </Stack>
      </PaginationContainer>
      <Footer />
    </>
  );
};

export default Comics;
