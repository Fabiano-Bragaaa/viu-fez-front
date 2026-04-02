import { NavigationContainer } from "@react-navigation/native";

import { AuthStack } from "./auth-stack";

export function Routes() {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
}
