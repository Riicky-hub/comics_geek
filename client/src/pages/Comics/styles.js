import styled from 'styled-components';

export const ComicsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-gap: 17px;
  padding: 30px 0 20px 0;
`;
export const Container = styled.div`
  width: 100%;
  padding: 20px 70px;
  margin: 0 auto;
`;
export const PaginationContainer = styled.div`
  padding-bottom: 40px;
  display: flex;
  justify-content: space-around;
`;
