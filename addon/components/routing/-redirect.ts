import Component from '@ember/component';
// @ts-ignore: Ignore import of compiled template
import layout from '../../templates/components/routing/-redirect';
import { RedirectFn } from 'ember-routing-components/utils/route-like';
import { get } from '@ember/object';

export default class RoutingRedirect<ID> extends Component.extend({
  tagName: ''
}).reopenClass({
  positionalParams: ['redirect', 'targetRouteId']
}) {
  layout = layout;

  targetRouteId: ID;

  redirect: RedirectFn<ID>;

  public didInsertElement(this: RoutingRedirect<ID>) {
    const redirect = get(this, 'redirect');
    const targetRouteId = get(this, 'targetRouteId');

    redirect(targetRouteId);
  }
};
