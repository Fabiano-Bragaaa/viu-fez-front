import { useAppFonts } from "@hooks";
import { NavigationContainer } from "@react-navigation/native";
import { colors } from "@theme";
import { ActivityIndicator, View } from "react-native";

import { AuthStack } from "./auth-stack";

export function Routes() {
  const { fontsLoaded } = useAppFonts();

  if (!fontsLoaded) {
    return (
      <View className="flex-1 bg-background">
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
}
