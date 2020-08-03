import React from 'react';
import useLogin from '../hooks/useLogin';
import useUser from '../hooks/useUser';
import '../data/firebaseConfig';
import Login from './Login';
import CreateProfile from './Profile/CreateProfile';
import Dashboard from './Dashboard';
import useClickOutsideToggle from '../hooks/useClickOutsideToggle';
import GroupDrawer from './Groups/GroupDrawer';
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
      <div>
        <button onClick={toggleGroups}>open</button>
        <GroupDrawer
          showGroups={showGroups}
          toggleGroups={toggleGroups}
          groupsRef={groupsRef}
        />
        {/*<ProfileDrawer/> */}
        <MainContent screen='dashboard' />
      </div>
    );
  }
};
type MainProps = {
  screen: 'dashboard' | 'join' | 'create' | 'pick';
};
const MainContent = ({ screen }: MainProps) => {
  switch (screen) {
    case 'dashboard':
      return <Dashboard />;

    default:
      return <></>;
  }
};
export default App;
