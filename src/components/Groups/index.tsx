import React from 'react';
import styled from 'styled-components/macro';
import { GroupList, GroupSliderButtons } from '../../Styles/Groups';
import { Link } from 'react-router-dom';
import ActionButton from '../../Styles/Shared/ActionButton';
import useUser from '../../hooks/useUser';
import useGroup from '../../hooks/useGroup';
import {
  useGetGroupsQuery,
  useRemoveFromGroupMutation,
  GetGroupsDocument
} from '../../types/graphql.types';
import Group from './Group';
import AppButtons from '../AppButons';
import useViewport from '../../hooks/useViewport';
const Groups = ({ toggleGroups, isEdit, setEditGroup }) => {
  const { user } = useUser();
  const { group, setGroup } = useGroup();
  const { isMobile } = useViewport();
  const { data, loading, error } = useGetGroupsQuery({
    variables: { user_id: user.id }
  });
  const [removeFromGroup] = useRemoveFromGroupMutation();
  const leaveGroup = (id: number) =>
    removeFromGroup({
      variables: { user_id: user.id, group_id: id },
      refetchQueries: [
        { query: GetGroupsDocument, variables: { user_id: user.id } }
      ]
    });
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>There was an Error</div>;
  }
  if (!group && data?.group_user[0]) {
    setGroup(data.group_user[0].group);
  }
  //@ts-ignore
  const groups = [...data?.group_user].sort((a, b) =>
    a.group.display_name < b.group.display_name ? -1 : 1
  );
  return (
    <>
      <GroupList>
        {groups?.map(g => (
          <Group
            leaveGroup={leaveGroup}
            userId={user.id}
            group={g.group}
            key={g.group.id}
            toggleGroups={toggleGroups}
            isEdit={isEdit}
            toggleEditGroup={setEditGroup}
          />
        ))}
      </GroupList>
      <GroupSliderButtons>
        <Link to='/groups/join'>
          <ActionButton>Join a League</ActionButton>
        </Link>
        <Link to='/groups/create'>
          <ActionButton>Create a League</ActionButton>
        </Link>
      </GroupSliderButtons>
      {isMobile && (
        <AppButtonContainer>
          <AppButtons />
        </AppButtonContainer>
      )}
    </>
  );
};
const AppButtonContainer = styled.div`
  grid-area: app;
`;
export default Groups;
