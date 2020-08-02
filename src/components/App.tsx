import React from 'react';
import useLogin from '../hooks/useLogin';
import useUser from '../hooks/useUser';
import '../data/firebaseConfig';
import Login from './Login';
import CreateProfile from './Profile/CreateProfile';
import Dashboard from './Dashboard';
const App = () => {
  const { status, user } = useLogin();
  const { user: dbUser } = useUser();

  if (status === 'loading') {
    return <div>Loading</div>;
  }
  if (status === 'out') {
    return <Login />;
  }
  if (user && !dbUser) {
    return <CreateProfile user={user} />;
  } else {
    return (
      <div>
        {/* <GroupDrawer/>
        <ProfileDrawer/> */}
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
