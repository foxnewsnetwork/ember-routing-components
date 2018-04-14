ember-routing-components
==============================================================================

Heavily inspired (nay, straight up shamelessly ported over from the [react router](https://reacttraining.com/react-router/web/guides/philosophy)), we now declare our routes dynamically with components in hbs in ember.

Use like so:

## Actual Usage

Consider the following example that emulates a typical `window.location`-based ember app

```hbs
{{#routing/endpoint-ember locationType='auto' rootURL=rootURL as |app-state app-actions|}}
  {{#app-state.route 'home' as |home-state home-actions|}}
    {{home-page
      openOptions=(action home-actions.transitionTo 'options')
      transitionToProduct=(action app-actions.transitionTo 'product')}}
    {{#home-state.route 'options'}}
      {{home-options-page
        closeOptions=(action home-actions.transitionTo 'index')}}
    {{/home-state.route}}
  {{/app-state.route}}

  {{#app-state.route 'product' ':id'}}
    {{product-page}}
  {{/app-state.route}}
{{/routing/endpoint-ember}}
```

## Endpoints

Endpoints are, well, endpoints in the app - specifically where the routing systems comes into contact with where the route information is stored. This library is agnostic to exactly how you'd like to store your state, but we do provide a hopefully sensible API for interfacing with it.

Consider the usage of the `endpoint-base` component for an idea of just how "little" it does:

```hbs
{{#routing/endpoint-base state=state checkActiveFn=checkActiveFn update=(action 'dispatchTransition') as |app-state app-actions|}}
  {{! same as before}}
{{/routing/endpoint-base}}
```

## Deep Dive

Let's take a look at the lowest level of how routes are implemented

```hbs
{{#routing/call-fn2 HOME currentRoute checkActiveFn as |state|}}  
  {{#if state.activeState}}
    {{#some-component as |shouldRedirect|}}
      {{#if shouldRedirect}}
        {{#routing/did-load (action 'affectTransition' PRODUCT.INDEX)}}
      {{/if}}
    {{/some-component}}
  {{/if}}
{{/routing/call-fn2}}
```

Fundamentally, the kernel of routing is to check if two objects equal to each other, then return that result. Then decide to do something with that result - i.e. affecting an action via it is true. Notice that, at the core, we are agnostic about:

- What types `Home`, `currentRoute`, and `checkActiveFn` actually are
- How `action 'affectTransition` actually handles a transition

This typing allows us to be *extremely* flexible with dealing with how we represent our "upstream" router data store, thus enabling us to support everything from traditional Ember URL-based location to redux location stores to perhaps even some weird stream-based "bespoke" stream based implemenetation

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
