import React from 'react';
import { GroupSliderButtons } from '../../Styles/Groups';
import ManageGroupMembers from './ManageGroupMembers';
import CreateConfirmation from './CreateConfirmation';

const EditGroup = ({ groupId }) => {
  return (
    <>
      <ManageGroupMembers group_id={groupId} />
      <GroupSliderButtons>
        <div style={{ textAlign: 'center' }}>
          Share this link to invite others to join the league
        </div>
        <CreateConfirmation groupId={groupId} />
      </GroupSliderButtons>
    </>
  );
};

export default EditGroup;
