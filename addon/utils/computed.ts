import ComputedProperty  from "@ember/object/computed";
import { computed, get } from "@ember/object";

type Fn3<A, B, C, D> = (a: A, b: B, c: C) => D;

export function thru3<T, O>(
  a: keyof T, 
  b: keyof T, 
  c: keyof T, 
  fn: Fn3<T[keyof T], T[keyof T], T[keyof T], O>
): ComputedProperty<O> {
  return computed(a, b, c, {
    get(this: T) {
      const valA = get(this, a);
      const valB = get(this, b);
      const valC = get(this, c);

      return fn(valA, valB, valC);
    }
  }).readOnly();
}