import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "@screens";

export type AuthStackParamList = {
  Login: undefined;
};

const { Navigator, Screen } = createNativeStackNavigator<AuthStackParamList>();

export function AuthStack() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Login" component={Login} />
    </Navigator>
  );
}
