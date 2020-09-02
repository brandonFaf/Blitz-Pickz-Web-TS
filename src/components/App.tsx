import React from 'react';
import useViewport from '../hooks/useViewport';
import MobileApp from './MobileApp';
import DesktopApp from './DesktopApp';
import useLogin from '../hooks/useLogin';
import useUser from '../hooks/useUser';
import Login from './Login';
import CreateProfile from './Profile/CreateProfile';
import Loading from './Shared/Loading';
const App = () => {
  const { isMobile } = useViewport();
  const { status, user } = useLogin();
  const { user: dbUser } = useUser();

  if (status === 'loading') {
    return <Loading />;
  }
  if (status === 'out') {
    return <Login />;
  }
  if (user && !dbUser.id) {
    return <CreateProfile user={user} />;
  } else {
    return isMobile ? <MobileApp /> : <DesktopApp />;
  }
};

export default App;
