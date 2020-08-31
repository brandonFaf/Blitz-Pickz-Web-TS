import React from 'react';
import { useHistory } from 'react-router-dom';
import WeekSlider from './WeekSlider';
import GamesList from './GamesList';
import styled from 'styled-components/macro';
import Colors from '../../Styles/colors';
import chevron from '../../img/Chevron.png';
import ActionButton from '../../Styles/Shared/ActionButton';
import useHeader from '../../hooks/useHeader';
import WeekStore from '../../contexts/WeekContext';
import useViewport from '../../hooks/useViewport';
import '../../Styles/scrollbars.css';
const Picks = () => {
  const { setPickHeader } = useHeader();
  const { isMobile } = useViewport();
  const history = useHistory();
  const close = () => {
    setPickHeader(null);
    history.push('/');
  };
  const guts = (
    <WeekStore>
      <JGP>
        {isMobile && (
          <ActionButton onClick={close} small data-testid={'close-picker'}>
            <img src={chevron} className='down' alt='chevron' />
          </ActionButton>
        )}
        <GamesList></GamesList>
      </JGP>
      <WeekSlider />
    </WeekStore>
  );
  return isMobile ? (
    guts
  ) : (
    <div
      className='picker-container'
      style={{ width: '100%', overflow: 'scroll' }}
    >
      {guts}
    </div>
  );
};
const JGP = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${Colors.background};
  height: 100%;
  width: 100%;
  z-index: 60;
`;
export default Picks;
