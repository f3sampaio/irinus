Template.navbar.onRendered(function(){
  this.$(".dropdown-button").dropdown();
  $(".button-collapse").sideNav();
})

Template.navbar.helpers({

});

Template.navbar.events({
  'click #logout-button'(event){
    Meteor.logout();
    FlowRouter.go('/login');
  }
})
