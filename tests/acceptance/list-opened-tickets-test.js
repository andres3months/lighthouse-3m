import { test } from 'qunit';
import moduleForAcceptance from 'lighthouse-3m/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | list opened tickets');

test('visiting /', function(assert) {
  visit('/');
  andThen(function() {
    assert.equal(currentURL(), '/');
  });
});

test('should list opened tickets', function(assert){

});
