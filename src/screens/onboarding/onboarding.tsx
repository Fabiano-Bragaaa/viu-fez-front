import { useState } from "react";
import { View } from "react-native";

import { OnboardingPage } from "./components/onboarding-page";
import { onboardingPages } from "./onboarding-data";

export function Onboarding() {
  const [pageIndex, setPageIndex] = useState(0);

  function onPressNext() {
    const isLastPage = pageIndex === onboardingPages.length - 1;
    if (!isLastPage) {
      setPageIndex(pageIndex + 1);
    }
  }

  return (
    <View className="flex-1 bg-primary-frost">
      <OnboardingPage
        {...onboardingPages[pageIndex]}
        onPressNext={onPressNext}
        onPressSkip={() => {}}
      />
    </View>
  );
}
