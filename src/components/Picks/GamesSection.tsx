import React from 'react';
import { Game_DetailsFragment } from '../../types/graphql.types';
import { animated, useSpring } from 'react-spring';
import { GameSection, TitleRow } from '../../Styles/Picks';
import GameContainer from '../Game/GameContainer';
import styled from 'styled-components/macro';

const Container = styled(animated.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  width: 100%;
  .container {
    width: 90%;
  }
`;
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
  const sortedGames = [...games].sort((a, b) => {
    const first = new Date(a.date + ' ' + a.time.substr(0, 8));
    const second = new Date(b.date + ' ' + b.time.substr(0, 8));
    //@ts-ignore
    return first - second || b.id - a.id;
  });
  return (
    <>
      {games.length > 0 && (
        <GameSection data-testid={'in-progress'}>
          <TitleRow>
            <div>AWAY</div>
            <div className='title'>{title}</div>
            <div>HOME</div>
          </TitleRow>
          {sortedGames.map(game => (
            <Container style={gameAnimationProps} key={game.id}>
              <GameContainer game={game} />
            </Container>
          ))}
        </GameSection>
      )}
    </>
  );
};

export default GamesSection;
