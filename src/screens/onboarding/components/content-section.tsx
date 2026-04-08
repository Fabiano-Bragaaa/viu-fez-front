import { Button, DotIndicator, Text } from "@components";
import { View } from "react-native";

type ContentSectionProps = {
  title: string;
  description: string;
  index: number;
  total: number;
  isLast: boolean;
  onPressNext: () => void;
  onPressSkip: () => void;
};

export function ContentSection({
  title,
  description,
  index,
  total,
  isLast,
  onPressNext,
  onPressSkip,
}: ContentSectionProps) {
  return (
    <View className="bg-card rounded-t-3xl px-6 pb-12 pt-8 items-center gap-6">
      <DotIndicator total={total} activeIndex={index} />

      <View className="items-center gap-3">
        <Text size="title-md" weight="bold" align="center" className="text-foreground">
          {title}
        </Text>
        <Text size="body-md" align="center" className="text-foreground/60">
          {description}
        </Text>
      </View>

      <Button title={isLast ? "Começar" : "Próximo"} onPress={onPressNext} />

      {!isLast && (
        <Text size="body-md" className="text-foreground/60" onPress={onPressSkip}>
          Pular
        </Text>
      )}
    </View>
  );
}
