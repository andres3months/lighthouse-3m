import { moduleFor, test } from 'ember-qunit';

moduleFor('route:index', 'Unit | Route | index');

// Necessary?
test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});

test('should transition to tickets route', function(assert) {
  let route = this.subject({
    replaceWith(routeName) {
      assert.equal(routeName, 'tickets', 'replace with route name tickets');
    }
  });
  route.beforeModel();
});
