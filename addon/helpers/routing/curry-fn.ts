import { helper } from '@ember/component/helper';

type CurryParams<A, B, C> = [(a: A, b: B) => C, A];
export function routingCurryFn<A, B, C>(params: CurryParams<A, B, C>): (b: B) => C {
  const [fn, arg] = params;

  return (b: B) => fn(arg, b);
}

// @ts-ignore
export default helper(routingCurryFn);
