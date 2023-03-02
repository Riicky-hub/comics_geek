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
  }
`;
