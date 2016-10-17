require('../models/Article');

var mongoose = require('mongoose'),
    Article = mongoose.model('Article');


var Articles = {
    index: function (req, res) {

        User.find({}, function (err, users) {
            if (err) throw err;
            res.render('views/index', {title: "articles", article: articles});
        });
    },
    
    create: function (req, res) {

        var u = new Article({
            
            titre: req.body.titre,
            image: req.body.image,
            pseudo: req.body,pseudo,
            date: req.body,date,
            description: req.body,description
        });

        u.save(function (err) {
            if (!err) {
                console.log('User inserted');
            }
        });

        res.redirect('/articles');
    },
    update: function (req, res) {
        
    },
    delete: function (req, res) {

    }
};

module.exports = Articles;