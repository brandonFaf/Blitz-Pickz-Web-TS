import styled from 'styled-components/macro';
import Colors from '../colors';
const WeekSlider = styled.div`
  position: sticky;
  bottom: 0;
  color: #fff;
  text-align: center;
  display: grid;
  width: 20vw;
  overflow: auto;
  height: 65px;
  padding: 0 40vw;
  grid-template-columns: repeat(19, 20vw);
  background-color: ${Colors.lightBlue};
  align-items: center;
  z-index: 12;
  box-shadow: 0px -14px 16px 0px rgba(0, 0, 0, 0.7);
  font-size: 20px;

  .current {
    color: ${Colors.highlight};
  }
  .active {
    color: ${Colors.highlight_text};
    background-color: ${Colors.highlight};
    border-radius: 45px;
    padding: 5px 0;
    div {
      font-size: 9px;
      line-height: 92.1%;
      font-family: Roboto;
      font-style: normal;
    }
  }
`;
export default WeekSlider;
