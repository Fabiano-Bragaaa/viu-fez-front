import { expoClient } from "@better-auth/expo/client";
import { createAuthClient } from "better-auth/react";
import * as SecureStore from "expo-secure-store";

function getBaseUrl(): string {
  const url = process.env.EXPO_PUBLIC_API_URL;
  if (!url) {
    throw new Error("EXPO_PUBLIC_API_URL is not set");
  }
  return url;
}

export const authClient = createAuthClient({
  baseURL: getBaseUrl(),
  plugins: [
    expoClient({
      scheme: "viufez",
      storagePrefix: "viufez",
      storage: SecureStore,
    }),
  ],
});
