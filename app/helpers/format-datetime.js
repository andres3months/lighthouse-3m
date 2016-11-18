import Ember from 'ember';

export function formatDatetime(params) {
  let date = moment(params[0]);
  let formattedDate = date.format("Do MMMM YYYY, h:mm A");
  return formattedDate;
}

export default Ember.Helper.helper(formatDatetime);
