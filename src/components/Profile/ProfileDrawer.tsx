import React, { useEffect } from 'react';
import { useTransition } from 'react-spring';
import { SlidingPage, SlidingHeader, OpenText } from '../../Styles/SlidingPage';
import Profile from './index';
import { Link } from 'react-router-dom';
import ActionButton from '../../Styles/Shared/ActionButton';
import { GroupSliderButtons } from '../../Styles/Groups';
import closeX from '../../img/close.svg';
import useUser from '../../hooks/useUser';
import useViewport from '../../hooks/useViewport';
import styled from 'styled-components/macro';
import AppButtons from '../AppButons';
import { messaging as fbMessaging } from 'firebase';
import { useSaveNotificationTokenMutation } from '../../types/graphql.types';

const ProfileDrawer = ({ showProfile, toggleProfile, profileRef }) => {
  const { isMobile } = useViewport();
  const transform = isMobile ? '15vw' : '0';
  const profileTransitions = useTransition(showProfile, null, {
    from: { transform: 'translate3d(100vw,0,0)' },
    enter: { transform: `translate3d(${transform},0,0)` },
    leave: { transform: 'translate3d(100vw,0,0)' }
  });
  const { user, setUser, logout } = useUser();
  const notificationTokens = user.notification_tokens ?? [];
  const [saveNotificationToken] = useSaveNotificationTokenMutation();
  const messaging = fbMessaging();
  if (!messaging) {
    console.log('no messaging');
  }
  messaging.onMessage(async payload => {
    console.log('Message received. ', payload);
    const { title, ...options } = payload.notification;
    const registration = await navigator.serviceWorker.ready;
    registration.showNotification(title, options); // We will create this function in a further step.
  });
  useEffect(() => {
    const setUpServiceWorker = async () => {
      const registration = await navigator.serviceWorker.ready;
      messaging.useServiceWorker(registration);
    };

    setUpServiceWorker();
  }, []);

  const getNotifications = async () => {
    // If the user hasn't told whether he wants to be notified or not
    // Note: because of Chrome, we cannot be sure the permission property
    // is set, therefore it's unsafe to check for the "default" value.
    if (window.Notification && Notification.permission !== 'denied') {
      const token = await messaging.getToken();
      console.log('token:', token);
      saveNotificationToken({ variables: { user_id: user.id, token } });
      notificationTokens.push({ token });
      setUser({
        ...user,
        notification_tokens: notificationTokens
      });
    } else {
      // If the user refuses to get notified
      alert(
        'You denied permissions to notifications. Please go to your browser or phone setting to allow notifications.'
      );
    }
  };

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

            <GroupSliderButtons
              style={{
                marginTop: notificationTokens.length === 0 ? '50px' : '5px'
              }}
            >
              <Link to='/login'>
                <ActionButton onClick={logout}>Logout</ActionButton>
              </Link>
              <a href='mailto:blitzpickz@gmail.com'>
                <ActionButton hollow>Report An Issue</ActionButton>
              </a>
              {notificationTokens.length === 0 && (
                <ActionButton onClick={getNotifications}>
                  Get Notifications
                </ActionButton>
              )}
            </GroupSliderButtons>
          </SlidingPage>
        ) : (
          !isMobile && (
            <DesktopContainer>
              <OpenText onClick={toggleProfile}>&lt; Profile</OpenText>
              <AppButtons />
            </DesktopContainer>
          )
        )
      )}
    </>
  );
};
const DesktopContainer = styled.div`
  display: flex;
  height: 100vh;
  justify-content: space-between;
  flex-direction: column;
`;
export default ProfileDrawer;
