type Weight = 'normal' | 'bold' | 'semibold' | 'medium';
type FontRole = 'heading' | 'body';

export function getFontFamily(weight: Weight, role: FontRole = 'body'): string {
  if (role === 'heading') {
    switch (weight) {
      case 'bold':
        return 'PlusJakartaSans_700Bold';
      case 'semibold':
        return 'PlusJakartaSans_600SemiBold';
      case 'medium':
        return 'PlusJakartaSans_500Medium';
      default:
        return 'PlusJakartaSans_400Regular';
    }
  }

  switch (weight) {
    case 'bold':
      return 'BeVietnamPro_700Bold';
    case 'semibold':
      return 'BeVietnamPro_600SemiBold';
    case 'medium':
      return 'BeVietnamPro_500Medium';
    default:
      return 'BeVietnamPro_400Regular';
  }
}
