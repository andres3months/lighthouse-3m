import DS from 'ember-data';
import config from '../config/environment';

export default DS.JSONAPIAdapter.extend({
  host: 'https://3months.lighthouseapp.com',
  buildURL: function(record, suffix) {
    var s = this._super(record, suffix);
    // TODO: Token should be passed as a header really
    return `${s}.json?_token=${config.LIGHTHOUSE_API_KEY}`;
  }
});
