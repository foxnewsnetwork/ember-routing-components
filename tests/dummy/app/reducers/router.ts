import { createReducer, Action } from 'redux-create-reducer';
import { RouteMap } from 'dummy/router';
import { ActionName } from 'dummy/actions';

export type RouterState = RouteMap[];
type CurrentDir = '.' | './'
type ParentDir = '..' | '../'
type AbsoluteDir = '/'
type PossibleRoutePart = RouteMap | CurrentDir | ParentDir | AbsoluteDir;

const INITIAL_STATE: RouterState = [RouteMap.APP, RouteMap.HOME, RouteMap.HOME_INDEX];

interface ActivateAction extends Action {
  keys: PossibleRoutePart[]
}

const xxx = (input, ...logs) => {
  // console.warn(...logs);
  return input;
}

function expandPath(parts: PossibleRoutePart[]): RouteMap[] {

}

function activateState(state: RouterState, key: RouteMap): RouterState {
  return { ...state, [key]: true };
}

export default createReducer<RouterState>(INITIAL_STATE, {
  [ActionName.RESET_ROUTE](state: RouterState, action: Action): RouterState {
    return xxx(INITIAL_STATE, 'reducer/redux#reset', state);
  },
  [ActionName.ACTIVATE_ROUTE](state: RouterState, action: ActivateAction): RouterState {
    return action.keys.reduce(activateState, state);
  }
});
