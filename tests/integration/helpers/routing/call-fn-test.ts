import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { TestContext } from 'ember-test-helpers';

module('Integration | Helper | routing/call-fn', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(async function(this: TestContext) {
    this.set('inputFn', () => 'apple');

    await render(hbs`{{routing/call-fn inputFn}}`);
  });

  // Replace this with your real tests.
  test('it renders', function(assert) {
    assert.equal(this.element.textContent.trim(), 'apple');
  });

  module('updating', (hooks) => {
    hooks.beforeEach(function(this: TestContext) {
      this.set('inputFn', () => 'orange');
    });

    test('it should have updated the value', function(assert) {
      assert.equal(this.element.textContent.trim(), 'orange');
    });
  });
});
