import {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  WithSpringConfig,
} from "react-native-reanimated";

import { animationConfig } from "../config/animation";

type UsePressAnimationProps = {
  scaleActive?: number;
  springConfig?: WithSpringConfig;
};

export function usePressAnimation({
  scaleActive = 0.95,
  springConfig = animationConfig.spring,
}: UsePressAnimationProps = {}) {
  const scale = useSharedValue(1);

  function handlePressIn() {
    scale.value = withSpring(scaleActive, springConfig);
  }

  function handlePressOut() {
    scale.value = withSpring(1, springConfig);
  }

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return { handlePressIn, handlePressOut, animatedStyle };
}
