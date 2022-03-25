import React, { useState } from "react";

export const PortafolioContext = React.createContext([{}, () => {}]);

export const PortafolioProvider = (props) => {

  const [ auth, setAuth ] = useState({
    auth: false,
  });
  

  return (
      <PortafolioContext.Provider value={[auth, setAuth]}>
          {props.children}
      </PortafolioContext.Provider>
  )
};
