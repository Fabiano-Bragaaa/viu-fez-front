import { useAppMutation } from "@infra";
import { useAuthService } from "@services";

import { authService } from "../auth-service";
import { type AuthSession } from "../auth-type";

export function useSignInWithGoogle() {
  const { saveSession } = useAuthService();

  return useAppMutation<AuthSession | null, void>({
    mutationFn: () => authService.signInWithGoogle(),
    onSuccess: session => {
      if (session) {
        saveSession(session);
      }
    },
    onError: error => {
      console.log("Erro ao entrar com Google", error.message);
    },
  });
}
