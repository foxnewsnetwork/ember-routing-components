import { thru3 } from 'ember-routing-components/utils/computed';
import { module, test } from 'qunit';
import EmberObject, { get, set } from '@ember/object';

const plus = (a: number, c: number): number => a + c;

module('Unit | Utility | computed', (hooks) => {

  module('thru3', (hooks) => {
    class TestObject extends EmberObject {
      dog: number = 1;
      cat: number = 2;
      plus = plus;

      result = thru3<TestObject, number>(
        'dog',
        'cat',
        'plus',
        (dog, cat, plus) => plus(dog, cat)
      )
    }

    let object;
    hooks.beforeEach(() => {
      object = TestObject.create();
    });

    test('result', (assert) => {
      assert.equal(get(object, 'result'), 3);
    });

    module('resetting', (hooks) => {
      hooks.beforeEach(() => {
        set(object, 'cat', 66);
      });

      test('update', (assert) => {
        assert.equal(
          get(object, 'result'),
          67
        );
      });
    });
  });

});
