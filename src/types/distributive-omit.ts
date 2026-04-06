/**
 * Distributes `Omit` across each member of a union type, preserving the union structure.
 *
 * TypeScript's built-in `Omit<T, K>` does not distribute over unions — it collapses
 * all union members into a single flat type, losing discriminant information.
 *
 * `DistributiveOmit` fixes this by using a conditional type (`T extends T`) to
 * iterate over each member of the union individually, applying `Omit` to each one.
 *
 * @example
 * type A = { kind: 'a'; foo: string; bar: number };
 * type B = { kind: 'b'; foo: string; baz: boolean };
 * type AB = A | B;
 *
 * // Standard Omit collapses the union:
 * type Bad = Omit<AB, 'foo'>; // { kind: 'a' | 'b'; bar?: number; baz?: boolean }
 *
 * // DistributiveOmit preserves it:
 * type Good = DistributiveOmit<AB, 'foo'>; // { kind: 'a'; bar: number } | { kind: 'b'; baz: boolean }
 */
export type DistributiveOmit<T, K extends keyof T> = T extends T
  ? Omit<T, K>
  : never;
