import styled from 'styled-components';
import { primary } from '../../constants';

export const Image = styled.img`
  width: 230px;
  height: 350px;
  border-radius: 20px;
`;

export const Container = styled.div`
  width: 100%;
  padding: 20px 70px;
  margin: 0 auto;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1.5;
`;

export const Title = styled.h1`
  padding: 10px 0;
  font-size: 1.4rem;
`;

export const Description = styled.div`
  width: 100%;
  padding-left: 30px;
`;

export const ListDescription = styled.ul`
  list-style: none;
  span {
    font-weight: bold;
    padding-right: 10px;
  }
`;

export const ComicsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 17px;
  padding: 30px 0 20px 0;
`;

export const BuyBlock = styled.div`
  width: 200px;
  height: 200px;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;

export const BuyBlockInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 20px;
  h2 {
    color: ${primary};
  }
  p {
    display: flex;
    align-items: center;
    svg {
      color: green;
      font-size: 1rem;
      padding-right: 5px;
    }
  }
`;

export const BuyBlockButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  button {
    width: 85%;
    border: none;
    border-radius: 11.5px;
    padding: 5px 0;
    font-size: 0.8rem;
    cursor: pointer;
    font-weight: bold;
    &:first-child {
      background-color: ${primary};
      margin-bottom: 5px;
      color: white;
    }
  }
`;
