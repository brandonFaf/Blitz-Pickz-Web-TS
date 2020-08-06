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

const Picks = () => {
  const [week, setWeek] = useState(getCurrentWeek());
  const { setPickHeader } = useHeader();
  const history = useHistory();
  const close = () => {
    setPickHeader(null);
    history.push('/');
  };
  return (
    <>
      <JGP>
        <ActionButton onClick={close} small data-testid={'close-picker'}>
          <img src={chevron} className='down' alt='chevron' />
        </ActionButton>
        <GamesList week={week}></GamesList>
      </JGP>
      <WeekSlider week={week} setWeek={setWeek} />
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
