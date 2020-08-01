import React, { useState } from 'react';
import { GroupModel } from '../types/GroupTypes';

export type GroupContextType = {
  group?: GroupModel;
  setGroup: (group?: GroupModel) => void;
};
export const GroupContext = React.createContext<GroupContextType>({
  group: undefined,
  setGroup: () => {}
});
type Props = {
  children: React.ReactNode;
};
const GroupStore: React.FC<Props> = ({ children }) => {
  const [group, storeGroup] = useState<GroupModel>();
  const setGroup = (g?: GroupModel) => {
    if (g != null) {
      localStorage.setItem('group', JSON.stringify(g));
      storeGroup(g);
    }
  };
  return (
    <GroupContext.Provider value={{ group, setGroup }}>
      {children}
    </GroupContext.Provider>
  );
};

export default GroupStore;
