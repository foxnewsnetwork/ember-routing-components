import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | redux', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /redux', async function(assert) {
    await visit('/redux');

    assert.equal(currentURL(), '/redux');
  });
});
