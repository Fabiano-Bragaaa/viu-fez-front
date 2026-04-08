import { colors } from '@theme';
import { cva } from 'class-variance-authority';

export const dotIndicatorContainer = cva('flex-row items-center gap-1');

export const dotConfig = {
  height: 8,
  borderRadius: 4,
  activeWidth: 20,
  inactiveWidth: 8,
  activeColor: colors.primary,
  inactiveColor: colors.muted,
};
