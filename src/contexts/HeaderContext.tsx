import React, { useState } from 'react';

export type HeaderContextType = {
  pickHeader: React.ReactNode | null;
  setPickHeader: (header: React.ReactNode | null) => void;
};
export const HeaderContext = React.createContext<HeaderContextType>({
  pickHeader: null,
  setPickHeader: () => {}
});
type Props = {
  children: React.ReactNode;
};
const HeaderStore: React.FC<Props> = ({ children }) => {
  const [pickHeader, setPickHeader] = useState<React.ReactNode>();

  return (
    <HeaderContext.Provider value={{ pickHeader, setPickHeader }}>
      {children}
    </HeaderContext.Provider>
  );
};

export default HeaderStore;
