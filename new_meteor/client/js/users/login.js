Template.login.events({
    "submit form": function(event, template) {
        event.preventDefault();

        let user = $('#username').val();
        let password = $('#password').val();

        Meteor.loginWithPassword(user, password, function(err) {
            if (err) {
                alert(err.reason);
            }
            else{
                Router.go('home');
            }
        });
    }
});