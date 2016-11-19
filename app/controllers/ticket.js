import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    filterByAssigned(param) {
      // Caches locally (apparently)
      // http://emberjs.com/api/data/classes/DS.Store.html#toc_reloading
      if (Ember.isEmpty(param)){
        return this.get('store',{ reload: false }).query('ticket',{ q: 'state:open' });
      }
      return this.get('store',{ reload: false }).query('ticket',{ q: `state:open responsible:"${param}"`});
    }
  }
});
