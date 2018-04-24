export type RedirectFn<ID> = (...routeIds: ID[]) => void;
export type CheckRouteFn<T, ID> = (state: T, ...routeIds: ID[]) => boolean;
export type CheckActiveFn<ID> = (...routeIds: ID[]) => boolean;
export type RedirectRouteFn<T, ID> = (state: T, ...routeIds: ID[]) => void;

export interface RouteLike<ID> {
  /**
   * Passed in attribute
   *
   * Takes a state and a routeId of your choosing and determines if
   * the route should be considered active or not. IDs are typically
   * strings, though nothing necessarily enforces this to be the case
   *
   * @attr
   */
  checkActive: CheckActiveFn<ID>;

  /**
   * Passed in attribute
   *
   * An way to update your state; the update can be asynchronous
   *
   * @attr
   */
  redirect: RedirectFn<ID>;
}
