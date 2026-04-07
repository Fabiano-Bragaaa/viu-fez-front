import { DotIndicator, Text } from "@components";
import { Pressable, View } from "react-native";

import { type OnboardingPageItem } from "../onboarding-data";

export type OnboardingPageProps = OnboardingPageItem & {
  onPressNext: () => void;
  onPressSkip: () => void;
};

export function OnboardingPage({
  title,
  description,
  index,
  total,
  isLast,
  onPressNext,
  onPressSkip,
}: OnboardingPageProps) {
  return (
    <View className="flex-1 bg-primary-frost">
      <View className="flex-1 items-center justify-center" />

      <View className="bg-card rounded-t-3xl px-6 pb-12 pt-8 items-center gap-6">
        <DotIndicator total={total} activeIndex={index} />

        <View className="items-center gap-3">
          <Text
            size="title-md"
            weight="bold"
            align="center"
            className="text-foreground">
            {title}
          </Text>
          <Text size="body-md" align="center" className="text-foreground/60">
            {description}
          </Text>
        </View>

        <Pressable
          className="bg-primary w-full rounded-xl py-4 items-center"
          onPress={onPressNext}>
          <Text size="body-md" weight="bold" className="text-white">
            {isLast ? "Começar" : "Próximo"}
          </Text>
        </Pressable>

        {!isLast && (
          <Pressable onPress={onPressSkip}>
            <Text size="body-md" className="text-foreground/60">
              Pular
            </Text>
          </Pressable>
        )}
      </View>
    </View>
  );
}
