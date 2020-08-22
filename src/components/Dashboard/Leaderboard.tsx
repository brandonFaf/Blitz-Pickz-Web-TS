import React, { useEffect } from 'react';
import styled from 'styled-components/macro';
import ProfilePhoto from '../Profile/ProfilePhoto';
import Colors from '../../Styles/colors';
import useUser from '../../hooks/useUser';
import useGroup from '../../hooks/useGroup';
import { useLeaderboardLazyQuery } from '../../types/graphql.types';

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
    loadLeaderboard,
    { data, loading, error, called }
  ] = useLeaderboardLazyQuery();
  useEffect(() => {
    if (group) {
      loadLeaderboard({
        variables: { group_id: group.id }
      });
    }
  }, [group, loadLeaderboard]);
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
  const members =
    data.rankings.length === 0
      ? group?.members.map(m => ({ ...m, rank: 1, points: 0 }))
      : data.rankings;
  return (
    <LBoard data-testid='leaderboard'>
      <Row>
        <div />
        <div />
        <div>Player</div>
        <div>Points</div>
      </Row>
      {members?.map(m => {
        if (!m.user) {
          return <></>;
        }
        const { photo_url, display_name, id } = m.user;
        let cn = '';
        if (id === user.id) {
          cn = 'current';
        }
        return (
          <Row data-testid='leaderboard-row' key={id} className={cn}>
            <div>{m.rank || 1}.</div>
            <div>
              <ProfilePhoto
                size={'small'}
                displayName={display_name}
                src={photo_url}
              />
            </div>
            <div className={cn}>{display_name}</div>
            <div>{m.points || 0}</div>
          </Row>
        );
      })}
    </LBoard>
  );
};

export default Leaderboard;
