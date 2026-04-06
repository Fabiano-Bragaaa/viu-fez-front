import { colors } from '@theme';
import { cva } from "class-variance-authority";

export type ButtonPreset = "primary" | "outline" | "ghost" | "danger";

export const buttonContainer = cva(
  "w-full rounded-xl h-[50px] flex-row items-center justify-center px-5",
  {
    variants: {
      preset: {
        primary: "bg-primary",
        outline: "border border-primary bg-transparent",
        ghost: "bg-transparent",
        danger: "bg-red-500",
      },
      disabled: {
        true: "opacity-50",
        false: "",
      },
    },
    defaultVariants: {
      preset: "primary",
      disabled: false,
    },
  },
);

export const buttonIndicatorColor: Record<ButtonPreset, string> = {
  primary: "#FFFFFF",
  outline: colors.primary,
  ghost: colors.primary,
  danger: "#FFFFFF",
};

export const buttonLabel = cva("", {
  variants: {
    preset: {
      primary: "text-white",
      outline: "text-primary",
      ghost: "text-primary",
      danger: "text-white",
    },
    disabled: {
      true: "text-muted",
      false: "",
    },
  },
  defaultVariants: {
    preset: "primary",
    disabled: false,
  },
});
