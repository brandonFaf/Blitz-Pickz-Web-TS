import React from 'react';
import '../data/firebaseConfig';
import Dashboard from './Dashboard';
import useClickOutsideToggle from '../hooks/useClickOutsideToggle';
import GroupDrawer from './Groups/GroupDrawer';
import { Switch, Route, useLocation } from 'react-router-dom';
import JoinGroup from './Groups/JoinGroupPage';
import { useTransition, animated } from 'react-spring';
import CreateGroup from './Groups/CreateGroup';
import hamburger from '../img/Hamburger.svg';
import { DesktopHeader } from '../Styles/Header';
import ProfileDrawer from './Profile/ProfileDrawer';
import useGroup from '../hooks/useGroup';
import useHeader from '../hooks/useHeader';
import Picks from './Picks';

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
const Hamburger = styled.img`
  position: absolute;
  top: 30px;
  left: 20px;
  height: 18px;
`;
const ModalBackground = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(111, 141, 231, 0.45);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LeftBar = () => {
  const [showGroups, toggleGroups, groupsRef] = useClickOutsideToggle();

  return (
    <div>
      <Hamburger
        src={hamburger}
        alt={'hamburger'}
        data-testid={'group-menu'}
        onClick={toggleGroups}
      />
      <GroupDrawer
        showGroups={showGroups}
        toggleGroups={toggleGroups}
        groupsRef={groupsRef}
      />
      <Dashboard />
      {ModalContent()}
    </div>
  );
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
const DesktopApp = () => (
  <Container>
    <LeftBar />
    <Middle />
    <RightBar />
  </Container>
);

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
              <ModalBackground>
                <JoinGroup />
              </ModalBackground>
            </Route>
            <Route path='/groups/create'>
              <ModalBackground>
                <CreateGroup />
              </ModalBackground>
            </Route>
          </Switch>
        </animated.div>
      ))}
    </>
  );
};
export default DesktopApp;
