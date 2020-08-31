import React from 'react';
import useLogin from '../hooks/useLogin';
import useUser from '../hooks/useUser';
import '../data/firebaseConfig';
import Login from './Login';
import CreateProfile from './Profile/CreateProfile';
import Dashboard from './Dashboard';
import useClickOutsideToggle from '../hooks/useClickOutsideToggle';
import GroupDrawer from './Groups/GroupDrawer';
import { Switch, Route, useLocation } from 'react-router-dom';
import JoinGroup from './Groups/JoinGroupPage';
import { useTransition, animated } from 'react-spring';
import CreateGroup from './Groups/CreateGroup';
import hamburger from '../img/Hamburger.svg';
import { Header } from '../Styles/Header';
import ProfilePhoto from './Profile/ProfilePhoto';
import ProfileDrawer from './Profile/ProfileDrawer';
import useGroup from '../hooks/useGroup';
import useHeader from '../hooks/useHeader';
import Picks from './Picks';

const MobileApp = () => {
  const { status, user } = useLogin();
  const { user: dbUser } = useUser();
  const { pickHeader } = useHeader();
  const { group } = useGroup();
  const [showGroups, toggleGroups, groupsRef] = useClickOutsideToggle();
  const [showProfile, toggleProfile, profileRef] = useClickOutsideToggle();

  return (
    <>
      <div style={{ width: '95vw' }}>
        <Header>
          <img
            src={hamburger}
            alt={'hamburger'}
            data-testid={'group-menu'}
            onClick={toggleGroups}
          />
          <div className='header-text'>
            {pickHeader ? pickHeader : group?.display_name ?? 'Dashboard'}
          </div>
          <ProfilePhoto
            data-testid={'profile-menu'}
            onClick={toggleProfile}
            displayName={dbUser.display_name}
            src={dbUser.photo_url}
            size='small'
          />
        </Header>
        <div style={{ position: 'absolute', top: 75 }}>
          <GroupDrawer
            showGroups={showGroups}
            toggleGroups={toggleGroups}
            groupsRef={groupsRef}
          />
          <ProfileDrawer
            showProfile={showProfile}
            toggleProfile={toggleProfile}
            profileRef={profileRef}
          />
          <Dashboard />
        </div>
        <ModalContent />
      </div>
    </>
  );
};

const ModalContent = () => {
  const location = useLocation();
  const transitions = useTransition(location, location => location.pathname, {
    from: { transform: 'translate3d(0,75vh,0)' },
    enter: { transform: 'translate3d(0,0,0)' },
    leave: { transform: 'translate3d(0,75vh,0)' },
    config: { duration: 300 }
  });
  return (
    <>
      {transitions.map(({ item, props, key }) => (
        <animated.div
          key={key}
          style={{
            position: 'absolute',
            top: location.pathname === '/picks' ? 75 : 0,
            zIndex: location.pathname === '/picks' ? 55 : 80,
            ...props
          }}
        >
          <Switch location={item}>
            <Route path='/groups/join'>
              <JoinGroup />
            </Route>
            <Route path='/groups/create'>
              <CreateGroup />
            </Route>
            <Route path='/picks'>
              <Picks />
            </Route>
          </Switch>
        </animated.div>
      ))}
    </>
  );
};
export default MobileApp;
