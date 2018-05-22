import Component from '@ember/component';
// @ts-ignore: Ignore import of compiled template
import layout from '../../templates/components/dummy/-a';
import { get } from '@ember/object';
import { tryInvoke } from '@ember/utils';

export default class DummyA extends Component.extend({
  // anything which *must* be merged to prototype here
  tagName: 'button',
  classNames: ['dummy-link-to']
}).reopenClass({
  positionalParams: ['action']
}) {
  layout = layout;
  // normal class body definition here

  attributeBindings = ['disabled'];

  disabled: boolean = false;

  action: () => Promise<void>;

  begin: (event: Event) => void;

  finish: (event: Event) => void;

  error: (error: Error) => void;

  success: (event: Event) => void;

  public async click(this: DummyA, event: Event) {
    tryInvoke(this, 'begin', [event]);
    const transition = get(this, 'action');
    try {
      await transition();
      tryInvoke(this, 'success', [event]);
    } catch(error) {
      tryInvoke(this, 'error', [error]);
    } finally {
      tryInvoke(this, 'finish', [event]);
    }
  }

  public async enter(this: DummyA, event: Event) {
    this.click(event);
  }
};
