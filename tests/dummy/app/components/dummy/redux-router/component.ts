import { connect } from 'ember-redux';
import Component from '@ember/component';
// @ts-ignore: Ignore import of compiled template
import layout from './template';
import { DummyState } from 'dummy/tests/dummy/app/reducers';
import { RouterState } from 'dummy/tests/dummy/app/reducers/router';
import { ActionName } from 'dummy/actions';
import { RoutePart } from 'dummy/router';
import { equal } from 'dummy/utils/array';

class DummyReduxRouter extends Component.extend({
  layout,
  // anything which *must* be merged to prototype here
  tagName: ''
}) {
};

type ExtendedRoutePart = RoutePart | '..'

function isRoutePart(erp: ExtendedRoutePart): erp is RoutePart {
  return erp !== '..';
}

function toParts(extendedRouteParts: ExtendedRoutePart[]): RoutePart[] {
  let output = [];
  for (const part of extendedRouteParts) {
    if (isRoutePart(part)) {
      output.push(part);
    } else {
      output.pop();
    }
  }
  return output;
}

const statesToCompute = (state: DummyState) => ({ state: state.router });

const dispatchToActions = (dispatch) => ({
  redirectRoute(state: RouterState, ...extendedRouteParts: ExtendedRoutePart[]) {
    dispatch({
      type: ActionName.SET_ROUTE,
      paths: toParts(extendedRouteParts)
    });
  },
  checkRoute(routerState: RouterState, ...routeKeys: RoutePart[]): boolean {
    return equal(routerState.slice(0, routeKeys.length), routeKeys);
  }
});

export default connect(statesToCompute, dispatchToActions)(DummyReduxRouter);
