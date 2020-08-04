import React from 'react';
import Profile from './index';
import { UserModel } from '../../types/UserTypes';
import firebase from 'firebase';
import { Header } from '../../Styles/Header';

type Props = {
  user: firebase.User;
};

const CreateProfile = ({ user }: Props) => {
  const u: UserModel = {
    id: user.uid,
    display_name:
      user.displayName || user.email?.substr(0, user.email?.indexOf('@')),
    photo_url: user.photoURL,
    phone_number: user.phoneNumber,
    notifications: false
  };
  return (
    <div>
      <Header>
        <div />
        <div className='header-text'>Create Profile</div>
        <div />
      </Header>
      <Profile user={u} />
    </div>
  );
};

export default React.memo(CreateProfile);
