import Component from '@ember/component';
// @ts-ignore: Ignore import of compiled template
import layout from '../../../templates/components/routing/anchor/-hash';
import { set, computed } from '@ember/object';

interface RouteParser<P> {
  (url: string): [string, P]
}

export default class RoutingAnchorHash<P> extends Component.extend({
  tagName: ''
}) {
  layout = layout;
  // normal class body definition here

  url: string;

  routePaths = computed('url', {
    get(this: RoutingAnchorHash<P>) {

    }
  }).readOnly();

  didInsertElement(this: RoutingAnchorHash) {
    set(this, 'newURL', window.location.hash);
    window.addEventListener('hashchange', this.onHashChange);
  }

  willDestroyElement(this: RoutingAnchorHash) {
    window.removeEventListener('hashchange', this.onHashChange);
  }

  onHashChange = (event: HashChangeEvent) => {
    set(this, 'newURL', event.newURL);
    set(this, 'oldURL', event.oldURL);
  }
};
