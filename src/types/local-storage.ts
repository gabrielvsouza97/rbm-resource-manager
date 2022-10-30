export type LocalStorageNamespaces = "auth";

export type LocalStorageAuth = {
  jwt: string;
  username: string;
  accessLevel: string;
} | null;
