AutoForm.hooks({
    'insertUser': {
        onSubmit: function (doc) { // Gestion du formulaire d'inscription
            console.log(doc);
            let error = null;
            let password = doc.password;
            let email = doc.emails[0].address;
            Accounts.createUser({
                username: doc.username,
                email: email,
                password: password,
                profile: doc.profile ? doc.profile : {}
            }, function (err) {
                if (err) {
                    error = new Error("Une erreur s'est produite");
                }
            });

            if (error === null) {
                //Accounts.sendVerificationEmail(Accounts.findUserByEmail(email)._id);
                this.done(); // Appelle onSuccess
            }
            else {
                this.done(error); // Appelle onError
            }

            return false; // Dans tout les cas, arrete la soumission des donneés.
        },

        onSuccess: function () {
            Router.go(Utils.pathFor('home'));
        },

        onError: function (formType, err) {
            alert(err.reason)
        }

    }, 'updateUsers': {
        onSubmit: function (doc) { // Gestion du formulaire d'inscription
            console.log(doc);
            console.log(doc.emails[0].address)
            let error = null;
            let password = doc.password;
            let username = doc.username;
            let emails = doc.emails[0].address;
            let email = doc.emails.$.address;
            /*
            let emails = [{
                address: email,
                verified: true
            }];
            */

            let _id = Globals.schemas.tempUser_id;
            Accounts.setPassword(_id, password),
                Accounts.setUsername(_id, username),

                Meteor.users.update({"_id": _id},
                    {
                        $set:
                            {
                                emails: emails,
                            },
                    },
                    function (err) {
                        if (err) {
                            error = new Error("Une erreur s'est produite");
                        }
                    }
                )
            ;

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
        }
        ,

        onError: function (formType, err) {

            console.log(err)
        }
    },


})
;