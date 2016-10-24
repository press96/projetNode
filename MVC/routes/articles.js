var express = require('express');
var router = express.Router();
var users = require('../controllers/Articles');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/', users.index);
router.post('/create', users.creeArticles);
router.put('/:id', users.modifier);
router.delete('/:id(\\d+)', users.supprimer);
router.get('/:id', users.rechercheArticles);

module.exports = router;
