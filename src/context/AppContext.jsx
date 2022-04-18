import React, { useState, createContext, useContext } from "react";

const AppContext = createContext([]);

export const useAppContext = () => useContext(AppContext);

const AppContextProvider = ({ children }) => {

  const [searchParams, setSearchParams] = useState();
  

  return (
    <AppContext.Provider value={{ searchParams, setSearchParams }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;