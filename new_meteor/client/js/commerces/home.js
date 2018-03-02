Template.home.helpers({
    Commerces :function(){
            let com = Commerces.find({});
            let datas = [];
            com.forEach( function(myDoc) { datas.push(myDoc) } );
            return datas;
        }
});