Router.configure({
    layoutTemplate: "index"
});

Router.route('/', {
    name: "home",
    template: "home"
});

Router.route('/register', {
    name: "user.register",
    template: "register"
});

Router.route('/login', {
    name: "user.login",
    template: "login"
});

Router.route('/commerce/add', {
    name: "commerce.add",
    template: "addCommerce"
});

Router.route('/commerce/:_id', {
    name: "commerce",
    template: "indexCommerce"
});

Router.route('/commerce/:_id/add', {
    name: "article.add",
    template : "addArticle"
});
Router.route('/commerce/:_id/update', {
    name: "commerce.update",
    template : "updateCommerce"
});

Router.route('/panier', {
    name: "article.panier",
    template : "panier"
});

Router.route('/commerce/delete/:_id', {
    name: "article.delete",
    template: "deleteArticle"
});

Router.route('/commerce/:_id/:_idarticle', {
    name: "article.update",
    template : "updateArticle"
});

Router.route('/admin/users/list', {
    name: "users.get",
    template : "showUsers"
});

Router.route('/admin/user/:_id/info', {
    name: "user.info",
    template : "infoUser"
});