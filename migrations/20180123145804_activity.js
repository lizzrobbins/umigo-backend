// id - serial
// activity - text

exports.up = function(knex, Promise) {
  return knex.schema.createTable('activity', (table) => {
    table.increments()
    table.text('activity')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('activity')
};
