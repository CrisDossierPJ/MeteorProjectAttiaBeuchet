import {Session} from 'meteor/session';

UI.registerHelper('getGlobal', function (varName) {
    return Globals[varName];
});

UI.registerHelper('setTitle', function (title) {
    if (!title) {
        title = Globals.appName;
    }
    else {
        title += " - " + Globals.appName;
    }

    document.title = title;
});

UI.registerHelper('getCommerces', function () {
    let datas = [];
    Commerces.find({}).forEach(function (myDoc) {
        datas.push(myDoc)
    });
    console.log(datas);
    return datas;

});

UI.registerHelper('isAdmin', function () {
    if (Roles.userIsInRole(Meteor.userId(), ['admin'])) {
        return true
    }
    else return false;
});

UI.registerHelper('addForPanier', function (article) {
    let paniervide = [];
    let panier = Session.get('Panier');
    if (panier) {
        let articles = Session.get('Panier');
        for (let i = 0; i < articles.length; i++) {
            if (article._id === articles[i]._id) {
                if(articles[i].qte){
                    articles[i].qte++;
                }
                else {
                    articles[i].qte = 1;
                    panier.push(article);
                }
            }
        }
        Session.set('Panier', panier);
    } else {
        paniervide.push(article);
        Session.set('Panier', paniervide);
    }
});





UI.registerHelper('getPanier', function () {

    let articles = Session.get('Panier');

    return articles;
});