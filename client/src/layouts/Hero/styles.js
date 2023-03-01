import styled from 'styled-components';
import bg_comics from '../../assets/bg_comics.jpg';
import { lg, md, sm, primary } from '../../constants';

export const Container = styled.div`
  display: flex;
  height: 570px;
  width: 100%;
  max-width: '1300px';
  padding: 20px 50px;
  margin: 0 auto;
  justify-content: space-between;
  background: rgba(0, 0, 0, 0.8);
  color: white;
`;

export const BgImage = styled.div`
  background-image: url(${bg_comics});
  background-position: center;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
`;

export const InfoContainer__texts = styled.div`
  height: 95%;
  width: 70%;
  max-width: 460px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h1 {
    font-size: ${lg};
    line-height: 50px;
    font-weight: bold;
    margin-top: 10px;
    span {
      color: ${primary};
    }
  }
  p {
    font-size: ${sm};
    padding: 27px 0 30px 0;
  }
  figcaption {
    font-size: ${sm};
    font-weight: bold;
  }
  blockquote {
    font-size: ${md};
    line-height: 30px;
    font-weight: bold;
    font-style: italic;
    padding-bottom: 10px;
  }
`;

export const ComicsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 650px;
`;

export const ComicsContainer__texts = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 80px;
  h4 {
    font-size: ${md};
    font-weight: bold;
  }
  p {
    font-size: ${sm};
    padding: 25px 0 30px 0;
  }
`;
