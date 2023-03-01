import styled, { createGlobalStyle } from 'styled-components';
import mukta from './fonts/Mukta/Mukta-Light.ttf';
import labrada from './fonts/Labrada/Labrada-VariableFont_wght.ttf';
import { primary } from './constants';

const GlobalStyles = createGlobalStyle`
// FONTS
  @font-face {
    font-family: 'Mukta';
    src: local('Mukta-Light'), url(${mukta}) format('TrueType');
    font-weight: 300;
    font-style: normal;
  }
  @font-face {
    font-family: 'Labrada';
    src: local('Labrada'), url(${labrada}) format('TrueType');
    font-weight: 400;
    font-style: normal;
  }
// GLOBAL STYLES
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: 'Mukta';
  }
  body {
    background-color: gray;
  }
  input,
  textarea,
  button,
  select,
  a {
      -webkit-tap-highlight-color: transparent;
  }
`;

export const Button = styled.button`
  padding: 5px 20px;
  border: none;
  border-radius: 20px;
  background-color: ${primary};
  color: white;
  font-weight: bold;
  transition: all 0.5s ease-in-out;
  cursor: pointer;
  font-size: 0.9rem;
  &:hover {
    background-color: #EE171F;
  }
`;

export default GlobalStyles;
