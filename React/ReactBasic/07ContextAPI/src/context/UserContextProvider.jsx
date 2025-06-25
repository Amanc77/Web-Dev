import React from "react";
import { useState } from "react";

import UsrContext from "../context/UserContext";

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <UsrContext.Provider value={{ user, setUser }}>
      {children}
    </UsrContext.Provider>
  );
};
export default UserContextProvider;
