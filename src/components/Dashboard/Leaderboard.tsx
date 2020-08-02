import React, { useEffect } from 'react';
import styled from 'styled-components/macro';
import ProfilePhoto from '../Profile/ProfilePhoto';
import Colors from '../../Styles/colors';
import useUser from '../../hooks/useUser';
import useGroup from '../../hooks/useGroup';
import { useDashboardLazyQuery } from '../../types/graphql.types';
import { Member } from '../../types/UserTypes';

const Row = styled.div`
  display: grid;
  grid-template-columns: 5vw 45px 28vw 10vw;
  grid-auto-flow: row;
  grid-column-gap: 12px;
  align-items: center;
  .current {
    color: ${Colors.highlight};
  }
`;

const LBoard = styled.div`
  display: grid;
  grid-auto-flow: row;
  margin-top: 40px;
  font-size: 14px;
  justify-content: center;
  text-align: center;
  align-items: center;
  grid-row-gap: 10px;
  overflow-y: scroll;
  margin: 0 10vw;
  grid-auto-rows: max-content;
`;

const Leaderboard = () => {
  const { user } = useUser();
  const { group } = useGroup();
  const [
    loadDashboard,
    { data, loading, error, called }
  ] = useDashboardLazyQuery();
  useEffect(() => {
    console.log('g', group);
    if (group) {
      loadDashboard({
        variables: { group_id: group.id }
      });
    }
  }, [group, loadDashboard]);
  if (!called || loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    console.log(error);
    return <div>There was a problem loading this data</div>;
  }
  if (!data || !data.group_by_pk) {
    return <div></div>;
  }
  const { members } = data?.group_by_pk;
  const byScore = (a: Member, b: Member) => {
    const first = a?.user.scores_aggregate?.aggregate?.sum?.points ?? 0;
    const second = b?.user.scores_aggregate?.aggregate?.sum?.points ?? 0;
    return second - first;
  };

  let rank = 0;
  let previousScore: number;
  return (
    <LBoard data-testid='leaderboard'>
      <Row>
        <div />
        <div />
        <div>Player</div>
        <div>Points</div>
      </Row>
      {[...members].sort(byScore).map(m => {
        const { photo_url, display_name, id } = m.user;
        const score = m.user.scores_aggregate.aggregate?.sum?.points;
        if (score !== previousScore) {
          rank++;
        }
        let cn = '';
        if (id === user?.id) {
          cn = 'current';
        }
        return (
          <Row data-testid='leaderboard-row' key={id} className={cn}>
            <div>{rank}.</div>
            <div>
              <ProfilePhoto
                size={'small'}
                displayName={display_name}
                src={photo_url}
              />
            </div>
            <div className={cn}>{display_name}</div>
            <div>{score}</div>
          </Row>
        );
      })}
    </LBoard>
  );
};

export default Leaderboard;
