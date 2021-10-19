import React, { useEffect } from 'react';
import styled from 'styled-components/macro';
import ProfilePhoto from '../Profile/ProfilePhoto';
import Colors from '../../Styles/colors';
import useUser from '../../hooks/useUser';
import useGroup from '../../hooks/useGroup';
import { useLeaderboardLazyQuery } from '../../types/graphql.types';

const Row = styled.div`
  display: grid;
  grid-template-columns: 5% 20% 40% 10%;
  grid-auto-flow: row;
  grid-column-gap: 12px;
  align-items: center;
  justify-items: center;
  justify-content: center;
  .current {
    color: ${Colors.highlight};
  }
`;
const HeaderRow = styled(Row)`
  position: sticky;
  top: 0;
  background-color: ${Colors.background};
  @media (min-width: 620px) {
    background-color: ${Colors.drawer};
  }
`;
const LBoard = styled.div`
  display: grid;
  grid-auto-flow: row;
  font-size: 14px;
  grid-row-gap: 10px;
  overflow-y: auto;
  grid-auto-rows: max-content;
  grid-template-columns: 100%;
  height: 100%;
`;

const Leaderboard = () => {
  const { user } = useUser();
  const { group } = useGroup();
  const [loadLeaderboard, { data, loading, error, called }] =
    useLeaderboardLazyQuery();
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
      ? group?.members.map(m => ({ ...m, rank: 1, points: 0, sum: 0 }))
      : data.rankings;
  return (
    <LBoard data-testid='leaderboard'>
      <HeaderRow>
        <div />
        <div />
        <div>Player</div>
        <div>Points</div>
      </HeaderRow>
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
