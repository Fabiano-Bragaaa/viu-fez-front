import LottieView, { type LottieViewProps } from "lottie-react-native";

type Props = LottieViewProps;

export function Animation({ ...props }: Props) {
  return <LottieView autoPlay {...props} />;
}
