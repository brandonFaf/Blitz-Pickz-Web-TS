import { Game_DetailsFragment } from '../types/graphql.types';

export default (game: Game_DetailsFragment) => {
  const picksForTeam = game.picks.reduce(
    (a, p) => (p.selected_id === game.home_team.id ? a + 1 : a),
    0
  );
  return picksForTeam === game.picks.length || picksForTeam === 0;
};
