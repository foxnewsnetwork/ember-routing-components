import ComputedProperty from "@ember/object/computed";
import EmberObject, { computed, getProperties } from "@ember/object";

type TransformFn<T> = (...args: Array<string>) => T;

export function thru<T>(depKeys: Array<string>, compFn: TransformFn<T>): ComputedProperty<T> {
  function getFn(this): T {
    const depVals = getProperties(this, depKeys);
    const compVals = depKeys.reduce((acc: Array<any>, key: string): Array<any> => {
      acc.push(depVals[key]);
      return acc;
    }, []);

    return compFn(...compVals);
  }
  // @ts-ignore: Ignore failure of ember typescript to splat arrays
  return computed<T>(...depKeys, getFn).readOnly();
}
