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
export const DesktopHeader = styled.div`
  align-items: center;
  backdrop-filter: blur(5px);
  background-color: rgba(12, 29, 52);
  display: flex;
  font-size: 15px;
  font-weight: bold;
  height: 75px;
  justify-content: center;
  /* margin-bottom: -10px; */
  /* opacity: 0.75; */
  position: sticky;
  text-transform: uppercase;
  flex-shrink: 0;
  top: 0;
`;
export const HeaderGroupName = styled.div`
  font-size: 14px;
  text-align: center;
  color: ${Colors.highlight};
`;
