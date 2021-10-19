import styled from 'styled-components/macro';
import Colors from '../colors';
const getColor = ({ active, allSame }) => {
  if (active == null) {
    return allSame ? Colors.dimBlue : Colors.lightBlue;
  } else {
    if (active) {
      return allSame ? Colors.dimHighlight : Colors.highlight;
    } else {
      return allSame ? Colors.dimWrong : Colors.wrong;
    }
  }
};
export const Container = styled.div<{
  active?: boolean | null;
  allSame?: boolean;
}>`
  min-width: 90%;
  //@ts-ignore
  background-color: ${getColor};
  flex-direction: row;
  justify-content: center;
  height: 75px;
  align-items: center;
  margin-top: 25px;
  font-size: 13px;
  display: flex;
`;

export const TeamName = styled.div`
  font-weight: normal;
`;

export const TeamButton = styled.div<{
  active?: boolean | null;
  allSame: boolean | null;
}>`
  border: none;
  display: flex;
  text-transform: uppercase;
  flex-basis: 35%;
  align-items: center;
  justify-content: center;
  align-content: center;
  //@ts-ignore
  background-color: ${getColor};
  height: 100%;
  color: ${({ active }) =>
    active != null && active !== undefined
      ? Colors.highlight_text
      : Colors.lightBlue_text};
  flex-direction: column;
  text-align: center;
`;
export const MiddleButton = styled(TeamButton)`
  flex-basis: 30%;
  font-size: 10px;
`;
export const ErrorPicking = styled.div`
  width: 80vw;
  padding-top: 10px;
  color: ${Colors.wrong};
  font-size: 12px;
`;
