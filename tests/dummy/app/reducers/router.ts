import { createReducer, Action } from 'redux-create-reducer';
import { RouteMap } from 'dummy/router';
import { ActionName } from 'dummy/actions';

export type RouterState = RouteMap[];

const INITIAL_STATE: RouterState = [RouteMap.APP, RouteMap.HOME, RouteMap.HOME_INDEX];

interface ActivateAction extends Action {
  path: RouteMap
}

export default createReducer<RouterState>(INITIAL_STATE, {
  [ActionName.RESET_ROUTE](state: RouterState, action: Action): RouterState {
    return [];
  },
  [ActionName.PUSH_ROUTE](state: RouterState, action: ActivateAction): RouterState {
    return state.concat(action.path);
  },
  [ActionName.POP_ROUTE](state: RouterState, action: Action): RouterState {
    return state.slice(0, -1);
  }
});
