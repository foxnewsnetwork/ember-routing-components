import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { TestContext } from 'ember-test-helpers';

module('Integration | Helper | routing/and', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(async function(this: TestContext) {
    this.set('isDog', true);
    this.set('isCat', true);

    await render(hbs`
      {{#routing/let-ponyfill (routing/and isDog isCat) as |isDogCat|}}
        {{#if isDogCat}}
          pass
        {{else}}
          fail
        {{/if}}
      {{/routing/let-ponyfill}}
    `);
  });
  // Replace this with your real tests.
  test('it renders', function(assert) {
    assert.equal(this.element.textContent.trim(), 'pass');
    this.set('isDog', false);
    assert.equal(this.element.textContent.trim(), 'fail');
  });
});
