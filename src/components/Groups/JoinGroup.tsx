import React from 'react';
import styled from 'styled-components/macro';
import Colors from '../../Styles/colors';
import {
  GroupList,
  GroupSliderButtons,
  GroupFormError
} from '../../Styles/Groups';
import Member from './Member';
import ActionButton from '../../Styles/Shared/ActionButton';
import HighlightText from '../../Styles/Shared/HighlightText';
import { JoinGroupParams, JoinGroupStages } from '../../types/GroupTypes';
import useUser from '../../hooks/useUser';
import useGroup from '../../hooks/useGroup';
import {
  useGetMembersQuery,
  useJoinGroupMutation,
  GetGroupsDocument,
  FetchAvailableGroupsDocument
} from '../../types/graphql.types';
import { useHistory } from 'react-router-dom';

const JoinGroup: React.FC<JoinGroupParams> = ({ navigate, group }) => {
  const history = useHistory();
  const { user } = useUser();
  const { setGroup } = useGroup();
  const { data, loading, error } = useGetMembersQuery({
    variables: { group_id: group.id }
  });
  const [joinGroup] = useJoinGroupMutation({
    refetchQueries: [
      { query: GetGroupsDocument, variables: { user_id: user.id } },
      { query: FetchAvailableGroupsDocument, variables: { user_id: user.id } }
    ],
    variables: { user_id: user.id, group_id: group.id }
  });
  const join = async () => {
    const result = await joinGroup().catch(e => console.log(e));
    if (result) {
      if (data && data.group_by_pk) {
        setGroup({ ...group, members: data.group_by_pk.members });
        history.push('/');
      }
    }
  };
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    console.log(error);
    return (
      <GroupFormError>
        There was an error fetching league members
      </GroupFormError>
    );
  }
  return (
    <>
      <JGP>
        <HighlightText>{group.display_name} MEMBERS</HighlightText>
        <MemberList>
          {data?.group_by_pk?.members.map(m => (
            <Member member={m.user} key={m.user.id} />
          ))}
        </MemberList>
        <GroupSliderButtons>
          <ActionButton onClick={join}>JOIN THIS LEAGUE</ActionButton>

          <ActionButton
            hollow
            onClick={() => navigate(JoinGroupStages.search, null)}
          >
            CANCEL
          </ActionButton>
        </GroupSliderButtons>
      </JGP>
    </>
  );
};
export const MemberList = styled.div`
  display: grid;
  grid-area: guts;
  align-self: start;
  width: 100%;
  grid-row-gap: 20px;
  height: 90%;
  overflow: auto;
  align-content: baseline;
`;
const JGP = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  justify-items: center;
  background-color: ${Colors.background};
  height: 100%;
  width: 100%;
  z-index: 60;
  overflow: hidden;
  grid-template-columns: 100%;
  grid-template-rows: 10vh 50vh 15vh;
  grid-template-areas: 'text' 'guts' 'button';
  @media (min-width: 620px) {
    width: 50%;
    grid-template-rows: 10% 50% 25%;
  }
`;

export default JoinGroup;
