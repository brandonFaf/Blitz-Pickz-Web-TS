import React from 'react';
import styled from 'styled-components/macro';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import 'firebase/auth';
import firebase from 'firebase/app';
import Logo from '../../Styles/Login/Logo';

const Container = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
`;
const Login = () => {
  const uiConfig = {
    signInFlow: 'popup',
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ]
  };
  return (
    <Container>
      <Logo />
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </Container>
  );
};

export default Login;
