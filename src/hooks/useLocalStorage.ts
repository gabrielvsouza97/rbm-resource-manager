import { Dispatch, SetStateAction, useEffect, useState } from "react";

import { LOCAL_STORAGE } from "../constants";
import { LocalStorageNamespaces } from "types/local-storage";

export default function useLocalStorage<Return>(
  key: LocalStorageNamespaces,
  defaultValue = null as Return
): [Return, Dispatch<SetStateAction<Return>>] {
  const [localStorageState, setLocalStorageState] = useState(defaultValue);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(localStorageState));
  }, [localStorageState, key]);

  useEffect(() => {
    try {
      const authLs = JSON.parse(localStorage.getItem(LOCAL_STORAGE[key]) ?? "null");
      setLocalStorageState(authLs);
    } catch {
      setLocalStorageState(defaultValue);
    }
  }, [defaultValue, key]);

  return [localStorageState, setLocalStorageState];
}
