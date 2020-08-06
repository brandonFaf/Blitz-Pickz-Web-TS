import React from 'react';
import { Game_DetailsFragment } from '../../types/graphql.types';
import useUser from '../../hooks/useUser';
import useToggleState from '../../hooks/useToggleState';
import { Container, TeamButton, MiddleButton } from '../../Styles/Game';
import getOrdinal from '../../helpers/getOrdinal';
import WhoPicked from './WhoPicked';
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
    winning_team
  } = game;
  const [showWhoPicked, toggleWhoPicked] = useToggleState(false);
  const howToHighlight = () => {
    const selectedId = userPick?.selected_id;
    if (winning_team) {
      return winning_team.id === selectedId;
    }
    return false;
  };
  const highlight = howToHighlight();

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
          // className={visHighlight && 'picked'}
          active={highlight}
        >
          <>
            <div> {vis_team.short_name.toUpperCase()}</div>
            {vis_score != null && <div>{vis_score}</div>}
          </>
        </TeamButton>
        <MiddleButton active={highlight}>{getMiddle()}</MiddleButton>
        <TeamButton
          data-testid={'home-pick-button'}
          // className={homeHighlight && 'picked'}
          active={highlight}
        >
          <>
            <div> {home_team.short_name.toUpperCase()}</div>
            {home_score != null && <div>{home_score}</div>}
          </>
        </TeamButton>
      </Container>
      <WhoPicked
        picks={game.picks}
        homeId={game.home_team.id}
        visId={game.vis_team.id}
        showWhoPicked={showWhoPicked}
      />
    </div>
  );
};

export default EndGame;
