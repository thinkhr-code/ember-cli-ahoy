import { test, module } from 'qunit';
import ahoy from 'ahoy';

module('module tests');

test('ok', function(assert) {
  assert.expect(3);

  assert.ok(ahoy, 'It exists');
  assert.ok(ahoy.trackView, 'trackView exists');
  assert.ok(ahoy.track, 'track exists');
});
