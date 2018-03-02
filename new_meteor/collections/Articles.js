import SimpleSchema from 'simpl-schema';
Articles = new Mongo.Collection('articles');

Articles.allow({
    insert: function(){return true;},
    update: function(){return true;},
    remove: function(){return true;}
});

Globals.schemas.Articles = new SimpleSchema({
    name: {
        type: String,
        label: "Nom"
    },
    price: {
        type: String,
        label: "Prix"
    },
    quantity: {
        type: Number,
        label: "Quantité"
    }
});

Articles.attachSchema(Globals.schemas.Articles);