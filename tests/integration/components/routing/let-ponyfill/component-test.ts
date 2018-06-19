import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | routing/let-ponyfill', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{routing/let-ponyfill}}`);

    assert.equal(this.element.textContent.trim(), '');

    // Template block usage:
    await render(hbs`
      {{#routing/let-ponyfill 'dog' as |dog|}}
        template block text {{dog}}
      {{/routing/let-ponyfill}}
    `);

    assert.equal(this.element.textContent.trim(), 'template block text dog');
  });
});
