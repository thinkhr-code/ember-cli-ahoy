import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('test-component', 'as a service', {
  unit: true,
  needs: ['service:ahoy']
});

test('it is injectable', function(assert) {
  assert.expect(3);

  const subject = this.subject();
  const service = subject.get('ahoy');

  assert.ok(service, 'It exists');
  assert.ok(service.track, 'track exists');
  assert.ok(service.trackView, 'trackView exists');
});
