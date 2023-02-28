import { createGlobalStyle } from 'styled-components';
import mukta from './fonts/Mukta/Mukta-Light.ttf';
import labrada from './fonts/Labrada/Labrada-VariableFont_wght.ttf';

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

export default GlobalStyles;
