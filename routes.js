
FlowRouter.route('/login', {
  name: 'login',
  action: function() {
    BlazeLayout.setRoot('body')
    BlazeLayout.render('login', {main: "login"});
  }
});

FlowRouter.route('/main', {
  name: 'main',
  action: function() {
    BlazeLayout.setRoot('body')
    BlazeLayout.render('main', {main: "main"});
  }
});

FlowRouter.route('/', {
  name: 'default',
  action: function() {
    if(Meteor.userId()){
      FlowRouter.go('/main')
    } else {
      console.log("Nao esta logado");
      FlowRouter.go('/login');
    }
  }
})
