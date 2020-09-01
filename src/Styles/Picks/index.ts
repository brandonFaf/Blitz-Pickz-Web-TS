import styled from 'styled-components/macro';
import Colors from '../colors';
export const GameSection = styled.div`
  width: 100%;
  @media (min-width: 620px) {
    width: 80%;
  }
`;
export const TitleRow = styled.div`
  display: grid;
  grid-template-columns: 28% 30% 28%;
  justify-content: center;
  justify-items: center;
  align-items: end;
  font-size: 11px;
  margin-top: 25px;

  .title {
    color: ${Colors.highlight};
  }
`;
