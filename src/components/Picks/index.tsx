import React, { useState } from 'react';
import getCurrentWeek from '../../helpers/currentWeek';
import { Link } from 'react-router-dom';
import WeekSlider from './WeekSlider';
import GamesList from './GamesList';
import styled from 'styled-components/macro';
import Colors from '../../Styles/colors';
import chevron from '../../img/Chevron.png';
import ActionButton from '../../Styles/Shared/ActionButton';
const Picks = () => {
  const [week, setWeek] = useState(getCurrentWeek());

  return (
    <>
      <JGP>
        <Link to='/'>
          <ActionButton small data-testid={'close-picker'}>
            <img src={chevron} className='down' alt='chevron' />
          </ActionButton>
        </Link>
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
