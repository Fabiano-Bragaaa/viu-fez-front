import { authClient } from "@api";

import { type AuthSession } from "./auth-type";

async function signInWithGoogle(): Promise<void> {
  await authClient.signIn.social({
    provider: "google",
    callbackURL: "viufez://",
  });
}

async function getSession(): Promise<AuthSession | null> {
  const { data } = await authClient.getSession();
  if (!data) return null;

  return {
    user: {
      id: data.user.id,
      name: data.user.name,
      email: data.user.email,
      image: data.user.image ?? null,
    },
    token: data.session.token,
  };
}

async function signOut(): Promise<void> {
  await authClient.signOut();
}

export const authApi = {
  signInWithGoogle,
  getSession,
  signOut,
};
