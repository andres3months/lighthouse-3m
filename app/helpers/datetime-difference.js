import Ember from 'ember';

export function datetimeDifference(params) {
  let startDate = moment(params[0]);
  let endDate = moment(params[1]);
  let dateDifference = startDate.from(endDate);
  return dateDifference;
}

export default Ember.Helper.helper(datetimeDifference);
