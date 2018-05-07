import { createReducer, Action } from 'redux-create-reducer';
import { RouteMap } from 'dummy/helpers/route-for';
import { ActionName } from 'dummy/actions';

export type RouterState = {
  [RouteMap.APP]: boolean,
  [RouteMap.HOME]: boolean,
  [RouteMap.HOME_INDEX]: boolean,
  [RouteMap.HOME_ALT]: boolean,
  [RouteMap.PRODUCT]: boolean,
  [RouteMap.PRODUCT_DETAILS]: boolean,
  [RouteMap.PRODUCT_REVIEWS]: boolean
}

const INITIAL_STATE: RouterState = {
  [RouteMap.APP]: true,
  [RouteMap.HOME]: false,
  [RouteMap.HOME_INDEX]: false,
  [RouteMap.HOME_ALT]: false,
  [RouteMap.PRODUCT]: false,
  [RouteMap.PRODUCT_DETAILS]: false,
  [RouteMap.PRODUCT_REVIEWS]: false,
};

interface ActivateAction extends Action {
  key: RouteMap
}

const xxx = (input, ...logs) => {
  console.warn(...logs);
  return input;
}

export default createReducer<RouterState>(INITIAL_STATE, {
  [ActionName.RESET_ROUTE](state: RouterState, action: Action): RouterState {
    return xxx(INITIAL_STATE, 'reducer/redux#reset', state);
  },
  [ActionName.ACTIVATE_ROUTE](state: RouterState, action: ActivateAction): RouterState {
    return xxx({ ...state, [action.key]: true }, 'reducer/redux#activate:\n', action.key, '\nstate:\n', state);
  }
});
