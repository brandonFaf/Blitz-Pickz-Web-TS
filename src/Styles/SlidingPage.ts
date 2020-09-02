import styled from 'styled-components';
import { animated } from 'react-spring';
import { Header } from './Header';
import Colors from './colors';
export const SlidingPage = styled(animated.div)`
  position: fixed;
  top: 0;
  z-index: 60;
  width: 85vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas: 'header' 'guts' 'button';
  grid-template-rows: 75px 60vh 15vh;
  justify-content: center;
  justify-items: center;
  background-color: rgba(22, 51, 89, 0.95);
  @media (min-width: 620px) {
    width: 25%;
    left: 75%;
    height: 100%;
  }
`;
export const OpenText = styled.div`
  color: ${Colors.highlight};
  display: flex;
  justify-content: flex-end;
  padding-right: 30px;
  padding-top: 30px;
`;
export const SlidingHeader = styled(Header)`
  justify-items: center;
  align-items: center;
  position: absolute;
  top: 0;
  background-color: transparent;
`;
