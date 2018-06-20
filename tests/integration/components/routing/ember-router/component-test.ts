import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | routing/ember-router', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(async function() {
    await render(hbs`
      {{#routing/ember-router as |app actions|}}
        {{#app.route name='way-of-the-kings' as |wk wkActions|}}

        {{/app.route}}
      {{/routing/ember-router}}
    `);
  });

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{routing/ember-router}}`);

    assert.equal(this.element.textContent.trim(), '');

    // Template block usage:


    assert.equal(this.element.textContent.trim(), 'template block text');
  });
});
