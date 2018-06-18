import { inject as service } from '@ember/service';
import Component from '@ember/component';
// @ts-ignore: Ignore import of compiled template
import layout from './template';
import ComputedProperty from '@ember/object/computed';
import EmberRouter from '@ember/routing/router';
import { readOnly } from 'ember-routing-components/utils/computed';

const actions = {

};
export default class RoutingEmberRouter extends Component.extend({
  layout,
  tagName: '',
  router: service('router'),
  currentRouteName: readOnly('router', 'currentRouteName')
}) {
  router: ComputedProperty<EmberRouter>;
  currentRouteName: ComputedProperty<string>;
};
