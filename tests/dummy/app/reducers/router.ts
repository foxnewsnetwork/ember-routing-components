import { createReducer, Action } from 'redux-create-reducer';

export enum RouterKey {
  APP = 'ROUTER#APP',
  HOME = 'ROUTER#APP/HOME',
  APPLE = 'ROUTER#APP/APPLE',
  ORANGE = 'ROUTER#APP/ORANGE'
}

interface PageState {
  isActive: boolean
}

export type RouterState = {
  [RouterKey.HOME]: boolean,
  [RouterKey.APPLE]: boolean,
  [RouterKey.ORANGE]: boolean
}

const INITIAL_STATE: RouterState = {
  [RouterKey.HOME]: false,
  [RouterKey.APPLE]: false,
  [RouterKey.ORANGE]: false
};

export enum RouterAction {
  CHANGE_ROUTE = '@ROUTER#CHANGE_ROUTE'
}

interface ActivateAction extends Action {
  key: RouterKey
}

export default createReducer<RouterState>(INITIAL_STATE, {
  [RouterAction.CHANGE_ROUTE](state: RouterState, action: ActivateAction): RouterState {
    return { ...INITIAL_STATE, [action.key]: true };
  }
});
