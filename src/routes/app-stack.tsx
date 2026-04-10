import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View } from "react-native";

export type AppStackParamList = {
  Home: undefined;
};

const { Navigator, Screen } = createNativeStackNavigator<AppStackParamList>();

function HomePlaceholder() {
  return <View className="flex-1 bg-background" />;
}

export function AppStack() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Home" component={HomePlaceholder} />
    </Navigator>
  );
}
