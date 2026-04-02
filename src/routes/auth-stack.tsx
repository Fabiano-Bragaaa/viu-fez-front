import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Onboarding } from "@screens";

export type AuthStackParamList = {
  Onboarding: undefined;
};

const { Navigator, Screen } = createNativeStackNavigator<AuthStackParamList>();

export function AuthStack() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Onboarding" component={Onboarding} />
    </Navigator>
  );
}
