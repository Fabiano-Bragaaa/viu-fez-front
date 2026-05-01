import { type AuthSession } from "@domain";

export interface AuthCredentialsType {
  session: AuthSession | null;
  isLoading: boolean;
  saveSession: (session: AuthSession) => void;
  removeSession: () => void;
  setLoading: (value: boolean) => void;
}
