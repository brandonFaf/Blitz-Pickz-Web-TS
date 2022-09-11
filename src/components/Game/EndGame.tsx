import React from 'react';
import { Game_DetailsFragment } from '../../types/graphql.types';
import useUser from '../../hooks/useUser';
import useToggleState from '../../hooks/useToggleState';
import { Container, TeamButton, MiddleButton } from '../../Styles/Game';
import getOrdinal from '../../helpers/getOrdinal';
import WhoPicked from './WhoPicked';
import arePicksAllTheSame from '../../helpers/arePicksAllTheSame';

type Props = {
  game: Game_DetailsFragment;
};
const EndGame: React.FC<Props> = ({ game }) => {
  const { user } = useUser();
  const userPick = game.picks?.find(p => p.user.id === user.id);
  const {
    vis_team,
    home_team,
    vis_score,
    home_score,
    quarter,
    time_remaning,
    winning_team,
  } = game;
  const [showWhoPicked, toggleWhoPicked] = useToggleState(false);
  const howToHighlight = (teamId?: number) => {
    const selectedId = userPick?.selected_id;
    if (winning_team) {
      return winning_team.id === selectedId;
    }
    if (!selectedId) {
      return false;
    }
    if (teamId) {
      return selectedId === teamId ? true : null;
    }

    return null;
  };
  const allSame = arePicksAllTheSame(game);
  const middleHighlight = howToHighlight();
  const visHighlight = howToHighlight(vis_team.id);
  const homeHighlight = howToHighlight(home_team.id);

  const getMiddle = () => {
    if (winning_team) {
      const selectedId = userPick?.selected_id;
      if (winning_team.id === selectedId) {
        return (
          <>
            <div>&#10004;</div>
            <div>RIGHT</div>
          </>
        );
      } else {
        return (
          <>
            <div>X</div>
            <div>WRONG</div>
          </>
        );
      }
    }
    return (
      <>
        <div>{getOrdinal(quarter ?? 1)} Quarter</div>
        <div>{time_remaning}</div>
      </>
    );
  };
  return (
    <div className='container'>
      <Container onClick={toggleWhoPicked}>
        <TeamButton
          data-testid={'vis-pick-button'}
          allSame={allSame}
          active={visHighlight}
        >
          <>
            <div> {vis_team.short_name.toUpperCase()}</div>
            {vis_score != null && <div>{vis_score}</div>}
          </>
        </TeamButton>
        <MiddleButton allSame={allSame} active={middleHighlight}>
          {getMiddle()}
        </MiddleButton>
        <TeamButton
          data-testid={'home-pick-button'}
          allSame={allSame}
          active={homeHighlight}
        >
          <>
            <div> {home_team.short_name.toUpperCase()}</div>
            {home_score != null && <div>{home_score}</div>}
          </>
        </TeamButton>
      </Container>
      {showWhoPicked && (
        <WhoPicked
          picks={game.picks}
          homeId={game.home_team.id}
          visId={game.vis_team.id}
        />
      )}
    </div>
  );
};

export default EndGame;
