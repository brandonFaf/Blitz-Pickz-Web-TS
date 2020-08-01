import React from 'react';
import useLogin from '../hooks/useLogin';
import useUser from '../hooks/useUser';
import '../data/firebaseConfig';
import Login from './Login';
const App = () => {
  const { status, user } = useLogin();
  const { user: dbUser } = useUser();
  if (status === 'loading') {
    return <div>Loading</div>;
  }
  if (status === 'out') {
    return <Login />;
  }
  if (!dbUser) {
    return <div>Profile</div>;
  } else {
    return <div>Logged In</div>;
  }
};

export default App;
