Template.showUsers.helpers({
    users : function(){
        let com = Meteor.users.find({});
        let datas = [];
        com.forEach( function(myDoc) {
            console.log(myDoc)
            datas.push(myDoc)
        } );
        return datas;
    }
});

Template.infoUser.helpers({
    user : function(){
        let param = Iron.controller().getParams()._id;
        Globals.schemas.tempUser_id = param;
        return Meteor.users.findOne(param);
    }
});