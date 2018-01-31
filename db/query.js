const db = require('./knex')

function verifyLogin(data){
  return db('people').where({username: data.username, password: data.password});
}

function getPeople(){
  return db('people').select()
}

function getPeopleById(id){
  return db('people').select('*').where('id', id)
}

module.exports = {
  getPeople,
  getPeopleById,
  verifyLogin,
}
