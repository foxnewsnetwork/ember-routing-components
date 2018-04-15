import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import sinon, { SinonStub } from 'sinon';
import { TestContext } from 'ember-test-helpers';

module('Integration | Component | routing/did-load', function(hooks) {
  setupRenderingTest(hooks);

  let actionStub: SinonStub;
  hooks.beforeEach(async function(this: TestContext) {
    actionStub = sinon.stub();
    this.set('myAction', actionStub);
    await render(hbs`{{routing/did-load myAction}}`);
  });

  test('it calls on render', (assert) => {
    assert.ok(actionStub.calledOnce);
  });
});
