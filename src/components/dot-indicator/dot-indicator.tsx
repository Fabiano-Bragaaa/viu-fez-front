import { useEffect } from 'react';
import { View } from 'react-native';
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import { dotConfig, dotIndicatorContainer } from './dot-indicator-preset';

type DotIndicatorProps = {
  total: number;
  activeIndex: number;
};

type DotProps = {
  isActive: boolean;
};

function Dot({ isActive }: DotProps) {
  const progress = useSharedValue(isActive ? 1 : 0);

  useEffect(() => {
    progress.value = withTiming(isActive ? 1 : 0, { duration: 300 });
  }, [isActive, progress]);

  const animatedStyle = useAnimatedStyle(() => ({
    width:
      progress.value * (dotConfig.activeWidth - dotConfig.inactiveWidth) +
      dotConfig.inactiveWidth,
    backgroundColor: interpolateColor(
      progress.value,
      [0, 1],
      [dotConfig.inactiveColor, dotConfig.activeColor],
    ),
  }));

  return (
    <Animated.View
      style={[{ height: dotConfig.height, borderRadius: dotConfig.borderRadius }, animatedStyle]}
    />
  );
}

export function DotIndicator({ total, activeIndex }: DotIndicatorProps) {
  return (
    <View className={dotIndicatorContainer()}>
      {Array.from({ length: total }).map((_, index) => (
        <Dot key={index} isActive={index === activeIndex} />
      ))}
    </View>
  );
}
