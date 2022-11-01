import { LoginResponse } from "types/auth";

export default function localStorageHandler() {
  function getJwt() {
    try {
      const parsedLocalStorage = JSON.parse(localStorage.getItem("auth") ?? "") as LoginResponse;
      return parsedLocalStorage.retorno.jwt;
    } catch {
      return undefined;
    }
  }

  return { getJwt };
}
