import styled from 'styled-components';
import pattern from '../../assets/bg_pattern.png';

export const FooterContainer = styled.div`
  height: 250px;
  background: rgb(69,0,153);
  background: -moz-linear-gradient(0deg, rgba(69,0,153,1) 20%, rgba(123,0,245,1) 76%, rgba(41,1,26,0) 100%);
  background: -webkit-linear-gradient(0deg, rgba(69,0,153,1) 20%, rgba(123,0,245,1) 76%, rgba(41,1,26,0) 100%);
  background-image: url(${pattern}), linear-gradient(0deg, rgba(69,0,153,1) 20%, rgba(123,0,245,1) 76%, rgba(41,1,26,0) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#450099",endColorstr="#29011a",GradientType=1);
`;

export const FooterLogo = styled.img`
  width: 250px;
`;
