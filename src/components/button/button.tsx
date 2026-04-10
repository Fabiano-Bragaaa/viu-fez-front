import { type DistributiveOmit } from "@types";
import { Button as HeroButton, type ButtonRootProps } from "heroui-native";
import { type ReactNode } from "react";
import { ActivityIndicator, View } from "react-native";
import { twMerge } from "tailwind-merge";

import { Text } from "../text/text";
import {
  buttonContainer,
  buttonIndicatorColor,
  buttonLabel,
  type ButtonPreset,
} from "./button-preset";

export type ButtonProps = DistributiveOmit<ButtonRootProps, "variant"> & {
  title: string;
  preset?: ButtonPreset;
  loading?: boolean;
  leftIcon?: ReactNode;
};

export function Button({
  title,
  preset = "primary",
  loading = false,
  isDisabled = false,
  leftIcon,
  className,
  ...props
}: ButtonProps) {
  const isButtonDisabled = isDisabled || loading;
  const indicatorColor = buttonIndicatorColor[preset];

  return (
    <HeroButton
      isDisabled={isButtonDisabled}
      variant="ghost"
      className={twMerge(
        buttonContainer({ preset, disabled: isButtonDisabled }),
        className,
      )}
      {...props}>
      {loading ? (
        <ActivityIndicator color={indicatorColor} />
      ) : (
        <>
          {leftIcon && <View className="mr-3">{leftIcon}</View>}
          <Text
            size="body-md"
            weight="bold"
            className={buttonLabel({ preset, disabled: isButtonDisabled })}>
            {title}
          </Text>
        </>
      )}
    </HeroButton>
  );
}
