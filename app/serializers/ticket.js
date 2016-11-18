import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    var tickets = payload.tickets;
    if(tickets !== undefined){
      // Converts into JSONAPI compliant format (I <3 Klaus)
      payload.data = tickets.map(ticket => {
        return {
          id: `${ticket.ticket.number}${ticket.ticket.project_id}`,
          attributes: ticket.ticket,
          type: "ticket"
        };
      });
      delete payload.tickets;
    }
    else{
      // Handles search returning no results
      payload.data = [];
      delete payload.nil_classes;
    }
    return this._super(...arguments);
  },
  keyForAttribute(key) {
    // Because the app returns snake_case_keys so we gotta tell the store
    return Ember.String.underscore(key);
  }
});
