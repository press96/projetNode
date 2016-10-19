require('../models/User');

var mongoose = require('mongoose'),
    User = mongoose.model('User');


var Users = {

    index: function (req, res) {

        User.find({}, function (err, users) {
            if (err) throw err;
            res.render('views/index', {title: "users", users: users});
        });
    },

    inscription: function (req, res) {

        var u = new User({

            nom: req.body.nom,
            prenom: req.body.prenom,
            pseudo: req.body.pseudo,
            email: req.body.email,
            password: req.body.password,
        });

        u.save(function (err) {
            if (!err) {
                console.log('User inserted');
                res.redirect('/users/connexion');
            }
        });

        
    },

    connexion: function (req, res) {
        User.findOne({email: req.body.email, password: req.body.password}, function (err, user) {
            if (err) throw err;
            res.render('view/index', {title: "user", user: user});
        });

    },

    modifier: function (req, res) {
        User.find({}, function (err, users) {
            if (err) throw err;
            res.render('views/index', {title: "users", users: users});
        });
        
    },

    afficherModification: function (req, res) {
        User.find({}, function (err, users) {
            if (err) throw err;
            res.render('views/index', {title: "users", users: users});
        });res.send(req.params.id);
        
    },

    supprimer: function (req, res) {
        User.findOne({email: req.body.email, password: req.body.password}, function(err, user) {
            console.log('User supprimer');
        });

    },

    rechercheUsers: function (req, res) {
        A.findOne({email: req.body.email}, function(err, user) {
          res.render('views/index', {title: "users", users: users});  
        });
    },

     
};

module.exports = Users;