var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Vida Sustentável' });
});

/* GET página blog. */
router.get('/blog', function(req, res, next) {
  res.render('blog', { title: 'Vida Sustentável' });
 });

/* GET página doacoes. */
router.get('/doacoes', function(req, res, next) {
  res.render('doacoes', { title: 'Vida Sustentável' });
 });

/* GET página sobre. */
router.get('/sobre', function(req, res, next) {
  res.render('sobre', { title: 'Vida Sustentável' });
 });

/* GET página contato. */
router.get('/contato', function(req, res, next) {
  res.render('contato', { title: 'Vida Sustentável' });
 });

/* GET página blog. */
router.get('/usuario', function(req, res, next) {
  res.render('usuario', { title: 'vida Sustentável' });
 });

/* GET página formulariousuario. */
router.get('/doacoes/formulariousuario', function(req, res, next) {
  res.render('formulariousuario', { title: 'vida Sustentável' });
 });

/* GET página formularioong. */
router.get('/doacoes/formularioong', function(req, res, next) {
  res.render('formularioong', { title: 'vida Sustentável' });
 });

/* GET página criar. */
router.get('/usuario/criar', function(req, res, next) {
  res.render('criar', { title: 'vida Sustentável' });
 });

/* GET página post1. */
router.get('/blog/post1', function(req, res, next) {
  res.render('post1', { title: 'vida Sustentável' });
 });

/* GET página senha. */
router.get('/usuario/senha', function(req, res, next) {
  res.render('senha', { title: 'vida Sustentável' });
 });

module.exports = router;
