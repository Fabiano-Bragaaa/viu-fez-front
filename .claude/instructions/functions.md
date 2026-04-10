# Functions

Always prefer named `function` declarations over `const` arrow functions.

Use `function` for hooks, service functions, handlers, and any top-level or exported logic.

`const` arrow functions are only acceptable for inline callbacks (e.g. inside `map`, `filter`, event handlers passed inline) or when required by a specific API.

## Services vs state hooks

In service modules, separate concerns into two types of exports:

- **State hooks**: read-only selectors that return store state (e.g. `useShowOnboarding`)
- **Service hooks**: hooks that return action functions to mutate state (e.g. `useSettingsService`)
