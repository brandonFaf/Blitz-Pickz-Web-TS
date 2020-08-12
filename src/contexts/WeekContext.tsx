import React, { useState } from 'react';
import getCurrentWeek from '../helpers/currentWeek';

export type WeekContextType = {
  week: number;
  setWeek: (week: number) => void;
};
export const WeekContext = React.createContext<WeekContextType>({
  week: getCurrentWeek(),
  setWeek: () => {}
});
type Props = {
  children: React.ReactNode;
};
const WeekStore: React.FC<Props> = ({ children }) => {
  const [week, setWeek] = useState<number>(getCurrentWeek());

  return (
    <WeekContext.Provider value={{ week, setWeek }}>
      {children}
    </WeekContext.Provider>
  );
};

export default WeekStore;
