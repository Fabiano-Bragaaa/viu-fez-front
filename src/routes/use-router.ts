import { useShowOnboarding } from "@services";

export type Stacks = "loading" | "auth" | "onboarding" | "app";

export function useRouter(): Stacks {
  const showOnboarding = useShowOnboarding();

  if (false) {
    return "loading";
  }

  if (showOnboarding) {
    return "onboarding";
  }

  if (false) {
    return "app";
  }

  return "auth";
}
