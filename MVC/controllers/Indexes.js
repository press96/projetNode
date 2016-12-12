var Indexes = {


/////////////////////////////////////////// rendus vus de Indexes //////////////////////////////////////////////


    accueil: function (req, res) {
        res.render('Index/');
    },


    indexconnect: function (req, res) {
        res.render('Index/indexConnect');
    },

    recherche: function (req, res) {
        res.render('Index/recherche');
    },


//////////////////////////////////////////// CRUD recherche ///////////////////////////////////////////////////


    search: function (req, res) {
        console.log('recherche');
        // res.render('Index/recherche');
    }, 
};

module.exports = Indexes;
