import { connect } from 'ember-redux';
import { inject as service } from '@ember/service';
import Component from '@ember/component';
// @ts-ignore: Ignore import of compiled template
import layout from '../../templates/components/dummy/redux-anchor';
import { DummyState } from 'dummy/tests/dummy/app/reducers';
import { RouterState, RouterKey, RouterAction } from 'dummy/tests/dummy/app/reducers/router';

class DummyReduxAnchor extends Component.extend({
  // anything which *must* be merged to prototype here
  tagName: ''
}) {
  layout = layout;
};

function all<X>(array: Array<X>, check: (x: X) => boolean) {
  return array.filter(check).length > 0;
};

const statesToCompute = (state: DummyState) => state.router;

const dispatchToActions = (dispatch) => ({
  redirectRoute(state: RouterState, appName, routeName: RouterKey) {
    return dispatch({
      type: RouterAction.CHANGE_ROUTE,
      key: routeName
    });
  },
  checkRoute(routerState: RouterState, ...routeKeys: RouterKey[]): boolean {
    return all(routeKeys, (key) => routerState[key]);
  }
});

export default connect(statesToCompute, dispatchToActions)(DummyReduxAnchor);
