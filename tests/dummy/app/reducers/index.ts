import { combineReducers } from 'redux';
import router, { RouterState } from './router';

export type DummyState = {
  router: RouterState
}

export default combineReducers({
  router
})
