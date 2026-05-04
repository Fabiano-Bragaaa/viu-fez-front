import { useOnboardingSlide } from "@animations";
import { animations } from "@assets";
import { useSettingsService } from "@services";
import { useState } from "react";
import { View } from "react-native";
import Animated from "react-native-reanimated";

import { AnimationSection } from "./components/animation-section";
import { ContentSection } from "./components/content-section";
import { onboardingPages } from "./onboarding-data";

export function Onboarding() {
  const { finishOnboarding } = useSettingsService();
  const [pageIndex, setPageIndex] = useState(0);
  const { lottieStyle, screenStyle, animateToPage, animateSkip } = useOnboardingSlide();

  const page = onboardingPages[pageIndex];

  function onPressNext() {
    const isLastPage = pageIndex === onboardingPages.length - 1;
    if (isLastPage) {
      finishOnboarding();
    } else {
      animateToPage(pageIndex + 1, setPageIndex);
    }
  }

  function onPressSkip() {
    animateSkip(finishOnboarding);
  }

  return (
    <View className="flex-1 bg-primary-frost overflow-hidden">
      <Animated.View style={[{ flex: 1 }, screenStyle]}>
        <Animated.View style={[{ flex: 1 }, lottieStyle]}>
          <AnimationSection animation={animations[page.animation]} />
        </Animated.View>

        <ContentSection
          title={page.title}
          description={page.description}
          index={page.index}
          total={page.total}
          isLast={page.isLast}
          onPressNext={onPressNext}
          onPressSkip={onPressSkip}
        />
      </Animated.View>
    </View>
  );
}
