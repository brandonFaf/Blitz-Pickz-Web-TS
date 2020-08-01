import React, { useState } from 'react';
import { UserModel } from '../types/UserTypes';
import firebase from 'firebase/app';
import 'firebase/auth';

export type UserContextType = {
  user: Partial<UserModel> | null;
  setUser: (user: Partial<UserModel> | null) => void;
  logout: () => void;
};
export const UserContext = React.createContext<UserContextType>({
  user: null,
  setUser: () => {},
  logout: () => {}
});
type Props = {
  children: React.ReactNode;
};
const UserStore: React.FC<Props> = ({ children }) => {
  const [user, storeUser] = useState<Partial<UserModel> | null>(null);
  const setUser = (u: Partial<UserModel> | null) => {
    console.log('set the user');
    storeUser(u);
  };
  const logout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        storeUser(null);
      });
  };
  return (
    <UserContext.Provider value={{ user, setUser, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserStore;
