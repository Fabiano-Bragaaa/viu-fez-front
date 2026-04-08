import { Animation } from "@components";
import { type LottieViewProps } from "lottie-react-native";
import { View } from "react-native";

export type AnimationSectionProps = {
  animation: LottieViewProps["source"];
};

export function AnimationSection({ animation }: AnimationSectionProps) {
  return (
    <View className="flex-1 items-center justify-center">
      <Animation
        source={animation}
        style={{ width: 300, height: 300 }}
        autoPlay
        loop
      />
    </View>
  );
}
