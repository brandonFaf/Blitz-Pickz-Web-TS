import React, { useState } from 'react';
import getCurrentWeek from '../../helpers/currentWeek';
import { useHistory } from 'react-router-dom';
import WeekSlider from './WeekSlider';
import GamesList from './GamesList';
import styled from 'styled-components/macro';
import Colors from '../../Styles/colors';
import chevron from '../../img/Chevron.png';
import ActionButton from '../../Styles/Shared/ActionButton';
import useHeader from '../../hooks/useHeader';
import WeekStore from '../../contexts/WeekContext';

const Picks = () => {
  const { setPickHeader } = useHeader();
  const history = useHistory();
  const close = () => {
    setPickHeader(null);
    history.push('/');
  };
  return (
    <>
      <WeekStore>
        <JGP>
          <ActionButton onClick={close} small data-testid={'close-picker'}>
            <img src={chevron} className='down' alt='chevron' />
          </ActionButton>
          <GamesList></GamesList>
        </JGP>
        <WeekSlider />
      </WeekStore>
    </>
  );
};
const JGP = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${Colors.background};
  height: 100%;
  width: 100vw;
  z-index: 60;
`;
export default Picks;
