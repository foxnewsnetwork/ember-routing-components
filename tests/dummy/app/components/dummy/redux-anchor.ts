import { connect } from 'ember-redux';
import { inject as service } from '@ember/service';
import Component from '@ember/component';
// @ts-ignore: Ignore import of compiled template
import layout from '../../templates/components/dummy/redux-anchor';
import { DummyState } from 'dummy/tests/dummy/app/reducers';
import { RouterState } from 'dummy/tests/dummy/app/reducers/router';
import { ActionName } from 'dummy/actions';
import { RouteMap } from 'dummy/router';

class DummyReduxAnchor extends Component.extend({
  // anything which *must* be merged to prototype here
  tagName: ''
}) {
  layout = layout;
};

function all<X>(array: Array<X>, check: (x: X) => boolean) {
  return array.filter(check).length === array.length;
};

const statesToCompute = (state: DummyState) => ({ state: state.router });

// routeKeys = [APP, HOME, '..', PRODUCT]
const dispatchToActions = (dispatch) => ({
  redirectRoute(state: RouterState, ...routeKeys: RouteMap[]) {
    dispatch({ type: ActionName.RESET_ROUTE });
    const type = ActionName.ACTIVATE_ROUTE;
    return routeKeys.forEach(key => dispatch({ type, key }));
  },
  checkRoute(routerState: RouterState, ...routeKeys: RouteMap[]): boolean {
    return all(routeKeys, (key) => routerState[key]);
  }
});

export default connect(statesToCompute, dispatchToActions)(DummyReduxAnchor);
