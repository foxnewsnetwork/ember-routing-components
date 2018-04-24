import { apfn } from 'ember-routing-components/utils/computed';
import { module, test } from 'qunit';
import EmberObject, { get, set } from '@ember/object';

const plus4 = (a: number): number => a + 4;

module('Unit | Utility | computed', (hooks) => {

  module('apfn', (hooks) => {
    class TestObject extends EmberObject {
      dog: number = 1;
      fn = plus4;

      result = apfn<TestObject, number>('dog');
    }

    let object;
    hooks.beforeEach(() => {
      object = TestObject.create();
    });

    test('result', (assert) => {
      assert.equal(get(object, 'result'), 5);
    });

    module('resetting', (hooks) => {
      hooks.beforeEach(() => {
        set(object, 'dog', 66);
      });

      test('update', (assert) => {
        assert.equal(
          get(object, 'result'),
          70
        );
      });
    });
  });

});
