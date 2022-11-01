import { LoginResponse } from "./auth";

export type LocalStorageNamespaces = "auth";

export type LocalStorageAuth = LoginResponse | null;
