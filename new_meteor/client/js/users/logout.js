Template.index.events({
    "click .logout": function(event, template) {
        Meteor.logout();
    }
});