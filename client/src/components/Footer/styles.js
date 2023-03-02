import styled from 'styled-components';
import { second } from '../../constants';

export const Container = styled.div`
  width: 100%;
  padding: 0 50px 40px 50px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    padding: 15px 0;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  img {
    width: 70px;
  }
  h3 {
    font-family: 'Labrada';
    line-height: 20px;
    letter-spacing: 0.15ch;
    font-size: 1.3rem;
  }
`;

export const SocialMedia = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  a {
    color: black;
  }
  svg {
    font-size: 35px;
  }
`;

export const ListContainer = styled.div`
  display: flex;
  justify-content: space-around;
  ul {
    list-style: none;
    padding-left: 40px;
  }
  a {
    text-decoration: none;
    color: ${second};
    transition: all 0.5s ease-in-out;
    &:hover {
      color: black;
    }
  }
  li {
    padding-top: 8px;
    &:first-child {
      color: black;
      font-weight: bold;
      padding: 0;
    }
  }
`;
