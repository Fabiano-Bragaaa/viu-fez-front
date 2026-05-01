import { authApi } from "./auth-api";
import { type AuthSession } from "./auth-type";

async function signInWithGoogle(): Promise<AuthSession | null> {
  await authApi.signInWithGoogle();
  return authApi.getSession();
}

async function getSession(): Promise<AuthSession | null> {
  return authApi.getSession();
}

async function signOut(): Promise<void> {
  await authApi.signOut();
}

export const authService = {
  signInWithGoogle,
  getSession,
  signOut,
};
