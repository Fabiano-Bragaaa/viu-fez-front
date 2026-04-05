import { type NativeStackScreenProps } from "@react-navigation/native-stack";

import { type AuthStackParamList } from "./auth-stack";
import { type OnboardingStackParamList } from "./onboarding-stack";

declare global {
  namespace ReactNavigation {
    interface RootParamList
      extends AuthStackParamList,
        OnboardingStackParamList {}
  }
}

export type OnboardingScreenProps<T extends keyof OnboardingStackParamList> =
  NativeStackScreenProps<OnboardingStackParamList, T>;

export type AuthScreenProps<T extends keyof AuthStackParamList> =
  NativeStackScreenProps<AuthStackParamList, T>;
