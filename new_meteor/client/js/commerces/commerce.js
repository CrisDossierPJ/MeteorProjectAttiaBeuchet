Template.commerce.helpers({
    Commerce : function(){
        let param = Iron.controller().getParams();
        Globals.schemas.tempCommerce_id = param._id;
        let commerce = Commerces.findOne({ _id : param._id });
        return commerce;
    },
    Articles : function(){
        let empty = [];
        let articles = Commerces.findOne({ _id : Globals.schemas.tempCommerce_id }).articles;
        let datas = [];
        if (articles){
            for (let i = 0; i < articles.length; i++){
                let article = Articles.findOne({ _id : articles[i]});
                datas.push(article);
            }
            return datas;
        }
        else return empty;
    }
});

Template.infos.helpers({
    Commerce : function(){
        let param = Iron.controller().getParams();
        Globals.schemas.tempCommerce_id = param._id;
        let commerce = Commerces.findOne({ _id : param._id });
        return commerce;
    }
});


Template.updateCommerce.helpers({
    Commerce : function(){
        let param = Iron.controller().getParams();
        Globals.schemas.tempCommerce_id = param._id;
        let commerce = Commerces.findOne({ _id : param._id });
        return commerce;
    }
});
