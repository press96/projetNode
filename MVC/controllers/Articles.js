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
    
    creeArticle: function (req, res) {

        var u = new Article({
            
            titre: req.body.titre,
            pseudo: req.body.pseudo,
            description: req.body.description,
            commentaire: req.body.commentaire,
        });

        u.save(function (err) {
            if (!err) {
                console.log('User inserted');
            }
        });

        res.redirect('/articles');
    },

    modifier: function (req, res) {
        Article.find({}, function (err, users) {
            if (err) throw err;
            res.render('views/index', {title: "article", article: article});
        });
        
    },

    supprimer: function (req, res) {
        User.findOne({titre: req.body.titre}, function(err, article) {
            console.log('Article supprimer');
        });

    },

    rechercheArticles: function (req, res) {
        A.findOne({titre: req.body.titre}, function(err, article) {
            res.render('views/index', {title: "article", article: article});
        });
    },
};

module.exports = Articles;