var express = require('express');
var router = express.Router();
var Users = require('../controllers/Users');


router.get('/', Users.index);


router.get('/signUp', Users.signup);
router.post('/create', Users.create);


router.get('/signIn', Users.signin);
router.post('/login', Users.login);


router.get('/emailProfile', Users.emailProfile);
router.post('/update', Users.update);

router.get('/profile', Users.profile);
router.put('/update', Users.update);


router.delete('/delete', Users.delete);


router.get('/logout', Users.logout);

module.exports = router;
