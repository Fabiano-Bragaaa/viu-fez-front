import { useRef, useState } from "react";
import { FlatList, type ListRenderItemInfo, View } from "react-native";

import { OnboardingPage } from "./components/onboarding-page";
import { type OnboardingPageItem, onboardingPages } from "./onboarding-data";

export function Onboarding() {
  const [pageIndex, setPageIndex] = useState(0);
  const flatListRef = useRef<FlatList<OnboardingPageItem>>(null);

  function onPressNext() {
    const isLastPage = pageIndex === onboardingPages.length - 1;
    if (!isLastPage) {
      const nextPageIndex = pageIndex + 1;
      flatListRef.current?.scrollToIndex({
        index: nextPageIndex,
        animated: true,
      });
      setPageIndex(nextPageIndex);
    }
  }

  function renderItem({ item }: ListRenderItemInfo<OnboardingPageItem>) {
    return (
      <OnboardingPage
        {...item}
        onPressNext={onPressNext}
        onPressSkip={() => {}}
      />
    );
  }

  return (
    <View className="flex-1 bg-primary-frost">
      <FlatList
        ref={flatListRef}
        data={onboardingPages}
        renderItem={renderItem}
        keyExtractor={item => item.index.toString()}
        showsHorizontalScrollIndicator={false}
        horizontal
        scrollEnabled={false}
      />
    </View>
  );
}
