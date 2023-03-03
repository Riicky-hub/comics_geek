import styled from 'styled-components';
import { primary } from '../../constants';

export const Image = styled.img`
  width: ${({ imgWidth }) => (imgWidth ? imgWidth : '210px')};
  border-radius: 7px;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  user-select: none;
`;

export const ComicsGrid__text = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  p {
    color: #474747;
  }
  span {
    color: ${primary};
  }
`;

export const ComicTitle = styled.h5`
  font-size: ${({ titleSize }) => (titleSize ? titleSize : '1rem')};
`;
