import React, { useState } from 'react';
import { UserModel } from '../types/UserTypes';
import firebase from 'firebase/app';
import 'firebase/auth';

export type UserContextType = {
  user: UserModel;
  setUser: (user: UserModel) => void;
  logout: () => void;
};
export const UserContext = React.createContext<UserContextType>({
  user: { id: '' },
  setUser: () => {},
  logout: () => {}
});
type Props = {
  children: React.ReactNode;
};
const UserStore: React.FC<Props> = ({ children }) => {
  const [user, storeUser] = useState<UserModel>({
    id: ''
  });
  const setUser = (u: UserModel) => {
    console.log('set the user');
    storeUser(u);
  };
  const logout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        storeUser({ id: '' });
      });
  };
  return (
    <UserContext.Provider value={{ user, setUser, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserStore;
