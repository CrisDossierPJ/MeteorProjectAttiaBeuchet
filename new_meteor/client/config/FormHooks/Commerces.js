AutoForm.hooks({
    'insertCommerces': {
        onSubmit: function (doc) { // Gestion du formulaire d'inscription
            console.log(doc);
            let error = null;
            let name = doc.name;
            let telephone = doc.telephone;
            let horaires = doc.horaires;
            let adresse = doc.adresse;
            let picture = doc.picture;
            let longitude = doc.longitude;
            let latitude = doc.latitude;


            Commerces.insert({
                name: name,
                telephone: telephone,
                horaires: horaires,
                adresse: adresse,
                picture: picture,
                longitude: longitude,
                latitude: latitude
            }, function (err) {
                if (err) {
                    error = new Error("Une erreur s'est produite");
                }
            });

            if (error === null) {
                this.done(); // Appelle onSuccess
            }
            else {
                this.done(error); // Appelle onError
            }
            return false; // Dans tout les cas, arrete la soumission des donneés.
        },

        onSuccess: function () {
            Router.go('home');
        },

        onError: function (formType, err) {
            console.log(err)
        }
    },
    'updateCommerces': {
        onSubmit: function (doc) { // Gestion du formulaire d'inscription
            console.log(doc);
            let error = null;
            let name = doc.name;
            let telephone = doc.telephone;
            let horaires = doc.horaires;
            let adresse = doc.adresse;
            let picture = doc.picture;
            let longitude = doc.longitude;
            let latitude = doc.latitude;
            let _id = Globals.schemas.tempCommerce_id; // solution de secours


            Commerces.update({"_id": _id},
                {
                    $set:
                        {
                            name: name,
                            telephone: telephone,
                            horaires: horaires,
                            adresse: adresse,
                            picture: picture,
                            longitude: longitude,
                            latitude: latitude
                        },
                }
                , function (err) {
                    if (err) {
                        error = new Error("Une erreur s'est produite");
                    }
                });

            if (error === null) {
                this.done(); // Appelle onSuccess
            }
            else {
                this.done(error); // Appelle onError
            }
            return false; // Dans tout les cas, arrete la soumission des donneés.
        },

        onSuccess: function () {
            Router.go('home');
        },

        onError: function (formType, err) {
            console.log(err)
        }
    },
    'deleteCommerces': {
        onSubmit: function (doc) {
            let error = null;
            let _id = Globals.schemas.tempCommerce_id; // solution de secours
            Commerces.remove(
                {_id: _id},
                function (err) {

                    if (err) {
                        error = new Error("Une erreur s'est produite");
                    }
                });

            if (error === null) {
                this.done(); // Appelle onSuccess

            }
            else {
                this.done(error); // Appelle onError.

            }
            return false; // Dans tout les cas, arrete la soumission des donneés.
        },

        onSuccess: function () {
            Router.go('home');

        },

        onError: function (formType, err) {
            console.log(err)
        }


    },

});
