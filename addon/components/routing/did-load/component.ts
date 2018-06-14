import Component from '@ember/component';

export default class RoutingDidLoad extends Component.extend({
  tagName: ''
}).reopenClass({
  positionalParams: ['action']
}) {
  action: () => void;

  public didInsertElement(this: RoutingDidLoad) {
    this.action();
  }
};
