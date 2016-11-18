import DS from 'ember-data';

export default DS.Model.extend({
  created_at: DS.attr(),
  state: DS.attr(),
  title: DS.attr(),
  updated_at: DS.attr(),
  user_name: DS.attr(),
  creator_name: DS.attr(),
  assigned_user_name: DS.attr(),
  url: DS.attr(),
  importance_name: DS.attr(),
  latest_body: DS.attr(),
  formatted_state: Ember.computed('state', function() {
    return this.get('state').replace(/-/g, ' ');
  }),
});
