import Component from '@ember/component';

export default class RoutingDidLoad extends Component.extend({
  tagName: ''
}).reopenClass({
  positionalParams: ['action']
}) {
  action: () => void;

  didInsertElement() {
    this.action();
  }
};
