# Component conventions

## Structure

Each component lives in its own directory under `src/components/`:

```
src/components/
  component-name/
    component-name.tsx
    component-name-preset.ts
```

## Components

Always use named `export function` for components. Never use `const` arrow functions as the default export.

When using a base UI element, prefer HeroUI Native components (`heroui-native`) over React Native primitives directly.

## Presets

Preset files are named `component-name-preset.ts`.

Use `cva` from `class-variance-authority` for style variants. Exports can be `const`.

Base styles and variants on the project theme — import colors from `@theme`.

## Exports

Export components from `src/components/index.ts`.
