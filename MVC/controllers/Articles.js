require('../models/Article');

var mongoose = require('mongoose'),
    Article = mongoose.model('Article');


var Articles = {


///////////////////////////////////////////// rendus vus de Articles ///////////////////////////////////////////


    Articles: function (req, res) {

        Article.find({}, function (err, articles) {
            if (err) throw err;
            res.render('Article/Articles');
        });
    },


    newArticle: function (req, res) {
        res.render('Article/newArticle');
    },


    updateArticle: function (req,res) {
        res.render('Article/updateArticle');
    },


/////////////////////////////////////////// CRUD Recherche et lecture Articles /////////////////////////////    


    // recherche: function (req, res) {
    //     A.findOne({titre: req.body.titre}, function(err, article) {
    //         res.redirect('Index/recherche');
    //     });
    // },


//////////////////////////////////////////// CRUD Creation Articles ////////////////////////////////////////////


    create: function (req, res) {

        var newArticle = new Article({
            
            titre: req.body.titre.trim(),
            pseudo: req.body.pseudo.trim(),
             typeDePoste: req.body.typeDePoste.trim(),
            description: req.body.description.trim(),
            image: req.body.image.trim(),
            commentaire: req.body.commentaire.trim(),
        });

        if(newArticle.titre.length == 0 || newArticle.pseudo.length == 0 || newArticle.typeDePoste.length == 0 || newArticle.description.length == 0 || newArticle.image.length == 0 || newArticle.commentaire.length == 0){

            console.log('Champs mal remplis');
            res.redirect('/Article/newArticle');

        } else {
            Article.findOne({ titre : req.body.titre }, function(err, titre){
                console.log(titre);
                if(titre){
                    console.log('L Article existe deja');
                    return res.redirect('/Article/newArticle');
                } else {
                    newArticle.save(function (err, newArticle) {
                        if (err) {
                            throw err;
                            console.log('faile');
                        }else {
                            console.log(newArticle);
                            console.log('Article cree ');
                            res.redirect('/indexconnect');    
                        };
                    });
                }
            });
        }
    },


//////////////////////////////////////////// CRUD Modification Articles ////////////////////////////////////////


    update: function (req, res) {
        Article.find({}, function (err, articles) {
            if (err) throw err;
            console.log(articles);
            res.render('Article/updateArticle');
        });
        
    },


/////////////////////////////////////////// CRUD Suppression Articles //////////////////////////////////////////


    delete: function (req, res) {
        Article.findOne({titre: req.body.titre}, function(err, article) {
            console.log('Article supprimer');
            res.render('/indexconnect');

        });

    },

};

module.exports = Articles;