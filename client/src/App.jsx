import React from 'react';
import { Heroes, Details, Homepage, Comics } from './pages';
import { Routes, Route } from 'react-router-dom';
import GlobalStyles from './globalStyles';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path='/' exact element={<Homepage />} />
        <Route path='/comics' exact element={<Comics />} />
        <Route path='/comics/:id' exact element={<Comics />} />
        <Route path='/heroes' exact element={<Heroes />} />
        <Route path='/heroes/:id' exact element={<Details />} />
      </Routes>
    </>
  );
};

export default App;
