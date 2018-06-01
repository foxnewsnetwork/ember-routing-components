import Component from '@ember/component';
// @ts-ignore: Ignore import of compiled template
import layout from '../../../templates/components/routing/anchor/-hash';
import { set, computed, get } from '@ember/object';

interface RouteParser<P> {
  (url: string): [string, P]
}

type SetURLFn = (url: string) => void;

export default class RoutingAnchorHash<P> extends Component.extend({
  tagName: ''
}) {
  layout = layout;
  // normal class body definition here

  hashPath: string;
  setHash: SetURLFn = (newURL) => set(this, 'hashPath', newURL);

  routePaths = computed('hashPath', {
    get(this: RoutingAnchorHash<P>) {
      const hashPath = get(this, 'hashPath');

    }
  }).readOnly();

  didInsertElement(this: RoutingAnchorHash<P>) {
    window.addEventListener('hashchange', this.onHashChange);
  }

  willDestroyElement(this: RoutingAnchorHash<P>) {
    window.removeEventListener('hashchange', this.onHashChange);
  }

  onHashChange = (event: HashChangeEvent) => {
    this.setHash(event.newURL);
  }
};
