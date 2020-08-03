import React from 'react';
import ProfilePhoto from '../Profile/ProfilePhoto';
import useClickOutsideToggle from '../../hooks/useClickOutsideToggle';
import {
  Group,
  GroupName,
  LeaveGroupButton,
  LeaveButton,
  GroupPhoto
} from '../../Styles/Groups';
import { useSpring, animated } from 'react-spring';
import { UserModel } from '../../types/UserTypes';
import useUser from '../../hooks/useUser';
type props = {
  member: Partial<UserModel>;
  removeUser?: (user_id: string) => void;
};
const Member: React.FC<props> = ({ member, removeUser }) => {
  const { user } = useUser();
  const [isDeleting, toggleDeleting, ref] = useClickOutsideToggle();
  const deleteSlideProps = useSpring({
    transform: isDeleting ? 'translateX(-100px)' : 'translateX(0px)'
  });

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
      <Group>
        {removeUser && user.id !== member.id && (
          <LeaveGroupButton
            data-testid={'leave-group-button'}
            onClick={toggleDeleting}
          >
            -
          </LeaveGroupButton>
        )}
        <GroupPhoto>
          <ProfilePhoto
            src={member.photo_url}
            displayName={member.display_name}
          />
        </GroupPhoto>
        <GroupName>{member.display_name}</GroupName>
      </Group>
      {removeUser && (
        <LeaveButton onClick={() => removeUser(member.id ?? '')}>
          Remove
        </LeaveButton>
      )}
    </animated.div>
  );
};

export default Member;
