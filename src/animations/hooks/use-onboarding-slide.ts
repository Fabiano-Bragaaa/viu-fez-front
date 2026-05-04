import { Dimensions } from "react-native";
import { scheduleOnRN } from "react-native-worklets";
import {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

const { width, height } = Dimensions.get("window");

export function useOnboardingSlide() {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const lottieStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  const screenStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  function animateToPage(nextIndex: number, onSetPage: (index: number) => void) {
    translateX.value = withTiming(-width, { duration: 250 }, () => {
      scheduleOnRN(onSetPage, nextIndex);
      translateX.value = width;
      translateX.value = withTiming(0, { duration: 250 });
    });
  }

  function animateSkip(onFinish: () => void) {
    translateY.value = withTiming(height, { duration: 400 }, () => {
      scheduleOnRN(onFinish);
    });
  }

  return { lottieStyle, screenStyle, animateToPage, animateSkip };
}
