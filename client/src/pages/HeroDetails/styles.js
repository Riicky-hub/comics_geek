import styled from 'styled-components';

export const Image = styled.img`
  width: 230px;
  height: 280px;
  border-radius: 20px;
`;

export const Container = styled.div`
  width: 100%;
  padding: 20px 70px;
  margin: 0 auto;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const Title = styled.h1`
  padding: 10px 0;
`;

export const Description = styled.p`
  width: 60%;
`;

export const ComicsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 17px;
  padding: 30px 0 20px 0;
`;
