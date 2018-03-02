Template.addArticle.helpers({
    Param : function(){
        let param = Iron.controller().getParams()._id;
        console.log(param)
    }
});

Template.updateArticle.helpers({
    Article : function(){
        let param = Iron.controller().getParams()._idarticle;
        Globals.schemas.tempArticle_id = param;
        article = Articles.findOne(param);
        return article;
    }
});

Template.deleteArticle.helpers({
    Article : function(){
        let param = Iron.controller().getParams()._id;
        Globals.schemas.tempArticle_id = param;
        article = Articles.findOne(param);
        return article;
    }
});

function addToCaddy(article) {
    let paniervide = [];
    let panier = Session.get('Panier');
    if (panier) {
        paniervide = panier;
        for (let i = panier.length - 1; i < panier.length; i++) {
            let current_article = paniervide[i];
            if (article._id === current_article._id) {
                current_article.qte++;
            } else {
                article.qte = 0;
                paniervide.push(article);
            }
        }
        Session.delete('Panier');
        Session.set('Panier', paniervide);
    } else {
        article.qte = 1;
        paniervide.push(article);
        Session.set('Panier', paniervide);
    }
}