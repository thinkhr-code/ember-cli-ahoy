import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('as a service', function(hooks) {
  setupRenderingTest(hooks);

  test('it is injectable', async function (assert) {
    assert.expect(3);

    await render(hbs`
      {{ test-component }}
    `);

    const service = this.owner.lookup('service:ahoy');

    assert.ok(service, 'It exists');
    assert.ok(service.track, 'track exists');
    assert.ok(service.trackView, 'trackView exists');
  });
});
