var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'VidaSustentavel' });
});

/* GET página blog. */
router.get('/blog', function(req, res, next) {
  res.render('blog', { title: 'Projeto Integrador | Contato' });
 });

module.exports = router;