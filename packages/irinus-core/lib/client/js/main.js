Template.main.events({

});

Template.main.helpers({
  printActualDate(){
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();

    return (day + "/" + month + "/" + year);
  }
})
