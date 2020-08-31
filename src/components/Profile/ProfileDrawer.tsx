import React from 'react';
import { useTransition } from 'react-spring';
import { SlidingPage, SlidingHeader, OpenText } from '../../Styles/SlidingPage';
import Profile from './index';
import { Link } from 'react-router-dom';
import ActionButton from '../../Styles/Shared/ActionButton';
import { GroupSliderButtons } from '../../Styles/Groups';
import closeX from '../../img/close.svg';
import useUser from '../../hooks/useUser';
import useViewport from '../../hooks/useViewport';

const ProfileDrawer = ({ showProfile, toggleProfile, profileRef }) => {
  const { isMobile } = useViewport();
  const transform = isMobile ? '15vw' : '0';
  const profileTransitions = useTransition(showProfile, null, {
    from: { transform: 'translate3d(100vw,0,0)' },
    enter: { transform: `translate3d(${transform},0,0)` },
    leave: { transform: 'translate3d(100vw,0,0)' }
  });
  const { user, logout } = useUser();
  return (
    <>
      {profileTransitions.map(({ item, key, props }) =>
        item ? (
          <SlidingPage
            data-testid={'profile-page'}
            ref={profileRef}
            key={key}
            style={props}
          >
            <SlidingHeader>
              <div />
              <div>Profile</div>

              <img
                src={closeX}
                alt='close'
                data-testid={'close'}
                onClick={toggleProfile}
              />
            </SlidingHeader>
            <Profile user={user} toggleProfile={toggleProfile} />

            <GroupSliderButtons style={{ marginTop: '5px' }}>
              <Link to='/login'>
                <ActionButton onClick={logout}>Logout</ActionButton>
              </Link>
              <a href='mailto:blitzpickz@gmail.com'>
                <ActionButton hollow>Report An Issue</ActionButton>
              </a>
            </GroupSliderButtons>
          </SlidingPage>
        ) : (
          !isMobile && <OpenText onClick={toggleProfile}>&lt; Profile</OpenText>
        )
      )}
    </>
  );
};

export default ProfileDrawer;
