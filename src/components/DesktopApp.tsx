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
import { DesktopHeader } from '../Styles/Header';
import ProfilePhoto from './Profile/ProfilePhoto';
import ProfileDrawer from './Profile/ProfileDrawer';
import useGroup from '../hooks/useGroup';
import useHeader from '../hooks/useHeader';
import Picks from './Picks';
import Colors from '../Styles/colors';

import styled from 'styled-components/macro';

const Container = styled.div`
  display: grid;
  grid-template-columns: 25% 1fr 25%;
  height: 100vh;
  overflow: hidden;
`;
const MiddleContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;
const Drawer = styled.div`
  background-color: ${Colors.drawer};
`;
const LeftBar = () => {
  return <Drawer>Left</Drawer>;
};
const RightBar = () => {
  const [showProfile, toggleProfile, profileRef] = useClickOutsideToggle();
  return (
    <ProfileDrawer
      showProfile={showProfile}
      toggleProfile={toggleProfile}
      profileRef={profileRef}
    />
  );
};
const Middle = () => {
  const { pickHeader } = useHeader();
  const { group } = useGroup();
  return (
    <MiddleContainer>
      <DesktopHeader>
        <div className='header-text'>
          {pickHeader ? pickHeader : group?.display_name ?? 'Dashboard'}
        </div>
      </DesktopHeader>
      <Picks />
    </MiddleContainer>
  );
};
const DesktopApp = () => {
  const { user } = useUser();
  const [showGroups, toggleGroups, groupsRef] = useClickOutsideToggle();

  return (
    <Container>
      <LeftBar />
      <Middle />
      <RightBar />
    </Container>
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
            <Route path='/picks'></Route>
          </Switch>
        </animated.div>
      ))}
    </>
  );
};
export default DesktopApp;
