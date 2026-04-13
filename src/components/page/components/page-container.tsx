import { useAppTheme } from '@hooks';
import { LinearGradient } from "expo-linear-gradient";
import { type PropsWithChildren } from "react";
import { ScrollView, View } from "react-native";
import { twMerge } from "tailwind-merge";

export function ViewPage({ children }: PropsWithChildren) {
  return <>{children}</>;
}

export function ScrollPage({ children }: PropsWithChildren) {
  const TAB_BAR_SPACE = 130;
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1, paddingBottom: TAB_BAR_SPACE }}
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="handled">
      {children}
    </ScrollView>
  );
}

interface ScreenBackgroundProps {
  children?: React.ReactNode;
  className?: string;
}

export function ScreenBackground({
  children,
  className,
}: ScreenBackgroundProps) {
  const { gradients } = useAppTheme();

  return (
    <View className={twMerge("flex-1", className)}>
      <View className="absolute top-0 left-0 w-full h-full">
        <LinearGradient
          colors={gradients.screenBackground}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          locations={[0, 0.4]}
          style={{ width: "100%", height: "100%" }}
        />
      </View>

      {children}
    </View>
  );
}
