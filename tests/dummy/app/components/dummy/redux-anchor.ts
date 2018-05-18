import { connect } from 'ember-redux';
import { inject as service } from '@ember/service';
import Component from '@ember/component';
// @ts-ignore: Ignore import of compiled template
import layout from '../../templates/components/dummy/redux-anchor';
import { DummyState } from 'dummy/tests/dummy/app/reducers';
import { RouterState } from 'dummy/tests/dummy/app/reducers/router';
import { ActionName } from 'dummy/actions';
import { RouteMap } from 'dummy/router';
import { equal } from 'dummy/utils/array';

class DummyReduxAnchor extends Component.extend({
  // anything which *must* be merged to prototype here
  tagName: ''
}) {
  layout = layout;
};

const statesToCompute = (state: DummyState) => ({ state: state.router });

const dispatchToActions = (dispatch) => ({
  redirectRoute(state: RouterState, ...routeKeys: (RouteMap | '..')[]) {
    routeKeys.forEach((key) => {
      let type = ActionName.PUSH_ROUTE;
      if (key === '..') {
        type = ActionName.POP_ROUTE;
      }
      dispatch({ type, path: key })
    });
  },
  checkRoute(routerState: RouterState, ...routeKeys: RouteMap[]): boolean {
    return equal(routerState.slice(0, routeKeys.length), routeKeys);
  }
});

export default connect(statesToCompute, dispatchToActions)(DummyReduxAnchor);
