import { useAuth, useAuthStore, useShowOnboarding } from "@services";

export type Stacks = "loading" | "auth" | "onboarding" | "app";

export function useRouter(): Stacks {
  const showOnboarding = useShowOnboarding();
  const session = useAuth();
  const isLoading = useAuthStore((state) => state.isLoading);

  if (isLoading) {
    return "loading";
  }

  if (showOnboarding) {
    return "onboarding";
  }

  if (session) {
    return "app";
  }

  return "auth";
}
