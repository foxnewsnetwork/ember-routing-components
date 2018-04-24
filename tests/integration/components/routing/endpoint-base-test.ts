import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { TestContext } from 'ember-test-helpers';

module('Integration | Component | routing/endpoint-base', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(async function(this: TestContext) {
    this.set('goDog', false);
    this.set('goCat', false);
    this.set('state', 'dog');
    this.set('checkRoute', (state, routeId) => state === routeId);
    this.set('redirectRoute', (state, routeId) => this.set('state', routeId));
    await render(hbs`
      {{#routing/endpoint-base state=state checkRoute=checkRoute redirectRoute=redirectRoute as |app actions|}}
        {{#app.route 'dog' as |dog|}}
          {{#if dog.isActive}}
            <h1>Dog Content-{{state}}</h1>

            {{#if goCat}}
              {{app.redirect 'cat'}}
            {{/if}}
          {{/if}}
        {{/app.route}}

        {{#app.route 'cat' as |cat|}}
          {{#if cat.isActive}}
            <h1>Cat Content-{{state}}</h1>

            {{#if goDog}}
              {{app.redirect 'dog'}}
            {{/if}}
          {{/if}}
        {{/app.route}}
      {{/routing/endpoint-base}}
    `);
  });

  test('it starts out on dog', async function(assert) {
    assert.equal(this.element.textContent.trim(), 'Dog Content');
  });

  module('redirect', (hooks) => {
    let result;
    hooks.beforeEach(async function(this: TestContext) {
      this.set('goCat', true);
      await wait(20);
      result = this.element.textContent.trim();
    });
    test('we should be switched to the new context', (assert) => {
      assert.equal(result, 'Cat Content');
    });
  });
});
