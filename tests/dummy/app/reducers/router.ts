import { createReducer, Action } from 'redux-create-reducer';
import { RoutePart } from 'dummy/router';
import { ActionName } from 'dummy/actions';

export type RouterState = RoutePart[];

const INITIAL_STATE: RouterState = [RoutePart.app, RoutePart.home, RoutePart.index];

interface ActivateAction extends Action {
  path: RoutePart
}

interface SetAction extends Action {
  paths: RoutePart[]
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
  },
  [ActionName.SET_ROUTE](state: RouterState, action: SetAction): RouterState {
    return action.paths;
  }
});
