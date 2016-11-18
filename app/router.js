import Ember from 'ember';
import config from './config/environment';
document.title = "F*CK Lighthouse";

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('ticket');
});

export default Router;
