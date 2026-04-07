import { cva } from 'class-variance-authority';

export const textStyle = cva('text-foreground', {
  variants: {
    isTruncated: {
      true: 'web:truncate',
    },
    bold: {
      true: 'font-bold',
    },
    underline: {
      true: 'underline',
    },
    strikeThrough: {
      true: 'line-through',
    },
    size: {
      'body-md': 'text-body-md',
      'title-md': 'text-title-md',
      'headline-md': 'text-headline-md',
      'display-lg': 'text-display-lg',
    },
    italic: {
      true: 'italic',
    },
  },
  defaultVariants: {
    size: 'body-md',
  },
});
