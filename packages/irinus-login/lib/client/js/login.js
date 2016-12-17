Template.login.events({
  'click #login-button'(event){
    event.preventDefault();
    var username = $('#login-username').val();
    var password = $('#login-password').val();

    Meteor.loginWithPassword(username, password, function(err){
      if(!Meteor.userId()){
        var text = "<i class='small material-icons'>error_outline</i><span> Invalid Username or Password</span>"
        Materialize.toast(text, 3000, 'red');
      }
    });

  },

  'click #register-button'(event){
    event.preventDefault();
    $('#register_modal').openModal();

    }
})
