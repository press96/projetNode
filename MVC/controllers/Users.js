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

    create: function (req, res) {

        var u = new User({

            pseudo: req.body.pseudo,
            email: req.body.email,
        });

        u.save(function (err) {
            if (!err) {
                console.log('User inserted');
                res.redirect('/users/connexion');
            }
        });

        
    },

    update: function (req, res) {
        User.find({}, function (err, users) {
            if (err) throw err;
            res.render('views/index', {title: "users", users: users});
        });
        
    },

    updateView: function (req, res) {
        User.find({}, function (err, users) {
            if (err) throw err;
            res.render('views/index', {title: "users", users: users});
        });res.send(req.params.id);
        
    },

    delete: function (req, res) {

    }
};

module.exports = Users;