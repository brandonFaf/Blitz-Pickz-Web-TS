import React, { useState } from 'react';
import { useTransition } from 'react-spring';
import { GroupsSlidingHeader, GroupsSlider } from '../../Styles/Groups';
import closeX from '../../img/close.svg';
import useToggleState from '../../hooks/useToggleState';
// import ManageGroupMembers from './ManageGroupMembers';
import EditGroup from './EditGroup';
import Groups from '.';
const GroupDrawer = ({ showGroups, toggleGroups, groupsRef }) => {
  const groupTransitions = useTransition(showGroups, null, {
    from: { transform: 'translate3d(-90vh,0,0)' },
    enter: { transform: 'translate3d(0vh,0,0)' },
    //@ts-ignore
    leave: () => async next => {
      await next({ transform: 'translate3d(-90vh,0,0)' });
      setEditMode(false);
      setEditGroup(undefined);
    }
  });
  const [editGroup, setEditGroup] = useState<{
    display_name: string;
    id: number;
  } | null>();
  const [isEdit, toggleEditMode, setEditMode] = useToggleState(false);
  const clearEdit = () => {
    toggleEditMode();
    setEditGroup(null);
  };
  return (
    <>
      {groupTransitions.map(
        ({ item, key, props }) =>
          item && (
            <GroupsSlider ref={groupsRef} key={key} style={props}>
              <GroupsSlidingHeader>
                {!isEdit ? (
                  <img
                    src={closeX}
                    alt='close'
                    data-testid={'close'}
                    onClick={toggleGroups}
                  />
                ) : (
                  <div />
                )}
                <div data-testid={'heading'}>
                  {isEdit
                    ? editGroup
                      ? `Edit ${editGroup.display_name}`
                      : 'Edit Your Leagues'
                    : 'Your Leagues'}
                </div>
                <span data-testid={'edit-done'} onClick={clearEdit}>
                  {isEdit ? 'Done' : 'Edit'}
                </span>
              </GroupsSlidingHeader>
              {editGroup ? (
                <EditGroup groupId={editGroup.id} />
              ) : (
                <Groups
                  setEditGroup={setEditGroup}
                  isEdit={isEdit}
                  toggleGroups={toggleGroups}
                />
              )}
            </GroupsSlider>
          )
      )}
    </>
  );
};

export default GroupDrawer;
