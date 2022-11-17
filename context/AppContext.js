import React, { useContext } from 'react';

const AppContext = React.createContext();

export const useAppContext = () => useContext(AppContext);

export default function AppProvider({ children }) {       

  return (
    <AppContext.Provider value={{ }}> {children} </AppContext.Provider>
  );
}