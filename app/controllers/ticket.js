import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    filterByAssigned(param) {
      if (!Ember.isEmpty(param)){
        return this.get('store').query('ticket',{ q: `state:open responsible:'${param}'`});
      }
      return this.get('store').query('ticket',{ q: 'state:open' });

    }
  }
});
