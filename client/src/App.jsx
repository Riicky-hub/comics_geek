import React from 'react';
import { Heroes, HeroDetails, Homepage, Comics, ComicDetails } from './pages';
import { Routes, Route } from 'react-router-dom';
import GlobalStyles from './globalStyles';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path='/' exact element={<Homepage />} />
        <Route path='/comics' exact element={<Comics />} />
        <Route path='/comics/:id' exact element={<ComicDetails />} />
        <Route path='/heroes' exact element={<Heroes />} />
        <Route path='/heroes/:id' exact element={<HeroDetails />} />
      </Routes>
    </>
  );
};

export default App;
