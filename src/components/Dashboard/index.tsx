import React, { useEffect } from 'react';
import getCurrentWeek from '../../helpers/currentWeek';
import Leaderboard from './Leaderboard';
import useGroup from '../../hooks/useGroup';
import NoGroupMessage from './NoGroupMessage';
import WeekStatus from '../../Styles/Dashboard/WeekStatus';
import styled from 'styled-components/macro';
import getOrdinal from '../../helpers/getOrdinal';
import MakePicks from './MakePicks';
import useUser from '../../hooks/useUser';
import { useDashbaordLazyQuery } from '../../types/graphql.types';

const Dashboard = () => {
  const { group } = useGroup();
  const { user } = useUser();

  const [
    loadDashboard,
    { data, loading, error, called }
  ] = useDashbaordLazyQuery();
  useEffect(() => {
    if (group) {
      loadDashboard({
        variables: { group_id: group.id, user_id: user.id }
      });
    }
  }, [group, loadDashboard, user.id]);
  if (loading) {
    return <div>Loading</div>;
  }
  if (error) {
    console.log(error);
    return <div>There was a problem loading this data</div>;
  }
  if (!group) {
    return <NoGroupMessage />;
  }
  if (!called) {
    return <div>Loading</div>;
  }
  return (
    <D>
      <DRel>
        <WeekStatus>
          <div className='week'>Week {getCurrentWeek()}</div>
          <div className='main'>
            You're in{' '}
            <strong>{getOrdinal(data?.rankings[0]?.rank || 1)}</strong> Place,
            <br />
            with{' '}
            <strong>
              {data?.rankings[0]?.points || 0}
              <sup>pts</sup>
            </strong>
          </div>
        </WeekStatus>
        <Leaderboard />
        <MakePicks />
      </DRel>
    </D>
  );
};

const D = styled.div`
  position: absolute;
`;
const DRel = styled.div`
  position: relative;
  width: 100vw;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  display: grid;
  grid-template-rows: 15vh 42vh;
`;
export default Dashboard;
