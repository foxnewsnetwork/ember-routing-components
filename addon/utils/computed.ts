import {
  readOnly as emberReadOnly
} from "@ember/object/computed";
import ComputedProperty from "@ember/object/computed";
import { computed, get } from "@ember/object";

export function readOnly<T>(...keys: string[]): ComputedProperty<T> {
  return readOnly(keys.join('.'));
}

export function liftC1<T, X>(fn: (a: T) => X, key: string) {
  return computed(key, {
    get() {
      return fn(get(this, key));
    }
  }).readOnly();
}

export function liftC2<A1, A2, T>(fn: (a1: A1, a2: A2) => T, key1: string, key2: string) {
  return computed(key1, key2, {
    get() {
      return fn(get(this, key1), get(this, key2));
    }
  }).readOnly();
}
