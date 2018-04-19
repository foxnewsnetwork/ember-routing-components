export type RedirectFn<ID> = (target: ID, parent?: ID) => void;
export type CheckActiveFn<T, ID> = (state: T, routeId: ID) => boolean;

export interface RouteLike<T, ID> {
  /**
   * Passed in attribute
   *
   * The generate state of the routing system. In order to accommodate
   * any possible routing strategy, we don't specify what your state must
   * look like.
   *
   * @attr
   */
  state: T;

  /**
   * Passed in attribute
   *
   * Takes a state and a routeId of your choosing and determines if
   * the route should be considered active or not. IDs are typically
   * strings, though nothing necessarily enforces this to be the case
   *
   * @attr
   */
  checkActive: CheckActiveFn<T, ID>;

  /**
   * Passed in attribute
   *
   * An way to update your state; the update can be asynchronous
   *
   * @attr
   */
  redirect: RedirectFn<ID>;
}

class ForgotToImplementCheckActiveFunctionError extends Error {
  constructor(msg) {
    super(msg);
    this.name = 'ForgotToImplementCheckActiveFunctionError';
  }
}
export function defaultCheckActive(state: any, routeID: any): never {
  throw new ForgotToImplementCheckActiveFunctionError(`You forgot to implement the "checkActive" function on the route component "${routeID}"`);
}

class ForgotToImplementRedirectFunctionError extends Error {
  constructor(msg) {
    super(msg);
    this.name = 'ForgotToImplementRedirectFunctionError';
  }
}

export function defaultRedirect(routeId: any): never {
  throw new ForgotToImplementRedirectFunctionError(`You forgot to implement the "redirect" function on route component "${routeId}"`);
}
