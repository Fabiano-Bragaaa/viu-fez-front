import { getFontFamily } from '@utils';
import type { VariantProps } from 'class-variance-authority';
import React from 'react';
import { Text as RNText } from 'react-native';
import { twMerge } from 'tailwind-merge';

import { textStyle } from './styles';

type TextVariants = VariantProps<typeof textStyle>;

type TextProps = Omit<React.ComponentProps<typeof RNText>, 'children'> &
  TextVariants & {
    children?: React.ReactNode;
    align?: 'left' | 'center' | 'right';
    weight?: 'normal' | 'bold' | 'semibold' | 'medium';
    family?: 'heading' | 'body';
  };

const Text = React.forwardRef<React.ComponentRef<typeof RNText>, TextProps>(
  function Text(
    {
      className,
      isTruncated,
      bold,
      underline,
      strikeThrough,
      size = 'body-md',
      italic,
      align = 'left',
      weight = 'normal',
      family = 'body',
      ...props
    },
    ref
  ) {
    const fontFamily = getFontFamily(weight, family);

    const computedClassName = textStyle({
      isTruncated,
      bold,
      underline,
      strikeThrough,
      size,
      italic,
    });

    return (
      <RNText
        style={{
          fontFamily,
          textAlign: align,
        }}
        className={twMerge(computedClassName, className)}
        {...props}
        ref={ref}
      />
    );
  }
);

Text.displayName = 'Text';

export { Text };
