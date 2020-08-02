import React from 'react';
import useLogin from '../hooks/useLogin';
import useUser from '../hooks/useUser';
import '../data/firebaseConfig';
import Login from './Login';
import CreateProfile from './Profile/CreateProfile';
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
    return <div>Logged In</div>;
  }
};

export default App;
