const connection = require('../config/db');
const dotenv = require('dotenv').config();

async function storeTask(request, response) {
  
  const params = Array(
    request.body.name,
    request.body.date,
    request.body.email,
    request.body.password,
  );
  const params2 = Array(
    request.body.email,
  );

  const query = 'INSERT INTO user_account(name, date, email, password) VALUES(?, ?, ?, ?)';

  connection.query(query, params, (err, results) => {
    if(results) {
      response
        .status(201)
        .json({
          success: true,
          message: 'Conta criada com sucesso!',
          data: results
        })
    } else {
      response
        .status(400)
        .json({
          success: false,
          message: 'Dados inválidos',
          data: err
      })
    }
  })

  const query2 = 'INSERT INTO user_minigame1(user_email, level) VALUES(?, 1)';

  connection.query(query2, params2, (err, results2) => {
  })
}

module.exports = {
  storeTask
}