import styled from 'styled-components';
// import { bgNavbar } from '../../constants';

export const NavbarContainer = styled.div`
  display: flex;
  align-items: flex-start;
  background: rgb(41,1,26);
  background: -moz-linear-gradient(180deg, rgba(41,1,26,1) 65%, rgba(41,1,26,0) 90%);
  background: -webkit-linear-gradient(180deg, rgba(41,1,26,1) 65%, rgba(41,1,26,0) 90%);
  background: linear-gradient(180deg, rgba(41,1,26,1) 65%, rgba(41,1,26,0) 90%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#29011a",endColorstr="#29011a",GradientType=1);
  width: 100%;
  max-width: '1300px';
  padding: 0 50px;
  margin: 0 auto;
  height: 140px;
  h3, p, li {
    color: white
  }
`;

export const NavbarContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-top: 10px;
`;

export const NavbarLogo = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  img {
    width: 55px;
  }
  h3 {
    font-family: 'Labrada';
    line-height: 20px;
    letter-spacing: 0.15ch;
  }
`;

export const NavbarList = styled.div`
  min-width: 400px;
  width: 45%;
  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    li {
      cursor: pointer;
      display: flex;
      align-items: center;
      font-size: 1.15rem;
      svg {
        font-size: 2rem;
      }
    }
  }
`;
