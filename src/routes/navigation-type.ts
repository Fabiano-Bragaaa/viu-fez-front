import { type NativeStackScreenProps } from "@react-navigation/native-stack";

import { type AuthStackParamList } from "./auth-stack";

declare global {
  namespace ReactNavigation {
    // eslint-disable-next-line @typescript-eslint/no-empty-object-type
    interface RootParamList extends AuthStackParamList {}
  }
}

export type AuthScreenProps<T extends keyof AuthStackParamList> =
  NativeStackScreenProps<AuthStackParamList, T>;
