const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '',
  database: 'EmpresaBD'
});

connection.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Conexão com banco de dados MySQL estabelecida com sucesso!');
});

module.exports = connection;