import React from 'react';
import { Game_DetailsFragment } from '../../types/graphql.types';
import { animated, useSpring } from 'react-spring';
import { GameSection, TitleRow } from '../../Styles/Picks';
import GameContainer from '../Game/GameContainer';
type props = {
  games: Array<Game_DetailsFragment>;
  title: string;
};
const GamesSection: React.FC<props> = ({ games, title }) => {
  const [gameAnimationProps, start] = useSpring(() => ({
    opacity: 0,
    config: {
      duration: 300
    }
  }));
  start({ opacity: 1, config: { duration: 300 } });

  return (
    <>
      {games.length > 0 && (
        <GameSection data-testid={'in-progress'}>
          <TitleRow>
            <div>AWAY</div>
            <div className='title'>{title}</div>
            <div>HOME</div>
          </TitleRow>
          {games.map(game => (
            <animated.div style={gameAnimationProps} key={game.id}>
              <GameContainer game={game} />
            </animated.div>
          ))}
        </GameSection>
      )}
    </>
  );
};

export default GamesSection;
