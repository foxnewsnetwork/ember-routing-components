import { createReducer, Action } from 'redux-create-reducer';
import { RoutePart } from 'dummy/router';
import { ActionName } from 'dummy/actions';

export type RouterState = RoutePart[];

const INITIAL_STATE: RouterState = [RoutePart.app, RoutePart.home, RoutePart.index];

interface SetAction extends Action {
  paths: RoutePart[]
}

export default createReducer<RouterState>(INITIAL_STATE, {
  [ActionName.SET_ROUTE](state: RouterState, action: SetAction): RouterState {
    return action.paths;
  }
});
