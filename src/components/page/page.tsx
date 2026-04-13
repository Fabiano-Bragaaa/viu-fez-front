import { KeyboardAvoidingView, Platform, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { twMerge } from "tailwind-merge";

import {
  ScreenBackground,
  ScrollPage,
  ViewPage,
} from "./components/page-container";

export interface PageProps {
  children?: React.ReactNode;
  scroll?: boolean;
  hidePadding?: boolean;
  className?: string;
}

export function Page({
  children,
  scroll = false,
  hidePadding = false,
  className,
}: PageProps) {
  const { bottom, top } = useSafeAreaInsets();
  const Container = scroll ? ScrollPage : ViewPage;

  return (
    <KeyboardAvoidingView
      className="flex-1"
      behavior={Platform.OS === "ios" ? "padding" : undefined}>
      <ScreenBackground>
        <Container>
          <View
            className={twMerge("flex-1", !hidePadding && "px-4", className)}
            style={{ paddingBottom: bottom, paddingTop: top }}>
            {children}
          </View>
        </Container>
      </ScreenBackground>
    </KeyboardAvoidingView>
  );
}
