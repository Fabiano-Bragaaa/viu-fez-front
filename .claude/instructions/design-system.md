# Design System

## Colors

All colors are defined in `src/theme/colors.ts` and registered as Tailwind tokens in `global.css`.

Always use theme tokens — never hardcode hex values.

| Token           | Hex       | Tailwind class        |
|-----------------|-----------|-----------------------|
| white           | #FFFFFF   | `bg-white` / `text-white` |
| background      | #F6F6F6   | `bg-background`       |
| foreground      | #2D2F2F   | `bg-foreground` / `text-foreground` |
| card            | #FFFFFF   | `bg-card`             |
| muted           | #DBDDDD   | `bg-muted` / `text-muted` |
| primary         | #00694B   | `bg-primary` / `text-primary` |
| primary-light   | #1D9E75   | `bg-primary-light`    |
| primary-glow    | #8CFECE   | `bg-primary-glow`     |
| primary-frost   | #E6FFF5   | `bg-primary-frost`    |
| secondary       | #06D6B4   | `bg-secondary`        |
| tertiary        | #00D9FE   | `bg-tertiary`         |

### Gradients

Defined in `src/theme/colors.ts` under `gradients`. Access via the `useAppTheme` hook.

- `screenBackground`: `["#E1F5EE", "#FFFFFF"]` — applied top-to-bottom, fading out at 40%

All screens use `ScreenBackground` from `src/components/page/components/page-container.tsx`, which renders this gradient as the base layer.

## Typography

### Font Families

Two font families are used, resolved by role via `getFontFamily` from `@utils`:

| Role      | Family           | Usage                  |
|-----------|------------------|------------------------|
| `body`    | Be Vietnam Pro   | Default for all text   |
| `heading` | Plus Jakarta Sans| Titles, display text   |

### Font Weights

| Weight     | Body font                   | Heading font                     |
|------------|-----------------------------|----------------------------------|
| `normal`   | BeVietnamPro_400Regular     | PlusJakartaSans_400Regular       |
| `medium`   | BeVietnamPro_500Medium      | PlusJakartaSans_500Medium        |
| `semibold` | BeVietnamPro_600SemiBold    | PlusJakartaSans_600SemiBold      |
| `bold`     | BeVietnamPro_700Bold        | PlusJakartaSans_700Bold          |

### Font Sizes

Defined as Tailwind tokens in `global.css`:

| Token         | rem     | px  | Tailwind class       |
|---------------|---------|-----|----------------------|
| `body-md`     | 0.875   | 14  | `text-body-md`       |
| `title-md`    | 1.125   | 18  | `text-title-md`      |
| `headline-md` | 1.75    | 28  | `text-headline-md`   |
| `display-lg`  | 3.5     | 56  | `text-display-lg`    |

### Text Component

All text must use `<Text>` from `src/components/text/text.tsx`. Never use `<RNText>` directly.

Props:

- `size`: `body-md` (default) | `title-md` | `headline-md` | `display-lg`
- `weight`: `normal` (default) | `medium` | `semibold` | `bold`
- `family`: `body` (default) | `heading`
- `align`: `left` (default) | `center` | `right`
- `bold`, `italic`, `underline`, `strikeThrough`, `isTruncated`: boolean variants

## Spacing

Spacing follows the standard Tailwind 4-point scale. All values below are established conventions in this project:

| Context                        | Value       | Tailwind         |
|--------------------------------|-------------|------------------|
| Page horizontal padding        | 16px        | `px-4`           |
| Button horizontal padding      | 20px        | `px-5`           |
| Button height                  | 50px        | `h-[50px]`       |
| Button icon margin right       | 12px        | `mr-3`           |
| Dot indicator gap              | 4px         | `gap-1`          |
| Scroll page bottom clearance   | 130px       | inline style     |

## Border Radius

| Context      | Value       | Tailwind      |
|--------------|-------------|---------------|
| Button       | rounded-xl  | `rounded-xl`  |
| Dot active   | 4px         | inline style  |

## Page Layout

All screens must use the `<Page>` component from `src/components/page/page.tsx`.

- Wraps content in `KeyboardAvoidingView` (iOS: `padding` behavior)
- Renders `ScreenBackground` (gradient) as base layer
- Applies safe area insets via `useSafeAreaInsets` to `paddingTop` and `paddingBottom`
- Default horizontal padding: `px-4`
- `hidePadding` prop removes horizontal padding
- `scroll` prop switches the inner container to `ScrollView`

## Buttons

Use `<Button>` from `src/components/button/button.tsx`.

Available presets:

| Preset    | Background    | Text / Border         |
|-----------|---------------|-----------------------|
| `primary` | `bg-primary`  | `text-white`          |
| `outline` | transparent   | `border-primary` / `text-primary` |
| `ghost`   | transparent   | `text-primary`        |
| `danger`  | `bg-red-500`  | `text-white`          |
| `white`   | `bg-white`    | `border-muted` / `text-foreground` |
| `black`   | `bg-foreground` | `text-white`        |

Disabled state: `opacity-50` regardless of preset. Loading state replaces label with `ActivityIndicator` using the preset's indicator color.

Button label always uses `size="body-md"` and `weight="bold"`.
