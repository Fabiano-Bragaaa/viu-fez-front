import { type NativeStackScreenProps } from "@react-navigation/native-stack";

import { type AppStackParamList } from "./app-stack";
import { type AuthStackParamList } from "./auth-stack";
import { type OnboardingStackParamList } from "./onboarding-stack";

export type RootParamListType = AppStackParamList & AuthStackParamList & OnboardingStackParamList;

declare global {
  namespace ReactNavigation {
    // eslint-disable-next-line @typescript-eslint/no-empty-object-type
    interface RootParamList extends RootParamListType {}
  }
}

export type OnboardingScreenProps<T extends keyof OnboardingStackParamList> =
  NativeStackScreenProps<OnboardingStackParamList, T>;

export type AuthScreenProps<T extends keyof AuthStackParamList> =
  NativeStackScreenProps<AuthStackParamList, T>;

export type AppScreenProps<T extends keyof AppStackParamList> =
  NativeStackScreenProps<AppStackParamList, T>;
