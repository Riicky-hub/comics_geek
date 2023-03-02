import styled from 'styled-components';
import { lg } from '../../constants';

export const Container = styled.div`
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const Title = styled.div`
  text-align: center;
  h2 {
    font-size: ${lg};
    font-weight: bold;
  }
`;

export const Comics = styled.div`
  padding: 30px 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(1, 1fr);
  grid-gap: 32px;
  h5 {
    font-size: 1rem;
    line-height: 12px;
    cursor: pointer;
  }
`;

export const MonthContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 30px 0;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  user-select: none;
`;

export const ImageContainer = styled.div`
  position: relative;
  padding: 0 20px;
  color: black;
  h3 {
    color: white;
    position: absolute;
    bottom: 20px;
    left: 40px;
    font-size: 24px;
  }
`;

export const ImageIcon = styled.div`
  position: absolute;
  bottom: 20px;
  right: 40px;
  width: 35px;
  height: 35px;
  border-radius: 20px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
`;

export const Image = styled.img`
  width: 290px;
  cursor: pointer;
  z-index: -2;
`;
