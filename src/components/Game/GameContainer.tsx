import React from 'react';
import { Game_DetailsFragment } from '../../types/graphql.types';
import Game from './index';
import EndGame from './EndGame';
import EmptyGame from './EmptyGame';

type Props = {
  game?: Game_DetailsFragment;
};

const GameContainer: React.FC<Props> = ({ game }) => {
  if (!game) {
    return <EmptyGame />;
  }
  return game.quarter ? <EndGame game={game} /> : <Game game={game} />;
};

export default GameContainer;
