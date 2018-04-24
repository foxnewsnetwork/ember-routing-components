import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { TestContext } from 'ember-test-helpers';

module('Integration | Component | routing/call-fn', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(async function(this: TestContext) {
    this.set('arg1', 'dog');
    this.set('joinFn', (a) => `${a} -+- cat`);
    await render(hbs`
      {{#routing/call-fn arg1 joinFn as |state|}}
        {{state.result}}
      {{/routing/call-fn}}
    `);
  });

  module('text', (hooks) => {
    let expected: string;
    const actual = 'dog -+- cat';
    hooks.beforeEach(function(this: TestContext) {
      expected = this.element.textContent.trim()
    });

    test('it outputs the correct test', (assert) => {
      assert.equal(expected, actual);
    });

    module('mutation', (hooks) => {
      let expected: string;
      hooks.beforeEach(function(this: TestContext) {
        this.set('arg1', 'roflstomp');
        expected = this.element.textContent.trim()
      });

      test('it should now have changed the text', (assert) => {
        const actual = 'roflstomp -+- cat';
        assert.equal(expected, actual);
      });
    });
  });
});
