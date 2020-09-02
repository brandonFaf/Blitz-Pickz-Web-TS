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
import useViewport from '../../hooks/useViewport';
import Colors from '../../Styles/colors';
import Loading from '../Shared/Loading';

const Dashboard = () => {
  const { group } = useGroup();
  const { user } = useUser();
  const { isMobile } = useViewport();

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
    return (
      <Container>
        <Loading />
      </Container>
    );
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
    <Container>
      <WeekStatus>
        <div className='week'>Week {getCurrentWeek()}</div>
        <div className='main'>
          You're in <strong>{getOrdinal(data?.rankings[0]?.rank || 1)}</strong>{' '}
          Place,
          <br />
          with{' '}
          <strong>
            {data?.rankings[0]?.points || 0}
            <sup>pts</sup>
          </strong>
        </div>
      </WeekStatus>
      <Leaderboard />
      {isMobile && <MakePicks />}
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-rows: 15vh 50vh 15vh;
  align-items: center;
  @media (min-width: 620px) {
    height: 100vh;
    grid-template-rows: 150px 70vh;
    align-items: start;
    grid-row-gap: 35px;
    background-color: ${Colors.drawer};
    &::-webkit-scrollbar {
      width: 5px; /* width of the entire scrollbar */
    }
    &::-webkit-scrollbar-track {
      background: ${Colors.drawer}; /* color of the tracking area */
    }
    &::-webkit-scrollbar-thumb {
      background-color: #6fe793; /* color of the scroll thumb */
      border-radius: 20px; /* roundness of the scroll thumb */
    }

    scrollbar-width: thin;
    scrollbar-color: #6fe793 ${Colors.drawer};
  }
`;
export default Dashboard;
