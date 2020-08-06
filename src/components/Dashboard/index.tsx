import React from 'react';
import getCurrentWeek from '../../helpers/currentWeek';
import Leaderboard from './Leaderboard';
import useGroup from '../../hooks/useGroup';
import NoGroupMessage from './NoGroupMessage';
import WeekStatus from '../../Styles/Dashboard/WeekStatus';
import styled from 'styled-components/macro';
import getOrdinal from '../../helpers/getOrdinal';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const { group } = useGroup();
  const rank = 1;
  const score = 12;
  if (!group) {
    return <NoGroupMessage />;
  }
  return (
    <D>
      <DRel>
        <WeekStatus>
          <div className='week'>Week {getCurrentWeek()}</div>
          <div className='main'>
            You're in <strong>{getOrdinal(rank)}</strong> Place,
            <br />
            with{' '}
            <strong>
              {score}
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
