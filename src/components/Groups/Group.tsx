import React, { Dispatch, SetStateAction } from 'react';
import {
  Group as G,
  GroupName,
  GroupDetail,
  GroupActive,
  GroupPhoto,
  LeaveGroupButton,
  LeaveButton
} from '../../Styles/Groups';
import ProfilePhoto from '../Profile/ProfilePhoto';
import { useSpring, animated } from 'react-spring';
import useClickOutsideToggle from '../../hooks/useClickOutsideToggle';
import useGroup from '../../hooks/useGroup';
import { GroupDrawerModel } from '../../types/GroupTypes';
import getOrdinal from '../../helpers/getOrdinal';
type props = {
  group: GroupDrawerModel;
  leaveGroup: (id: number) => void;
  userId: string;
  toggleGroups: () => void;
  isEdit: boolean;
  toggleEditGroup: ({ display_name: string, id: number }) => void;
};
const Group: React.FC<props> = ({
  group,
  leaveGroup,
  userId,
  toggleGroups,
  isEdit,
  toggleEditGroup
}) => {
  //make the array of groups in user a map and store score and place there.
  const { setGroup, group: currentGroup } = useGroup();
  const [isDeleting, toggleDeleting, ref]: [
    boolean,
    () => void,
    React.MutableRefObject<HTMLDivElement | undefined>,
    Dispatch<SetStateAction<boolean>>
  ] = useClickOutsideToggle();
  const isAdmin = group.admin_id === userId;
  const selectGroup = () => {
    console.log('setGroup', group.display_name);
    if (isEdit) {
      if (isAdmin) {
        toggleEditGroup({ display_name: group.display_name, id: group.id });
      }
    } else {
      setGroup(group);
      toggleGroups();
    }
  };
  const deleteSlideProps = useSpring({
    transform: isEdit && isDeleting ? 'translateX(-100px)' : 'translateX(0px)'
  });
  const showDeleteButton = () =>
    !isAdmin && (
      <LeaveGroupButton onClick={e => toggleDeleting()}>-</LeaveGroupButton>
    );

  // const rank = group.ranks ? group.ranks[userId] + 1 : 1;
  return (
    <animated.div
      //@ts-ignore
      ref={ref}
      style={{
        ...deleteSlideProps,
        display: 'grid',
        gridAutoFlow: 'column',
        gridTemplateColumns: '100%'
      }}
    >
      <G>
        {isEdit ? (
          showDeleteButton()
        ) : currentGroup?.id === group.id ? (
          <GroupActive />
        ) : (
          <div />
        )}
        <GroupPhoto onClick={selectGroup}>
          <ProfilePhoto displayName={group.display_name} />
        </GroupPhoto>
        <GroupName onClick={selectGroup} data-testid={'group-name'}>
          <div>{group.display_name}</div>
        </GroupName>
        <GroupDetail onClick={selectGroup}>
          <div>{getOrdinal(group.rankings[0]?.rank || 1)}</div>
          <div>{group.rankings[0]?.points || 0} PTS</div>
          <div>{group.members.length} Players</div>
        </GroupDetail>
      </G>
      <LeaveButton onClick={() => leaveGroup(group.id)}>Leave</LeaveButton>
    </animated.div>
  );
};

export default React.memo(Group);
