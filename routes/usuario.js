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

/* GET página doacoes. */
router.get('/doacoes', function(req, res, next) {
  res.render('doacoes', { title: 'Projeto Integrador | Contato' });
 });

/* GET página sobre. */
router.get('/sobre', function(req, res, next) {
  res.render('sobre', { title: 'Projeto Integrador | Contato' });
 });

/* GET página contato. */
router.get('/contato', function(req, res, next) {
  res.render('contato', { title: 'Projeto Integrador | Contato' });
 });

/* GET página blog. */
router.get('/usuario', function(req, res, next) {
  res.render('usuario', { title: 'Projeto Integrador | Contato' });
 });

module.exports = router;
