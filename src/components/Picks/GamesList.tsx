import React, { useCallback, useEffect } from 'react';
import {
  useGetGamesForWeekQuery,
  GetGamesForWeekQuery
} from '../../types/graphql.types';
import useGroup from '../../hooks/useGroup';
import useHeader from '../../hooks/useHeader';
import useUser from '../../hooks/useUser';
import GameSection from './GamesSection';
import GamesSkeleton from './GamesSkeleton';
import getCurrentWeek from '../../helpers/currentWeek';
import { HeaderGroupName } from '../../Styles/Header';

const GamesList = ({ week }) => {
  const { group } = useGroup();
  const { user } = useUser();
  const { setPickHeader } = useHeader();

  const { data, loading, error } = useGetGamesForWeekQuery({
    variables: { week, group_id: group?.id ?? 1 }
  });
  useGetGamesForWeekQuery({
    variables: { week: week + 1, group_id: group?.id ?? 1 }
  });
  useGetGamesForWeekQuery({
    variables: { week: week - 1, group_id: group?.id ?? 1 }
  });
  const getPickCount = useCallback(
    (d: GetGamesForWeekQuery) => {
      const reduceFunc = (acc, g) =>
        g.picks.find(p => p.user.id === user.id) ? acc + 1 : acc;
      let total = d.inProgressGames.reduce(reduceFunc, 0);
      total += d.upcomingGames.reduce(reduceFunc, 0);
      total += d.completedGames.reduce(reduceFunc, 0);
      return total;
    },
    [user.id]
  );

  useEffect(() => {
    if (data) {
      console.log('i"m here here here');
      setPickHeader(
        <>
          <HeaderGroupName>
            <strong>{group?.display_name}</strong>
          </HeaderGroupName>
          <div>
            {week < getCurrentWeek() ? (
              <>
                <span>{`Week ${week} Picks `}</span>
                <span>{`${12} PTS`}</span>
              </>
            ) : (
              `Make Your Picks ${getPickCount(data)} / ${getGameCount(data)}`
            )}
          </div>
        </>
      );
    }
  }, [data, getPickCount, group, setPickHeader, week]);

  if (loading) {
    return <GamesSkeleton />;
  }
  if (error) {
    return <div>Error: {JSON.stringify(error, null, 2)}</div>;
  }

  const getGameCount = (d: GetGamesForWeekQuery) => {
    let total = d.inProgressGames.length;
    total += d.upcomingGames.length;
    total += d.completedGames.length;
    return total;
  };

  return (
    <>
      <GameSection games={data?.inProgressGames ?? []} title={'In Progress'} />
      <GameSection games={data?.upcomingGames ?? []} title={'Upcoming'} />
      <GameSection games={data?.completedGames ?? []} title={'Completed'} />
    </>
  );
};

export default GamesList;
