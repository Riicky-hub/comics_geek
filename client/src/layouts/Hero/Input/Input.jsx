import React from 'react';
import { StyledEngineProvider, CssVarsProvider } from '@mui/joy/styles';
import InputSubscription from './InputSubscription';

const Input = () => {
  return (
    <StyledEngineProvider injectFirst>
      <CssVarsProvider>
        <InputSubscription />
      </CssVarsProvider>
    </StyledEngineProvider>
  );
};

export default Input;
