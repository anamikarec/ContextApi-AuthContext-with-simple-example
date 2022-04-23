import { createContext, useState } from "react";

export const AuthContext = createContext();
const AppContextProvider = ({ children }) => {
  const [auth, setAuth] = useState(false);
  const handleLogin = () => {
    setAuth(true);
  };
  const handleLogout = () => {
    setAuth(false);
  };
  const value = { auth, handleLogin, handleLogout };
  return <AuthContext.Provider value={value}>{children} </AuthContext.Provider>;
};

export default AppContextProvider;
