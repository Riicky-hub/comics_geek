import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  padding: 20px 50px;
  margin: 0 auto;
  .search {
    align-items: flex-start;
  }
`;

export const ContainerItems = styled.div`
  flex: 2;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
`;
