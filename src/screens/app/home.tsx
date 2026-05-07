import { Icon, Image, Page, Text } from "@components";
import { useAppTheme } from "@hooks";
import { useAuth } from "@services";
import { View } from "react-native";

export function Home() {
  const { colors } = useAppTheme();
  const session = useAuth();

  return (
    <Page>
      <View className="flex-row items-center justify-between mb-6">
        <View>
          <Text size="body-md" className="text-foreground/60">
            Olá,
          </Text>
          <Text size="title-md" weight="bold">
            {session?.user.name ?? ""}
          </Text>
        </View>

        <View className="w-10 h-10 rounded-full bg-primary-frost items-center justify-center">
          {session?.user.image ? (
            <Image
              source={{ uri: session.user.image }}
              className="w-10 h-10 rounded-full"
            />
          ) : (
            <Icon name="user" size={20} color={colors.primary} />
          )}
        </View>
      </View>
    </Page>
  );
}
