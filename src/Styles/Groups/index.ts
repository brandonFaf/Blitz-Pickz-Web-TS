import styled from 'styled-components/macro';
import Colors from '../colors';
import { Header } from '../Header';
import { animated } from 'react-spring';
export const GroupsSlider = styled(animated.div)`
  position: fixed;
  top: 0;
  z-index: 70;
  width: 85vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas: 'header' 'guts' 'button';
  grid-template-rows: 75px 60vh 15vh;
  justify-content: center;
  justify-items: center;
  align-items: center;
  overflow: hidden;
  background-color: rgb(22, 51, 89);
  @media (min-width: 620px) {
    width: 25%;
    height: 100%;
  }
`;
export const GroupsSlidingHeader = styled(Header)`
  position: absolute;
  top: 0;
  background-color: transparent;
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const GroupSliderButtons = styled.div`
  grid-area: button;
  button {
    margin-bottom: 10px;
  }
  @media (min-width: 620px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 100%;
    a {
      width: 100%;
      display: flex;
      justify-content: center;
    }
  }
`;

export const GroupList = styled.div`
  display: grid;
  grid-area: guts;
  align-self: start;
  width: 100%;
  grid-row-gap: 20px;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  align-content: baseline;
  @media (min-width: 620px) {
    &::-webkit-scrollbar {
      width: 5px; /* width of the entire scrollbar */
    }
    &::-webkit-scrollbar-track {
      background: rgb(22, 51, 89); /* color of the tracking area */
    }
    &::-webkit-scrollbar-thumb {
      background-color: #6fe793; /* color of the scroll thumb */
      border-radius: 20px; /* roundness of the scroll thumb */
    }

    scrollbar-width: thin;
    scrollbar-color: #6fe793 rgb(22, 51, 89);
  }
`;
export const Group = styled.div`
  display: grid;
  grid-template-areas: 'active photo name' 'active photo name' 'active photo details' 'active photo .';
  grid-template-columns: 10% 45px 1fr;
  grid-template-rows: 8px 20px 12px 10px;
  grid-row-gap: 0;
  grid-column-gap: 20px;
`;
export const GroupPhoto = styled.div`
  grid-area: photo;
`;

export const GroupDetail = styled.div`
  display: grid;
  grid-area: details;
  font-size: 10px;
  grid-auto-flow: column;
  grid-auto-columns: max-content;
  grid-gap: 10px;
`;

export const GroupName = styled.div`
  grid-area: name;
  align-self: self-end;
  font-size: 15px;
  font-weight: 900;
  div {
    flex: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
export const LeaveButton = styled.div`
  background-color: ${Colors.wrong};
  width: 100px;
  height: 50px;
  display: grid;
  justify-content: center;
  align-items: center;
  font-size: 11px;
  color: #fff;
`;
export const LeaveGroupButton = styled.div`
  width: 20px;
  height: 20px;
  background-color: #e36655;
  color: #fff;
  font-size: 20px;
  border-radius: 90px;
  justify-self: end;
  align-self: center;
  grid-row: 2/4;
  text-align: center;
  line-height: 16px;
  font-weight: bold;
  grid-area: active;
`;
export const GroupActive = styled.div`
  background-color: ${Colors.highlight};
  height: 100%;
  width: 25%;
  border-radius: 0px 10px 10px 0px;
  grid-row: 1/-1;
`;
export const GroupFormError = styled.div`
  font-size: 12px;
  color: ${Colors.wrong};
  margin-top: -10px;
  padding-bottom: 10px;
`;

export const CreateGroupForm = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${Colors.background};
  height: 100vh;
  width: 100vw;
  /* z-index: 55; */
  margin-top: 75px;

  fieldset {
    border: none;
    width: 70vw;
  }
  @media (min-width: 620px) {
    width: 80%;
    height: 80%;
    fieldset {
      width: 50%;
    }
  }
`;
