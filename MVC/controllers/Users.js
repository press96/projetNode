require('../models/User');

var mongoose = require('mongoose'),
    User = mongoose.model('User');


var Users = {


//////////////////////////////////////////////// GET Users ////////////////////////////////////////////////////


    index: function (req, res) {

        User.find({}, function (err, users) {
            if (err) throw err;
            res.render('User/', {title: "users", users: users});
        });
    },


    signin: function (req,res) {
        res.render('User/signIn');
    },


    signup: function (req, res) {
        res.render('User/signUp');
    },

    emailProfile: function(req, res){
        //if (req.session.connected == true) {
            res.render('User/emailProfile');
        //} else {
            //res.redirect('/');
        //}
    },


    profile: function(req, res){
        //if (req.session.connected == true) {
            res.render('User/profile');
        //} else {
            //res.redirect('/');
        //}
    },


    // recherche: function (req, res) {
    //     A.findOne({email: req.body.email}, function(err, user) {
    //       res.render('Index/recherche');  
    //     });
    // },


    logout: function (req, res) {
        req.session.destroy();
        res.clearCookie("connect.sid", {path: '/'});
        res.redirect('/');
        console.log('session fermé');
    },


///////////////////////////////////////////// CRUD Connexion Users ////////////////////////////////////////////


    login: function (req, res) {
        let newForm = {
            email : req.body.email.trim(),
            password : req.body.password.trim(),
        };

        if (newForm.email.length == 0 || newForm.password.length == 0) {

            console.log('Les champs sont vides');
            res.redirect('/users/signin');

        } else {

            User.findOne({ email : newForm.email }, function(err, user){
                if (err) {

                    console.log('Impossible de se connecter - Email incorrect');
                    console.log(err);
                    res.redirect('/users/signin');

                } else if (user.password != newForm.password) {

                    res.redirect('/users/signin');

                } else {

                    console.log('L utilisateur existe, il peut se connecter');
                    console.log(user);
                    //req.session.user = user;
                    res.redirect('/indexconnect');

                }
            });
        }
    },


///////////////////////////////////////// CRUD Inscription Users //////////////////////////////////////////////


    create: function (req, res) {

        let newForm = {
            nom: req.body.nom.trim(),
            prenom: req.body.prenom.trim(),
            pseudo: req.body.pseudo.trim(),
            email: req.body.email.trim(),
            password: req.body.password.trim(),
        };

        if(newForm.nom.length == 0 || newForm.prenom.length == 0 || newForm.pseudo.length == 0 || newForm.email.length == 0 || newForm.password.length == 0){

            console.log('Champs mal remplis');
            res.redirect('/users/signup');
        } else {    

            User.findOne({ email : req.body.email }, function(err, email){
                console.log(email);
                if(email){
                    console.log('L utilisateur existe deja');
                    return res.redirect('/users/signIn');
                } else {

                    console.log('OK pas en base');

                    var Utilisateur = new User ({
                        nom: newForm.nom,
                        prenom: newForm.prenom,
                        pseudo: newForm.pseudo,
                        email: newForm.email,
                        password: newForm.password,
                    });

                    console.log(Utilisateur);

                    Utilisateur.save(function (err, user){
                        if(err) {
                            throw err;
                            console.log('failed');
                        }
                        else {
                            console.log('pass');
                            // req.session.user = user;
                            res.redirect('/users/signIn');
                        };
                    });
                }

            });
        };
    },


////////////////////////////////////////// CRUD Modifications Users ///////////////////////////////////////////


    update: function (req, res) {
        // console.log('hello');
        let newForm = {
            nom: req.body.nom.trim(),
            prenom: req.body.prenom.trim(),
            pseudo: req.body.pseudo.trim(),
            email: req.body.email.trim(),
            password: req.body.password.trim(),
        };

        if(newForm.nom.length == 0 || newForm.prenom.length == 0 || newForm.pseudo.length == 0 || newForm.email.length == 0 || newForm.password.length == 0){
            
            console.log('Champs mal remplis');
            res.redirect('/users/emailProfile');

        } else {
            res.redirect('/users/profile');
            User.findOneAndUpdate({ email : req.body.email, password : req.body.password }, function(err, email, password){
                if (err) {throw err;
                    } else{
                        var Utilisateur = new User ({
                            nom: newForm.nom,
                            prenom: newForm.prenom,
                            pseudo: newForm.pseudo,
                            email: newForm.email,
                            password: newForm.password,
                        });
                         console.log(Utilisateur);
                        if (Utilisateur.nom.length == 0 || Utilisateur.prenom.length == 0 || Utilisateur.pseudo.length == 0 || Utilisateur.email.length == 0 || Utilisateur.password.length == 0){
                            console.log('Champs mal remplis');
                            res.redirect('/users/profile');
                        }
                        else{
                             console.log(Utilisateur);
                            Utilisateur.save(function (err, user){
                                if(err) {
                                    throw err;
                                    connsole.log("failed");
                                }
                                else {
                                    console.log('pass');
                                    req.session.user = user;
                                    res.redirect('/');
                                }
                            });


                        };

                    }
                });
        };
    },


///////////////////////////////////////// CRUD Suppression Users //////////////////////////////////////////////


    delete: function (req, res) {
        // delete.User.findOne({email: req.body.email, password: req.body.password}, function(err, user) {
        //     console.log(user);
        //     console.log('User supprimer');
        //     res.render('index/index');
        User.findOne({email: req.body.email, password: req.body.password}, function(err, user) {
            console.log(user);

            console.log('User supprimer');
            res.render('index/index');
        });
    },

};

module.exports = Users;