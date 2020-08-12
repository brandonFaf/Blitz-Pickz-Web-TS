import React, { useEffect } from 'react';
import getCurrentWeek from '../../helpers/currentWeek';
import Leaderboard from './Leaderboard';
import useGroup from '../../hooks/useGroup';
import NoGroupMessage from './NoGroupMessage';
import WeekStatus from '../../Styles/Dashboard/WeekStatus';
import styled from 'styled-components/macro';
import getOrdinal from '../../helpers/getOrdinal';
import { Link } from 'react-router-dom';
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
  if (!called || loading) {
    return <div>Loading</div>;
  }
  if (error) {
    console.log(error);
    return <div>There was a problem loading this data</div>;
  }
  if (!group) {
    return <NoGroupMessage />;
  }
  return (
    <D>
      <DRel>
        <WeekStatus>
          <div className='week'>Week {getCurrentWeek()}</div>
          <div className='main'>
            You're in <strong>{getOrdinal(data?.rankings[0]?.rank)}</strong>{' '}
            Place,
            <br />
            with{' '}
            <strong>
              {data?.rankings[0]?.points}
              <sup>pts</sup>
            </strong>
          </div>
        </WeekStatus>
        <Leaderboard />
        <Link to='/picks'>
          <button>Pick</button>
        </Link>
        {/* <MakePicks
          week={week}
          user={user}
          uid={user.id}
        /> */}
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
