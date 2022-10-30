import { ReactNode, createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

import { LocalStorageAuth } from "types/local-storage";
import useLocalStorage from "hooks/useLocalStorage";
import { useNavigate } from "react-router";

type AuthContextProps = {
  children: ReactNode;
};

type UseAuth = {
  logout: () => void;
  login: () => void;
  localStorageAuth: LocalStorageAuth;
  loggedIn: boolean;
};

const AuthContext = createContext({} as UseAuth);

export default function AuthContextProvider({ children }: AuthContextProps) {
  const navigate = useNavigate();
  const [localStorageAuth, setLocalStorageAuth] = useLocalStorage<LocalStorageAuth>("auth");
  const [loggedIn, setLoggedIn] = useState(false);

  const logout = useCallback(() => {
    setLocalStorageAuth(null);
    setLoggedIn(false);
    navigate("/");
  }, [navigate, setLoggedIn, setLocalStorageAuth]);

  const login = useCallback(() => {
    setLocalStorageAuth({ accessLevel: "2", jwt: "18237812378", username: "daniel" });
    setLoggedIn(true);
    navigate("/dashboard");
  }, [navigate, setLoggedIn, setLocalStorageAuth]);

  const value = useMemo(
    () => ({
      logout,
      login,
      localStorageAuth,
      loggedIn,
    }),
    [localStorageAuth, logout, login, loggedIn]
  );

  useEffect(() => console.log("loggedIn", loggedIn), [loggedIn]);

  useEffect(() => {
    if (localStorageAuth) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, [loggedIn, localStorageAuth]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);
