import styled from 'styled-components';
import { lg } from '../../constants';

export const Container = styled.div`
  padding: 40px 0;
`;

export const Title = styled.h2`
  font-size: ${lg};
  text-align: center;
`;

export const ContainerCharacters = styled.div`
  display: flex;
  justify-content: space-around;
  width: 95%;
  padding: 40px 50px 20px 50px;
  margin: 0 auto;
`;
