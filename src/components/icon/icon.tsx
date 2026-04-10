import { colors } from "@theme";
import { Apple, Bell, Globe, Home, Search, Settings, User, Utensils } from "lucide-react-native";

const icons = {
  home: Home,
  settings: Settings,
  user: User,
  bell: Bell,
  search: Search,
  utensils: Utensils,
  globe: Globe,
  apple: Apple,
};

type IconName = keyof typeof icons;

type IconProps = {
  name: IconName;
  size?: number;
  color?: string;
};

export function Icon({ name, size = 24, color = colors.foreground }: IconProps) {
  const LucideIcon = icons[name];
  return <LucideIcon size={size} color={color} />;
}
