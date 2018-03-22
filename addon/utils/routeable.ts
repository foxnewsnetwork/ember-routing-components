import Component from '@ember/component';

type ComponentFactory = typeof Component;

export default function routeable(CF: ComponentFactory): ComponentFactory {
  return CF.extend({
    tagName: ''
  }).reopenClass({
    positionalParams: ['routing']
  });
}
