import { create } from "zustand";

import { type AuthCredentialsType } from "./auth-type";

export const useAuthStore = create<AuthCredentialsType>((set) => ({
  session: null,
  isLoading: true,
  saveSession: (session) => set({ session }),
  removeSession: () => set({ session: null }),
  setLoading: (isLoading) => set({ isLoading }),
}));

export function useAuth(): AuthCredentialsType["session"] {
  return useAuthStore((state) => state.session);
}

export function useAuthService(): Omit<AuthCredentialsType, "session" | "setLoading"> {
  const saveSession = useAuthStore((state) => state.saveSession);
  const removeSession = useAuthStore((state) => state.removeSession);
  const isLoading = useAuthStore((state) => state.isLoading);

  return { saveSession, removeSession, isLoading };
}
