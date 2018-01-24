// id - serial
// username - text
// password - text
// first_name - text
// last_name - text
// age - integer
// gender - text
// gender_connection - text
// location - text
// bio - text
// photos - reference

exports.up = function(knex, Promise) {
  return knex.schema.createTable('people', (table) => {
    table.increments()
    table.text('username')
    table.text('password')
    table.text('first_name')
    table.text('last_name')
    table.integer('age')
    table.text('gender')
    table.text('gender_connection')
    table.text('location')
    table.text('bio')
    table.text('photos')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('people')
};
