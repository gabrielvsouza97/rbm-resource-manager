import { LocalStorageNamespaces } from "types/local-storage";

export default function localStorageHandler() {
  function getData(namespace: LocalStorageNamespaces, key: string) {
    try {
      const localStorageParsed = JSON.parse(localStorage.getItem(namespace) ?? "{}")[key];
      return localStorageParsed;
    } catch {
      return {};
    }
  }

  function setData(namespace: LocalStorageNamespaces, key: string, value: any) {
    const newLocalStorage = { ...getData(namespace, key), [key]: value };
    localStorage.setItem(namespace, newLocalStorage);
  }

  return { getData, setData };
}
