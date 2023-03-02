import styled from 'styled-components';
import { spiderman } from '../../assets/characters';
import { sm } from '../../constants';

const ContainerWidth = '180px';
const ContainerHeight = '280px';

export const Container = styled.div`
  width: ${ContainerWidth};
  height: ${ContainerHeight};
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  user-select: none;
`;

export const Image = styled.div`
  width: ${ContainerWidth};
  height: ${ContainerHeight};
  background-image: ${({ image }) => (image ? `url(${image})` : `url(${spiderman})`)};
  background-position: ${({ imagePosition }) => (imagePosition ? imagePosition : `53%`)};
  background-size: cover;
  border-radius: 35px;
`;

export const Text = styled.div`
  position: absolute;
  bottom: 0;
  width: ${ContainerWidth};
  padding: 20px 0;
  border-radius: 35px;
  background: rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(12.5px);
  color: white;
  text-align: center;
  font-size: ${sm};
`;
