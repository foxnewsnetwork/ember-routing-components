import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { TestContext } from 'ember-test-helpers';

module('Integration | Component | routing/endpoint-base', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(async function(this: TestContext) {
    await render(hbs`
      {{#routing/endpoint-base state=state checkActive=checkActive redirect=redirect as |app actions|}}
        {{#app.route 'dog'}}
          <h1>Dog Content</h1>
        {{/app.route}}

        {{#app.route 'cat'}}
          <h1>Cat Content</h1>
        {{/app.route}}
      {{/routing/endpoint-base}}
    `);
  });

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{routing/endpoint-base}}`);

    assert.equal(this.element.textContent.trim(), '');

    // Template block usage:


    assert.equal(this.element.textContent.trim(), 'template block text');
  });
});
