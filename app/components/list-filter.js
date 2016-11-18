import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['list-filter'],
  value: '',
  // TODO : Introduce some sort of delay or char lenght before sending a server request
  init() {
    this._super(...arguments);
    this.get('filter')('').then((results) => this.set('results', results));
  },

  actions: {
    handleFilterEntry() {
      let filterInputValue = this.get('value');
      let filterAction = this.get('filter');
      filterAction(filterInputValue).then((filterResults) => this.set('results', filterResults));
    }
  }
});
