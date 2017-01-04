Activities = new Meteor.Collection('activities');
Meteor.subscribe('activities');
Template.dayActivitiesBoard.helpers({

  // This method gets day activities of the user to be shown
  getDayActivities: function(){
    dayStart = new Date();
    dayStart.setHours(0);
    dayStart.setMinutes(0);
    dayStart.setSeconds(0);

    dayEnd = new Date();
    dayEnd.setHours(23);
    dayEnd.setMinutes(59);
    dayEnd.setSeconds(59);

    console.log(">" + Activities.find({date: {$gte: dayStart, $lt: dayEnd}}).count());
    return Activities.find({date: {$gte: dayStart, $lt: dayEnd}});
  }
  // ------------------------------------------------------
})
