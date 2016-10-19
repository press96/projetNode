var express = require('express');
var router = express.Router();
var users = require('../controllers/Users');

router.get('/', users.index);
router.post('/create', users.inscription);
router.post('/create', users.connexion);
router.put('/:id', users.modifier);
router.get('/:id', users.afficherModification);
router.delete('/:id(\\d+)', users.supprimer);


module.exports = router;

