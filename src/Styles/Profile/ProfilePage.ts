import styled from 'styled-components/macro';
import Edit from '../../img/Edit.svg';
import Colors from '../../Styles/colors';

export const EditLabel = styled.label`
  background-image: url(${Edit});
  height: 20px;
  width: 20px;
  margin-left: -20px;
  float: right;
  background-repeat: no-repeat;
  background-size: contain;
  position: relative;
  top: 130px;
  z-index: 20;
`;
export const ErrorLabel = styled.label`
  color: red;
`;

export const ProfileForm = styled.form`
  display: grid;
  grid-area: guts;
  grid-template-columns: 1fr;
  grid-template-rows: 20vh 35vh 5vh;
  align-items: center;
  justify-content: center;
  justify-items: center;
  background-color: ${(props: { side: boolean }) =>
    props.side ? 'transparent' : Colors.background};
  width: 100%;
  fieldset {
    border: none;
    align-self: baseline;
  }
`;
