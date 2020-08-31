import styled from 'styled-components/macro';
import Colors from '../colors';

interface ActionButtonProps {
  small?: boolean;
  hollow?: boolean;
  red?: boolean;
}

const ActionButton = styled.button<ActionButtonProps>`
  width: ${props => (props.small ? '10vw' : '47vw')};
  display: flex;
  justify-content: space-around;
  justify-self: center;
  align-items: center;
  background-color: ${props =>
    props.hollow ? 'transparent' : props.red ? Colors.wrong : Colors.highlight};
  color: ${props =>
    props.hollow || props.red ? '#DBDBDB' : Colors.highlight_text};
  border-radius: ${props => (props.small ? '0 0 45px 45px' : '45px')};
  padding: 8px;
  z-index: 10;
  border: ${props => (props.hollow ? '1px solid #DBDBDB' : 'none')};
  font-size: 11px;
  font-weight: bold;
  text-transform: uppercase;
  a {
    text-decoration: none;
    cursor: pointer;
  }
  img {
    width: 8px;
  }
  img.down {
    transform: rotate(180deg);
  }
  span {
    font-size: 8px;
  }
  :focus {
    outline: none;
  }
  @media (min-width: 620px) {
    width: 47%;
  }
`;
export default ActionButton;
