import { animations } from "@assets";
import { useState } from "react";
import { View } from "react-native";

import { AnimationSection } from "./components/animation-section";
import { ContentSection } from "./components/content-section";
import { onboardingPages } from "./onboarding-data";

export function Onboarding() {
  const [pageIndex, setPageIndex] = useState(0);

  const page = onboardingPages[pageIndex];

  function onPressNext() {
    const isLastPage = pageIndex === onboardingPages.length - 1;
    if (!isLastPage) {
      setPageIndex(pageIndex + 1);
    }
  }

  return (
    <View className="flex-1 bg-primary-frost">
      <AnimationSection animation={animations[page.animation]} />

      <ContentSection
        title={page.title}
        description={page.description}
        index={page.index}
        total={page.total}
        isLast={page.isLast}
        onPressNext={onPressNext}
        onPressSkip={() => {}}
      />
    </View>
  );
}
