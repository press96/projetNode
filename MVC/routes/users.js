var express = require('express');
var router = express.Router();
var users = require('../controllers/Users');

router.get('/', users.index);
//router.get('/register', users.register);
router.post('/create', users.create);
router.put('/:id', users.update);
router.get('/:id', users.updateView);
router.delete('/:id(\\d+)', users.delete);
//router.get('/connexion', users.login);
//router.post('/connexion', users.connexion);

module.exports = router;

