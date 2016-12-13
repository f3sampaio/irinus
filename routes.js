// Router.route('/login', function() {
//   this.render('login');
// });
//
// Router.route('/', function(){
//   if(Meteor.userId()){
//     Router.go('/main');
//   } else {
//     Router.go('/login');
//   }
// });

FlowRouter.route('/login', {
  name: 'login',
  action: function() {
    BlazeLayout.setRoot('body')
    BlazeLayout.render('login', {main: "login"});
  }
});

FlowRouter.route('/', {
  name: 'default',
  action: function() {
    if(Meteor.userId()){
      FlowRouter.go('main')
    } else {
      console.log("Nao esta logado");
      FlowRouter.go('/login');
    }
  }
})
