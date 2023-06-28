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
  res.render('formulariousuario', { title: 'vida Sustentável', sucess: false });
});

router.post('/formulariousuario', async function (req, res, next) {
  try {
    const { nome, telefone, email, documento, valor, formaPagamento, ongDesejada } = req.body;

    const sql = "INSERT INTO usuario ( nome, telefone, email, documento, valor, formaPagamento, ongDesejada) VALUES (?,?,?,?,?,?, ?);";
    const values = [nome, telefone, email, documento, valor, formaPagamento, ongDesejada];
    const [rows] = await pool.query(sql, values);

    const { insertId } = rows;
    res.render(`formulariousuario.ejs`, {sucess: true});
  } catch (err) {
    console.error(err);
    next(new Error("Ocorreu um erro ao cadastrar o produto."));
  }
});

/* GET página formularioong. */
router.get('/formularioong', function (req, res, next) {
  res.render('formularioong', { title: 'vida Sustentável', sucess: false });
});

router.post('/formularioong', upload.single("capa"), async function (req, res, next) {
  try {
    const { nome, documento, telefone, endereco, cep, cidade, email, mensagem } = req.body;
    const capa = req.file.filename;


    const sql = "INSERT INTO ong ( nome, documento, telefone, endereco, cep, cidade, email, capa, mensagem) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);";
    const values = [nome, documento, telefone, endereco, cep, cidade, email, capa, mensagem];
    const [rows] = await pool.query(sql, values);

    const { insertId } = rows;
    res.render(`formularioong.ejs`, {sucess: true});
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

/* GET página post2. */
router.get('/post2', function (req, res, next) {
  res.render('post2', { title: 'vida Sustentável' });
});

/* GET página post3. */
router.get('/post3', function (req, res, next) {
  res.render('post3', { title: 'vida Sustentável' });
});

/* GET página post4. */
router.get('/post4', function (req, res, next) {
  res.render('post4', { title: 'vida Sustentável' });
});

/* GET página post5. */
router.get('/post5', function (req, res, next) {
  res.render('post5', { title: 'vida Sustentável' });
});

/* GET página post6. */
router.get('/post6', function (req, res, next) {
  res.render('post6', { title: 'vida Sustentável' });
});

/* GET página post7. */
router.get('/post7', function (req, res, next) {
  res.render('post7', { title: 'vida Sustentável' });
});

/* GET página post8. */
router.get('/post8', function (req, res, next) {
  res.render('post8', { title: 'vida Sustentável' });
});

/* GET página post9. */
router.get('/post9', function (req, res, next) {
  res.render('post9', { title: 'vida Sustentável' });
});

/* GET página post10. */
router.get('/post10', function (req, res, next) {
  res.render('post10', { title: 'vida Sustentável' });
});

/* GET página post11. */
router.get('/post11', function (req, res, next) {
  res.render('post11', { title: 'vida Sustentável' });
});

/* GET página senha. */
router.get('/senha', function (req, res, next) {
  res.render('senha', { title: 'vida Sustentável' });
});

module.exports = router;
