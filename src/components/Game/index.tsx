import React from 'react';
import {
  Game_DetailsFragment,
  useSavePickMutation,
  GetGamesForWeekDocument,
  PicksDocument
} from '../../types/graphql.types';
import moment from 'moment';
import 'moment-timezone';
import useUser from '../../hooks/useUser';
import useGroup from '../../hooks/useGroup';
import useWeek from '../../hooks/useWeek';
import {
  Container,
  TeamButton,
  MiddleButton,
  ErrorPicking
} from '../../Styles/Game';
type Props = {
  game: Game_DetailsFragment;
};
const Game: React.FC<Props> = ({ game }) => {
  const { user } = useUser();
  const { group } = useGroup();
  const { week } = useWeek();
  const userPick = game.picks?.find(p => p.user.id === user.id);
  const { vis_team, home_team, date, time } = game;
  const [savePickMutation, { error }] = useSavePickMutation({
    refetchQueries: [
      {
        query: GetGamesForWeekDocument,
        variables: { week: game.week, group_id: group?.id }
      },
      {
        query: PicksDocument,
        variables: { user_id: user.id, group_id: group?.id ?? 0, week }
      }
    ],
    onError: e => {
      console.log(e);
      //check if the error is validation of time and open drawer
      //show error else
    }
  });
  const estDate = moment.tz(
    `${date} ${time}`,
    'YYYY-MM-DD HH:mm:ss',
    'America/New_York'
  );
  const gameDate = estDate.tz(moment.tz.guess());
  const save = teamId => () => {
    savePickMutation({
      variables: {
        game_id: game.id,
        selected_id: teamId,
        group_id: group?.id,
        week
      }
    });
  };
  const howToHighlight = (teamId: number | null = null) => {
    const selectedId = userPick?.selected_id;
    return selectedId === teamId ? true : null;
  };
  const visHighlight = howToHighlight(vis_team.id);
  const homeHighlight = howToHighlight(home_team.id);
  return (
    <>
      <Container>
        <TeamButton
          active={visHighlight}
          data-testid={'vis-pick-button'}
          onClick={save(vis_team.id)}
        >
          {vis_team.short_name.toUpperCase()}
        </TeamButton>
        <MiddleButton>
          <div>{gameDate.format('ddd M/D')}</div>
          <div>{gameDate.format('h:mm A')}</div>
        </MiddleButton>
        <TeamButton
          active={homeHighlight}
          data-testid={'home-pick-button'}
          onClick={save(home_team.id)}
        >
          {home_team.short_name.toUpperCase()}
        </TeamButton>
      </Container>

      {error && (
        <ErrorPicking>
          This game has already started. Refresh the page and get the latest
          scores
        </ErrorPicking>
      )}
    </>
  );
};

export default Game;
