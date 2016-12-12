var express = require('express');
var router = express.Router();
var Articles = require('../controllers/Articles');

//* GET home page. */

router.get('/', Articles.Articles);


router.get('/newArticle', Articles.newArticle);
router.post('/create', Articles.create);


router.get('/updateArticle', Articles.updateArticle);
router.put('/update', Articles.update);


router.delete('/delete', Articles.delete);


module.exports = router;
