var express = require('express');
var router = express.Router();
var Indexes = require('../controllers/Indexes');

router.get('/', Indexes.accueil);


router.get('/indexconnect',Indexes.indexconnect);


router.get('/recherche', Indexes.recherche);
router.post('/search', Indexes.search);


module.exports = router;
