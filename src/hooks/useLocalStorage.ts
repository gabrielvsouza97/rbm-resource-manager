import { Dispatch, SetStateAction, useEffect, useState } from "react";

import { LOCAL_STORAGE } from "../constants";
import { LocalStorageNamespaces } from "types/local-storage";

export default function useLocalStorage<Return>(key: LocalStorageNamespaces): [Return, Dispatch<SetStateAction<Return>>] {
  const [localStorageState, setLocalStorageState] = useState(() => {
    return JSON.parse(localStorage.getItem(key) ?? "");
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(localStorageState));
  }, [localStorageState, key]);

  useEffect(() => {
    try {
      const authLs = JSON.parse(localStorage.getItem(LOCAL_STORAGE[key]) ?? "undefined");
      setLocalStorageState(authLs);
    } catch {
      setLocalStorageState(undefined);
    }
  }, [key]);

  return [localStorageState, setLocalStorageState];
}
