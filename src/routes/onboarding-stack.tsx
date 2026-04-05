import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Onboarding } from "@screens";

export type OnboardingStackParamList = {
  Onboarding: undefined;
};

const { Navigator, Screen } =
  createNativeStackNavigator<OnboardingStackParamList>();

export function OnboardingStack() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Onboarding" component={Onboarding} />
    </Navigator>
  );
}
