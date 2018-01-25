const db = require('./knex')

function getPeople(){
  return db('people').select()
}

function getPeopleById(id){
  return db('people').select('*').where('id', id)
}

module.exports = {
  getPeople,
  getPeopleById
}
