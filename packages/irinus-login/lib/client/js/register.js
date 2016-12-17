Template.register.events({
  'click #register-submit'(event){
    event.preventDefault();
    var username = $('#username-register').val();
    var email = $('#email-register').val();
    var password = $('#password-register').val();

    var errorText = "";


    if(email == ""){
      errorText = "Email is null!"
    } else{
      if(email != $('#email-confirm-register').val() ||
      password != $('#password-confirm-register').val()){
        if(email != $('#email-confirm-register').val()){
          errorText = errorText + "<span>Email doesn't match!</span>";
        } else {
          // Do nothing
        }
        if (password != $('#password-confirm-register').val()){
          errorText = errorText + "<span>Password doesn't match!</span>";
        } else {
          // Do nothing
        }

        $('#register-response').html("");
        $('#register-response').html(errorText);
      } else {
        // Everything is fine, account can be created
        Accounts.createUser({
        username: username,
        password: password
    });
      }

    }
  }
})
