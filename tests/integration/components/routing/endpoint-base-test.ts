import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { TestContext } from 'ember-test-helpers';

type ConsumeResult = [boolean, string];
const consume = (fullstr: string, substr: string): ConsumeResult => 
  [fullstr.startsWith(substr), fullstr.substr(substr.length)];

function consumeCheck(res: ConsumeResult, substr: string): ConsumeResult {
  const [isFail, fullStr] = res;
  const [nextFail, nextStr] = consume(fullStr, substr);
  return [isFail && nextFail, nextStr];
}

module('Integration | Component | routing/endpoint-base', function(hooks) {
  setupRenderingTest(hooks);

  module('simple usage', (hooks) => {
    hooks.beforeEach(async function(this: TestContext) {
      this.set('goDog', false);
      this.set('goCat', false);
      this.set('state', 'dog');
      this.set('checkRoute', (state, ...routeNames: string[]) => {
        const [isActive] = routeNames.reduce(consumeCheck, [true, state]);
        return isActive;
      });
      this.set('redirectRoute', (state, appRoute, routeId) => this.set('state', routeId));
      await render(hbs`
        {{#routing/endpoint-base name='' state=state checkRoute=checkRoute redirectRoute=redirectRoute as |app actions|}}
          {{#app.route name='dog' as |dog|}}
            {{#if dog.isActive}}
              <h1>Dog Content-{{state}}</h1>
  
              {{#if goCat}}
                {{app.redirect to='cat'}}
              {{/if}}
            {{/if}}
          {{/app.route}}
  
          {{#app.route name='cat' as |cat|}}
            {{#if cat.isActive}}
              <h1>Cat Content-{{state}}</h1>
  
              {{#if goDog}}
                {{app.redirect to='dog'}}
              {{/if}}
            {{/if}}
          {{/app.route}}
        {{/routing/endpoint-base}}
      `);
    });
  
    test('it starts out on dog', async function(assert) {
      assert.equal(this.element.textContent.trim(), 'Dog Content-dog');
    });
  
    module('redirect', (hooks) => {
      let result;
      hooks.beforeEach(function(this: TestContext) {
        this.set('goCat', true);
        result = this.element.textContent.trim();
      });
      test('we should be switched to the new context', (assert) => {
        assert.equal(result, 'Cat Content-cat');
      });
    });
  });
});
