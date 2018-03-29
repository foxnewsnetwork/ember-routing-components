import Component from '@ember/component';
import BaseComponent from './-route-base';
// @ts-ignore: Ignore import of compiled template
import layout from '../../templates/components/routing/string-router';

function first<T>(xs: Array<T>): T | void {
  return xs[0];
}

function checkFn(uri: RouteName, slice: NameSlice): boolean {
  const head = first(uri);
  return head && head.name === slice.name;
}

interface DynamicNameSlice extends NameSlice {
  paramName: string
}
interface NameSlice {
  name: string;
}

type RouteName = Array<NameSlice>;

export default class RoutingStringRouter<RouteName, RouteNameSlice> extends BaseComponent.extend({
  // anything which *must* be merged to prototype here
}) {
  layout = layout;
  // normal class body definition here

  check = checkFn;
};
