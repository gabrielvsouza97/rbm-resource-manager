import { ReactNode, createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router";

import { LocalStorageAuth } from "types/local-storage";
import axiosInstance from "services/axios";
import useLocalStorage from "hooks/useLocalStorage";

type AuthContextProps = {
  children: ReactNode;
};

type UseAuth = {
  logout: () => void;
  login: (login: string, password: string) => void;
  localStorageAuth: LocalStorageAuth;
  loggedIn: boolean;
};

const AuthContext = createContext({} as UseAuth);

export default function AuthContextProvider({ children }: AuthContextProps) {
  const navigate = useNavigate();
  const [localStorageAuth, setLocalStorageAuth] = useLocalStorage<LocalStorageAuth>("auth");
  const [loggedIn, setLoggedIn] = useState(() => {
    return localStorageAuth ? true : false;
  });
  const location = useLocation();

  const logout = useCallback(() => {
    setLocalStorageAuth(null);
    setLoggedIn(false);
  }, [navigate, setLoggedIn, setLocalStorageAuth]);

  const login = useCallback(
    async (login: string, password: string) => {
      try {
        const request = await axiosInstance.post("/login", { login: login, senha: password });
        const data = request.data;
        setLocalStorageAuth(data);
      } catch {
        alert("senha errada");
      }
    },
    [setLocalStorageAuth, navigate]
  );

  const value = useMemo(
    () => ({
      logout,
      login,
      localStorageAuth,
      loggedIn,
    }),
    [localStorageAuth, logout, login, loggedIn]
  );

  useEffect(() => {
    if (loggedIn && location.pathname === "/") {
      navigate("/dashboard");
    } else if (!loggedIn && location.pathname !== "/") {
      navigate("/");
    }
  }, [location, loggedIn]);

  useEffect(() => {
    if (localStorageAuth) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, [localStorageAuth]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);
