import { helper } from '@ember/component/helper';

type Params<A> = [() => A]

class NotFunctionError extends Error {
  constructor(msg) {
    super(msg);
    this.name = 'NotFunctionError';
  }
}
export function routingCallFn<A>(params: Params<A>): A {
  const [fn] = params;

  if (fn instanceof Function) {
    return fn();
  } else {
    throw new NotFunctionError(`
      I expected to be given a function of arity 1,
      instead you gave me something that's not a function.

      Here's what you gave me:

      [${fn}]
    `);
  }
}

export default helper(routingCallFn);
