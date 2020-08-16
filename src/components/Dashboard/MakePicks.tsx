import React, { useEffect } from 'react';
import styled from 'styled-components/macro';
import ActionButton from '../../Styles/Shared/ActionButton';
import { Link } from 'react-router-dom';
import chevron from '../../img/Chevron.png';
import { usePicksLazyQuery } from '../../types/graphql.types';
import getCurrentWeek from '../../helpers/currentWeek';
import useUser from '../../hooks/useUser';
import useGroup from '../../hooks/useGroup';
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const MakePicks = () => {
  const { user } = useUser();
  const { group } = useGroup();
  const week = getCurrentWeek();
  const [loadPicks, { data, loading, called }] = usePicksLazyQuery();
  useEffect(() => {
    if (group) {
      console.log({ user: user.id, group: group.id ?? 0, week });
      loadPicks({
        variables: { user_id: user.id, group_id: group?.id ?? 0, week }
      });
    }
  }, [group, loadPicks, user.id, week]);
  if (!called || loading) {
    return <div>Loading</div>;
  }
  console.log('this is the data:', data);
  const picks = data?.user_by_pk?.picks_aggregate.aggregate?.count ?? 0;
  const totalGames = data?.game_aggregate.aggregate?.count ?? 0;
  return (
    <Container>
      <Link data-testid={'make-picks'} to='/picks'>
        <ActionButton>
          <img src={chevron} alt='chevron' />
          <div>MAKE YOUR PICKS</div>
          <div>{`${picks}/${totalGames}`}</div>
        </ActionButton>
      </Link>
    </Container>
  );
};

export default React.memo(MakePicks);
