import React from 'react';
import { GameSection, TitleRow } from '../../Styles/Picks';
import GameContainer from '../Game/GameContainer';

const GamesSkeleton = () => {
  const fakeGames = new Array(17).fill('1');

  return (
    <div style={{ height: '100vh', backgroundColor: 'red' }}>
      <GameSection data-testid={'in-progress'}>
        <TitleRow>
          <div></div>
          <div className='title'>Loading...</div>
          <div></div>
        </TitleRow>
        {fakeGames.map((g, i) => (
          <div key={i}>
            <GameContainer />
          </div>
        ))}
      </GameSection>
    </div>
  );
};

export default GamesSkeleton;
