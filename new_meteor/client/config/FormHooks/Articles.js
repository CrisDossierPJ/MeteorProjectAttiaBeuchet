AutoForm.hooks({
    'insertArticles': {
        onSubmit: function (doc) { // Gestion du formulaire d'inscription
            console.log(doc);
            let error = null;
            let name = doc.name;
            let prix = doc.price;
            let quantite = doc.quantity;
            let Commerce_id = Globals.schemas.tempCommerce_id; // solution de secours


            let article = {
                name: name,
                price: prix,
                quantity: quantite,
            };
            Articles.insert(article, function (err) {
                if (err) {
                    error = new Error("Une erreur s'est produite");
                }
            });

            if (error === null) {
                let this_id = getCurrentId();
                let article_list = getCommerceArticles();
                article_list.push(this_id);
                Commerces.update({"_id": Commerce_id},
                    {
                        $set:
                            {"articles": article_list},
                    }
                );
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
    'updateArticles': {
        onSubmit: function (doc) { // Gestion du formulaire d'inscription
            console.log(doc);
            let error = null;
            let _id = Globals.schemas.tempArticle_id;
            //alert(_id)
            let name = doc.name;
            let prix = doc.price;
            let quantite = doc.quantity;


            let article = {
                name: name,
                price: prix,
                quantity: quantite,
            };
            Articles.update({"_id": _id},
                {
                    $set: article,
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
            Router.go('/commerce/' + Globals.schemas.tempCommerce_id);

        },

        onError: function (formType, err) {
            console.log(err)
        }
    },
    'deleteArticles': {
        onSubmit: function (doc) {
            let error = null;
            let _id = Globals.schemas.tempArticle_id; // solution de secours

            Articles.remove(
                {_id: _id},
                function (err) {

                    if (err) {
                        error = new Error("Une erreur s'est produite");
                    }
                });

            if (error === null) {
                let article_list = getCommerceArticles();
                for (let i = 0; i < article_list.length; i++) {

                    if (article_list[i] === Globals.schemas.tempArticle_id) {

                        article_list.splice(i, 1);
                        console.log(article_list);

                    }
                }

                Commerces.update({"_id": Globals.schemas.tempCommerce_id},
                    {
                        $set:
                            {"articles": article_list},
                    }
                );
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
            alert(err)
        }


    },
});

function getCurrentId() {
    let com = Articles.find({});
    let datas = [];
    com.forEach(function (myDoc) {
        datas.push(myDoc)
    });
    return datas[datas.length - 1]._id;
}

function getCommerceArticles() {
    let empty = [];
    console.log(Globals.schemas.tempCommerce_id);
    let articles = Commerces.findOne({_id: Globals.schemas.tempCommerce_id}).articles;
    if (articles) {
        return articles
    }
    else return empty;
}