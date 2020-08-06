import styled from 'styled-components/macro';
import Colors from '../colors';

export const Container = styled.div<{ active?: boolean | null }>`
  width: 90vw;
  background-color: ${({ active }) =>
    active == null || active === undefined
      ? Colors.lightBlue
      : active
      ? Colors.highlight
      : Colors.wrong};
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

export const TeamButton = styled.div<{ active?: boolean | null }>`
  border: none;
  display: flex;
  text-transform: uppercase;
  flex-basis: 35%;
  align-items: center;
  justify-content: center;
  align-content: center;
  background-color: ${({ active }) =>
    active == null || active === undefined
      ? Colors.lightBlue
      : active
      ? Colors.highlight
      : Colors.wrong};
  height: 100%;
  color: ${({ active }) =>
    active != null && active !== undefined
      ? Colors.highlight_text
      : Colors.lightBlue_text};
`;
export const MiddleButton = styled.div<{ active?: boolean | null }>`
  flex-basis: 30%;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  color: ${({ active }) =>
    active != null && active !== undefined
      ? Colors.highlight_text
      : Colors.lightBlue_text};
  font-size: 10px;
`;
