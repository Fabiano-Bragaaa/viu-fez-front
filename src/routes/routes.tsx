import { useAppFonts } from "@hooks";
import { NavigationContainer } from "@react-navigation/native";
import { useAuthStartup } from "@services";
import { colors } from "@theme";
import { ActivityIndicator, View } from "react-native";

import { AppStack } from "./app-stack";
import { AuthStack } from "./auth-stack";
import { OnboardingStack } from "./onboarding-stack";
import { type Stacks, useRouter } from "./use-router";

function LoadingScreen() {
  return (
    <View className="flex-1 bg-background items-center justify-center">
      <ActivityIndicator size="large" color={colors.primary} />
    </View>
  );
}

const stacks: Record<Stacks, React.ReactNode> = {
  loading: <LoadingScreen />,
  auth: <AuthStack />,
  onboarding: <OnboardingStack />,
  app: <AppStack />,
};

export function Routes() {
  const { fontsLoaded } = useAppFonts();
  const stack = useRouter();

  useAuthStartup();

  if (!fontsLoaded) {
    return <LoadingScreen />;
  }

  const Stack = stacks[stack];

  return <NavigationContainer>{Stack}</NavigationContainer>;
}
