/* Activities being shown by day are filtered by userId. Activities from groups
have the userId of the members updated into the array.
*/
Activities = new Meteor.Collection('activities');
Meteor.publish('activities', function(){
  return Activities.find({participants: {$in: [this.userId]}});
});
