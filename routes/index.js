var express = require('express');
var router = express.Router();
const pool = require("../config/database.config");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Vida Sustentável' });
});

/* GET página blog. */
router.get('/blog', function (req, res, next) {
  res.render('blog', { title: 'Vida Sustentável' });
});

/* GET página doacoes. */
router.get('/doacoes', function (req, res, next) {
  res.render('doacoes', { title: 'Vida Sustentável' });
});

/* GET página sobre. */
router.get('/sobre', function (req, res, next) {
  res.render('sobre', { title: 'Vida Sustentável' });
});

/* GET página contato. */
router.get('/contato', function (req, res, next) {
  res.render('contato', { title: 'Vida Sustentável' });
});

/* GET página blog. */
router.get('/usuario', function (req, res, next) {
  res.render('usuario', { title: 'vida Sustentável' });
});

/* GET página formulariousuario. */
router.get('/formulariousuario', function (req, res, next) {
  res.render('formulariousuario', { title: 'vida Sustentável' });
});

router.post('/formulariousuario', async function (req, res, next) {
  try {
    const { nome, telefone, email, documento, valor, formaPagamento } = req.body;

    const sql = "INSERT INTO usuario ( nome, telefone, email, documento, valor, formaPagamento) VALUES (?,?,?,?,?,?);";
    const values = [nome, telefone, email, documento, valor, formaPagamento];
    const [rows] = await pool.query(sql, values);

    const { insertId } = rows;
    res.redirect(`/`);
  } catch (err) {
    console.error(err);
    next(new Error("Ocorreu um erro ao cadastrar o produto."));
  }
});

/* GET página formularioong. */
router.get('/formularioong', function (req, res, next) {
  res.render('formularioong', { title: 'vida Sustentável' });
});

router.post('/formularioong', upload.single("capa"), async function (req, res, next) {
  try {
    const { nome, documento, telefone, endereco, cep, cidade, email, mensagem } = req.body;
    const capa = req.file.filename;


    const sql = "INSERT INTO ong ( nome, documento, telefone, endereco, cep, cidade, email, capa, mensagem) VALUES (?, ?, ?);";
    const values = [nome, documento, telefone, endereco, cep, cidade, email, capa, mensagem];
    const [rows] = await pool.query(sql, values);

    const { insertId } = rows;
    res.redirect(`/`);
  } catch (err) {
    console.error(err);
    next(new Error("Ocorreu um erro ao cadastrar o produto."));
  }
});

/* GET página criar. */
router.get('/criar', function (req, res, next) {
  res.render('criar', { title: 'vida Sustentável' });
});

/* GET página post1. */
router.get('/post1', function (req, res, next) {
  res.render('post1', { title: 'vida Sustentável' });
});

/* GET página senha. */
router.get('/senha', function (req, res, next) {
  res.render('senha', { title: 'vida Sustentável' });
});

module.exports = router;
