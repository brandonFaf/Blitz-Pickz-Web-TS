import React from 'react';
import {
  useGetGamesForWeekQuery,
  GetGamesForWeekQuery
} from '../../types/graphql.types';
import useGroup from '../../hooks/useGroup';
import useUser from '../../hooks/useUser';
import GameSection from './GamesSection';
import GamesSkeleton from './GamesSkeleton';

const GamesList = ({ week }) => {
  const { group } = useGroup();
  const { user } = useUser();

  const { data, loading, error } = useGetGamesForWeekQuery({
    variables: { week, group_id: group?.id ?? 1 }
  });
  useGetGamesForWeekQuery({
    variables: { week: week + 1, group_id: group?.id ?? 1 }
  });
  useGetGamesForWeekQuery({
    variables: { week: week - 1, group_id: group?.id ?? 1 }
  });

  if (loading) {
    return <GamesSkeleton />;
  }
  if (error) {
    return <div>Error: {JSON.stringify(error, null, 2)}</div>;
  }
  const getPickCount = (d: GetGamesForWeekQuery) => {
    const reduceFunc = (acc, g) =>
      g.picks.find(p => p.user.id === user.id) ? acc + 1 : acc;
    let total = d.inProgressGames.reduce(reduceFunc, 0);
    total += d.upcomingGames.reduce(reduceFunc, 0);
    total += d.completedGames.reduce(reduceFunc, 0);
    return total;
  };
  const getGameCount = (d: GetGamesForWeekQuery) => {
    let total = d.inProgressGames.length;
    total += d.upcomingGames.length;
    total += d.completedGames.length;
    return total;
  };
  console.log('data:', data);
  return (
    <>
      <GameSection games={data?.inProgressGames ?? []} title={'In Progress'} />
      <GameSection games={data?.upcomingGames ?? []} title={'Upcoming'} />
      <GameSection games={data?.completedGames ?? []} title={'Completed'} />
    </>
  );
};

export default GamesList;
