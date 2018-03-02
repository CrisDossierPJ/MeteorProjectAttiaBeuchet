import SimpleSchema from 'simpl-schema';
Commerces = new Mongo.Collection('commerces');
SimpleSchema.extendOptions(['options']);


Commerces.allow({
   insert: function(){return true;},
    update: function(){return true;},
    remove: function(){return true;}
});

Globals.schemas.Commerce = new SimpleSchema({
    name: {
        type: String,
        label: "Nom"
    },
    picture: {
        type: String,
        label: "Url de l'image"

    },
    horaires: {
        type: String,
        label: "Horaires"
    },
    latitude: {
        type: Number,
        label: 'Latitude'
    },
    longitude: {
        type: Number,
        label: 'longitude'
    },

    adresse: {
        type: String,
        label: "Adresse"
    },
    telephone: {
        type: String,
        label: "Téléphone"
    },
    articles: {
        type: Array,
        label: "Articles",
        optional: true
    },
    "articles.$": {
        type: String,
    }
});

Commerces.attachSchema(Globals.schemas.Commerce);

