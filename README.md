ember-routing-components
==============================================================================

Heavily inspired (nay, straight up shamelessly ported over from the [react router](https://reacttraining.com/react-router/web/guides/philosophy)), we now declare our routes dynamically with components in hbs in ember.

Use like so:

```hbs
{{#router-map uri=uri check=checkActiveFn change=(action 'change') as |router|}}
  {{#router.route 'foot' renders=(component 'foot-route') as |router|}}
    {{router.route 'bark' renders=(component 'foot-route/bark-route')}}
  {{/router.route}}

  {{router.route 'bast' path=':id' renders=(component 'bast-route')}}
{{/router-map}}
```

Now, build your routes as components!:

`app/components/foot-route/component.js`
```javascript
import { routeable } from 'ember-routing-component';
import Component from '@ember/component';

export default routeable(Component.extend({
  /**
  // The `routeable` function forces your route
  // to be tagless, so don't attach classes and stuff to them!
  tagName: '',
  */
  didInsertElement() {
    // this hook is fired when this route is active
  },

  willDestroyElement() {
    // this hook will be fired when the route is deactivated
  },

  actions: {
    clickedButton(routeName) {
      // The `routing` object is given to the component
      // via the `routeable` function
      this.get('routing').transitionTo(routeName);
    }
  }
}));
```

Write your templates as you normally would!

`app/components/foot-route/template.hbs`
```hbs
{{#data-connect/foot-route as |model|}}
  {{#presentation/foot-route model=model}}
    {{yield}}
  {{/presentation/foot-route}}
{{/data-connect/foot-route}}
```
Instead of `{{outlet}}`, use `{{yield}}` to accomplish the same thing.

Notice that this usage allows us to separate routing from data connection from presentation.

Installation
------------------------------------------------------------------------------

```
ember install ember-routing-components
```


Usage
------------------------------------------------------------------------------

[Longer description of how to use the addon in apps.]


Contributing
------------------------------------------------------------------------------

### Installation

* `git clone <repository-url>`
* `cd ember-routing-components`
* `npm install`

### Linting

* `npm run lint:js`
* `npm run lint:js -- --fix`

### Running tests

* `ember test` – Runs the test suite on the current Ember version
* `ember test --server` – Runs the test suite in "watch mode"
* `npm test` – Runs `ember try:each` to test your addon against multiple Ember versions

### Running the dummy application

* `ember serve`
* Visit the dummy application at [http://localhost:4200](http://localhost:4200).

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
