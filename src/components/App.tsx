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

const App = () => {
  const { status, user } = useLogin();
  const { user: dbUser } = useUser();
  const [showGroups, toggleGroups, groupsRef] = useClickOutsideToggle();

  if (status === 'loading') {
    return <div>Loading</div>;
  }
  if (status === 'out') {
    return <Login />;
  }
  if (user && !dbUser.id) {
    return <CreateProfile user={user} />;
  } else {
    return (
      <>
        <div style={{ position: 'absolute' }}>
          <button onClick={toggleGroups}>open</button>
          <GroupDrawer
            showGroups={showGroups}
            toggleGroups={toggleGroups}
            groupsRef={groupsRef}
          />
          {/*<ProfileDrawer/> */}
          <Dashboard />
        </div>
        <ModalContent />
      </>
    );
  }
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
          style={{ position: 'absolute', zIndex: 80, ...props }}
        >
          <Switch location={item}>
            <Route path='/groups/join'>
              <JoinGroup />
            </Route>
          </Switch>
        </animated.div>
      ))}
    </>
  );
};
export default App;
