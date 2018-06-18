import {
  readOnly as emberReadOnly
} from "@ember/object/computed";
import ComputedProperty from "@ember/object/computed";

export function readOnly<T>(...keys: string[]): ComputedProperty<T> {
  return readOnly(keys.join('.'));
}
