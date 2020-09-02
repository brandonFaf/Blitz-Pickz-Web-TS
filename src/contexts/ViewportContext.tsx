import React from 'react';

export type ViewportContextType = {
  isMobile: boolean;
};
export const ViewportContext = React.createContext<ViewportContextType>({
  isMobile: true
});

const ViewportStore = ({ children }) => {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 620);

  const handleWindowResize = () => {
    setIsMobile(window.innerWidth < 620);
  };

  React.useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return (
    <ViewportContext.Provider value={{ isMobile }}>
      {children}
    </ViewportContext.Provider>
  );
};
export default ViewportStore;
