# TypeScript

## Type assertions

Never use `as` to cast types. Always model the correct type explicitly.

**Wrong:**

```ts
navigation.navigate("DrawerStack" as never);
const user = response as UserCredentials;
```

**Right:**

```ts
// useNavigation() is already globally typed via src/routes/navigation-type.ts
// RootParamList extends all param lists — no cast needed
const navigation = useNavigation();
navigation.navigate("DrawerStack");

// Type the response at the boundary
const user: UserCredentials = {
  token: response.token,
  // ...
};
```

If a type cast with `as` seems necessary, stop and fix the underlying type instead.

This includes `as const` — never use it. Instead, type the value explicitly with a proper type or interface.

## Navigation typing

`useNavigation()` is typed globally via `src/routes/navigation-type.ts`.
`RootParamList` already extends `AppStackParamList`, `AuthStackParamList`, `DrawerStackParamList` and `AppTabBottomTabParamList`.
Never pass a generic to `useNavigation()` or cast routes — the global declaration is sufficient.
