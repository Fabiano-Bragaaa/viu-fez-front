import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View } from "react-native";

export type AuthStackParamList = {
  Login: undefined;
};

const { Navigator, Screen } =
  createNativeStackNavigator<AuthStackParamList>();

function LoginPlaceholder() {
  return <View className="flex-1 bg-background" />;
}

export function AuthStack() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Login" component={LoginPlaceholder} />
    </Navigator>
  );
}
