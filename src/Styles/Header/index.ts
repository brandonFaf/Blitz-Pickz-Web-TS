import styled from 'styled-components/macro';
import Colors from '../colors';
export const Header = styled.div`
  position: fixed;
  top: 0;
  flex-shrink: 0;
  height: 75px;
  display: grid;
  font-weight: bold;
  font-size: 15px;
  width: 100%;
  grid-template-columns: 70px 1fr 70px;
  justify-content: center;
  align-items: center;
  justify-items: center;
  text-transform: uppercase;
  opacity: 0.75;
  z-index: 56;
  backdrop-filter: blur(5px);
  background-color: ${Colors.background};
`;
export const HeaderGroupName = styled.div`
  font-size: 14px;
  text-align: center;
  color: ${Colors.highlight};
`;
