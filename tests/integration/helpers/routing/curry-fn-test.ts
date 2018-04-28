import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { TestContext } from 'ember-test-helpers';

module('Integration | Helper | routing/curry-fn', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(async function(this: TestContext) {
    this.set('inputFn', (a) => a);
    this.set('inputVal', true);

    await render(hbs`
      {{#routing/let-ponyfill (routing/curry-fn inputFn inputVal) as |checkOkFn|}}
        {{#routing/let-ponyfill (routing/call-fn checkOkFn) as |isOk|}}
          {{#if isOk}}
            ok
          {{else}}
            bad
          {{/if}}
        {{/routing/let-ponyfill}}
      {{/routing/let-ponyfill}}
    `);
  });
  // Replace this with your real tests.
  test('it renders', function(assert) {
    assert.equal(this.element.textContent.trim(), 'ok');
    this.set('inputVal', false);
    assert.equal(this.element.textContent.trim(), 'bad');
  });
});
