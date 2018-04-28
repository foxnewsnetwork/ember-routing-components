import { helper } from '@ember/component/helper';

type CurryParams<A, B> = [(a: A, ...rest: any[]) => B, A];
type OutFn<B> = (...rest: any[]) => B;

class MissingFunctionError extends Error {
  constructor(msg) {
    super(msg);
    this.name = 'MissingFunctionError';
  }
}

export function routingCurryFn<A, B>(params: CurryParams<A, B>): OutFn<B> {
  const [fn, arg] = params;

  if (fn instanceof Function) {
    return  (...rest: any[]) => fn(arg, ...rest);
  } else {
    throw new MissingFunctionError(`
      I expected to be given a function, but you gave me something not callable.
      You most likely have a bug in your code or are using null-able functions

      You passed in the following params: 
      
      ${params}
    `);
  }
}

// @ts-ignore
export default helper(routingCurryFn);
