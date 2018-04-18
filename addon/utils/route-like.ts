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
  checkActive: (state: T, routeId: ID) => boolean;

  /**
   * Passed in attribute
   * 
   * An way to update your state; the update can be asynchronous
   * 
   * @attr
   */
  update: (state: T) => Promise<null>;
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

class ForgotToImplementUpdateFunctionError extends Error {
  constructor(msg) {
    super(msg);
    this.name = 'ForgotToImplementUpdateFunctionError';
  }
}

export function defaultUpdate(state: any): never {
  throw new ForgotToImplementUpdateFunctionError(`You forgot to implement the "update" function`);
}