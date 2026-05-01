import { authService } from "@domain";
import { useEffect } from "react";

import { useAuthStore } from "./use-auth";

export function useAuthStartup() {
  useEffect(() => {
    async function init() {
      const session = await authService.getSession();
      const { saveSession, setLoading } = useAuthStore.getState();
      if (session) {
        saveSession(session);
      }
      setLoading(false);
    }
    init();
  }, []);
}
