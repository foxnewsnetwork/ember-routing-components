import Component from '@ember/component';
// @ts-ignore: Ignore import of compiled template
import layout from '../../templates/components/routing/-redirect';
import { RedirectFn, defaultRedirect } from 'ember-routing-components/utils/route-like';
import { get } from '@ember/object';

export default class RoutingRedirect<ID> extends Component.extend({
  tagName: ''
}).reopenClass({
  positionalParams: ['parentRouteId', 'redirect', 'targetRouteId']
}) {
  layout = layout;

  parentRouteId?: ID;

  targetRouteId: ID;

  redirect: RedirectFn<ID> = defaultRedirect;

  public didInsertElement(this: RoutingRedirect<ID>) {
    const redirect = get(this, 'redirect');
    const parentRouteId = get(this, 'parentRouteId');
    const targetRouteId = get(this, 'targetRouteId');

    redirect(parentRouteId, targetRouteId);
  }
};
