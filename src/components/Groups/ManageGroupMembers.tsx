import React from 'react';
import Member from './Member';
import { GroupList } from '../../Styles/Groups';
import useUser from '../../hooks/useUser';
import {
  useGetMembersQuery,
  useRemoveFromGroupMutation,
  GetMembersDocument,
  GetGroupsDocument
} from '../../types/graphql.types';

const ManageGroupMembers = ({ group_id }) => {
  const { user } = useUser();
  const { data, loading, error } = useGetMembersQuery({
    variables: { group_id }
  });
  const [removeFromGroup] = useRemoveFromGroupMutation();
  const removeUser = (user_id: string) => {
    console.log('delete', user_id);
    removeFromGroup({
      variables: { user_id, group_id },
      refetchQueries: [
        { query: GetMembersDocument, variables: { group_id } },
        { query: GetGroupsDocument, variables: { user_id: user?.id } }
      ]
    });
  };
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    console.log(error);
    return <div>There was an Error</div>;
  }
  if (!data || !data.group_by_pk) {
    return <div></div>;
  }
  const { members } = data?.group_by_pk;
  return (
    <GroupList>
      {members.map(m => (
        <Member member={m.user} removeUser={removeUser} />
      ))}
    </GroupList>
  );
};

export default ManageGroupMembers;
