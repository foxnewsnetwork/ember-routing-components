import { inject as service } from '@ember/service';
import Component from '@ember/component';
// @ts-ignore: Ignore import of compiled template
import layout from './template';
import ComputedProperty from '@ember/object/computed';
import EmberRouter from '@ember/routing/router';
import { readOnly, liftC2 } from 'ember-routing-components/utils/computed';
import { getOwner } from '@ember/application';
import Route from '@ember/routing/route';
import { computed, get } from '@ember/object';
import { tails } from 'ember-routing-components/utils/keys';
import { equal } from 'ember-routing-components/utils/array';

function matchName(x: RoutePart, y: RoutePart) {
  return x.routeName === x.routeName;
}

const actions = {
  redirectRoute(router: EmberRouter, state: RoutePart[], ...routeParts: RoutePart[]) {
    const routeName = routeParts.map((x) => x.routeName).join('.');
    const models = routeParts.map((x) => x.params);

    router.transitionTo(routeName, models);
  },
  checkRoute(state: RoutePart[], ...routeParts: RoutePart[]) {
    const relevantParts = state.slice(0, routeParts.length);
    return equal(relevantParts, routeParts, matchName);
  }
};

function splitParts(routeName: string, getParamsFor): Array<RoutePart> {
  return tails(routeName).map((name) => ({
    routeName: name,
    params: getParamsFor(name)
  }));
}

type RoutePart = {
  routeName: string,
  params: {
    [key: string]: string
  }
}

export default class RoutingEmberRouter extends Component.extend({
  layout,
  actions,
  tagName: '',
  router: service('router'),
  currentRouteName: readOnly('router', 'currentRouteName'),
  currentRouteParts: liftC2(splitParts, 'currentRouteName', 'getParamsFor'),
  _appRoute: computed({
    get() {
      return getOwner(this).lookup(`route:application`);
    }
  }).readOnly()
}) {
  router: ComputedProperty<EmberRouter>;

  currentRouteName: ComputedProperty<string>;

  currentRouteParts: ComputedProperty<RoutePart[]>;

  _appRoute: ComputedProperty<Route>;

  getParamsFor = (routeName: string) => {
    return get(this, '_appRoute').paramsFor(routeName);
  }
};
