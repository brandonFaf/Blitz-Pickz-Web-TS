import React from 'react';
import { GroupSliderButtons } from '../../Styles/Groups';
import { Link } from 'react-router-dom';
import ActionButton from '../../Styles/Shared/ActionButton';
import ManageGroupMembers from './ManageGroupMembers';

const EditGroup = ({ groupId }) => {
  return (
    <>
      <ManageGroupMembers group_id={groupId} />
      <GroupSliderButtons>
        <Link to='/groups/join'>
          <ActionButton>Join a League</ActionButton>
        </Link>
        {/* <Link
          to={{
            pathname: `/groups/delete`,
            state: {
              groupName: editGroup.groupName,
              members,
              groupId: editGroup.id
            }
          }}
        > 
          <ActionButton hollow>DELETE THIS LEAGUE</ActionButton>
        </Link> */}
      </GroupSliderButtons>
    </>
  );
};

export default EditGroup;
