import ComputedProperty  from "@ember/object/computed";
import { computed, get } from "@ember/object";

type F1<A, B> = (a: A) => B;

interface HasFn<T> {
  fn: T
}

export function apfn<T extends HasFn<F1<T[keyof T], O>>, O>(
  a: keyof T
): ComputedProperty<O> {
  return computed('fn', a, {
    get(this: T) {
      const fn = get(this, 'fn');
      const valA = get(this, a);

      return typeof fn === 'function' ? fn(valA) : null;
    }
  }).readOnly();
}


/**
 * Creates a curried function; this is as strongly typed
 * as I can make it lol
 */
export function curryFn<
  T extends HasFn<(a: T[keyof T], b: T[keyof T]) => O>,
  O
>(keyA: keyof T): ComputedProperty<(a: T[keyof T]) => O> {
  return computed(keyFn, keyA, {
    get(this: T) {
      const fn = get(this, keyFn);
      const a = get(this, keyA);

      return (b) => fn(a, b);
    }
  })
}
