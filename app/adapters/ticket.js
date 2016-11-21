import DS from 'ember-data';
import ENV from '../config/environment';

export default DS.JSONAPIAdapter.extend({
  host: ENV.ApiBaseURL,
  buildURL: function(record, suffix) {
    var s = this._super(record, suffix);
    return `${s}.json`;
  }
});
