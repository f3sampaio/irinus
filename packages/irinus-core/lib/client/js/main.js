Template.main.events({

  'click #logout-button'(event){
    Meteor.logout();
    FlowRouter.go('/login');
  }

})
