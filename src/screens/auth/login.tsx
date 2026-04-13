import { AppleIcon, GoogleIcon } from "@assets";
import { Button, Icon, Page, Text } from "@components";
import { useAppTheme } from "@hooks";
import { View } from "react-native";

export function Login() {
  const { colors } = useAppTheme();
  return (
    <Page hidePadding>
      <View className="flex-1 items-center justify-center px-6">
        <View className="items-center gap-4 mb-8">
          <View className="w-16 h-16 rounded-2xl bg-primary-light items-center justify-center">
            <Icon name="utensils" size={32} color={colors.white} />
          </View>

          <Text
            size="headline-md"
            weight="bold"
            align="center"
            className="text-primary">
            ViuFez
          </Text>
        </View>

        <View className="items-center gap-2 mb-8">
          <Text size="title-md" weight="bold" align="center">
            Entrar no ViuFez
          </Text>
          <Text size="body-md" align="center" className="text-foreground/60">
            Crie sua conta grátis em segundos
          </Text>
        </View>

        <View className="w-full gap-3">
          <Button
            title="Continuar com Google"
            preset="white"
            leftIcon={<GoogleIcon size={20} />}
            onPress={() => {}}
          />

          <Button
            title="Continuar com Apple"
            preset="black"
            leftIcon={<AppleIcon size={20} />}
            onPress={() => {}}
          />
        </View>
      </View>
    </Page>
  );
}
