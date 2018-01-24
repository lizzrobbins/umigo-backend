// id - serial
// username - text
// password - text
// first_name - text
// last_name - text
// age - integer
// gender - text
// location - text
// bio - text
// photos - reference

exports.seed = function(knex, Promise) {
  return knex('people').del()
    .then(function () {
      const people = [{
        username: 'lizzrobbis',
        password: 'asdf',
        first_name: 'Lizz',
        last_name: 'Robbins',
        age: 28,
        gender: 'female',
        location: 'Denver',
        bio: 'words go here'
      }, {
        username: 'jrobbins',
        password: 'asdf',
        first_name: 'Jake',
        last_name: 'Robbins',
        age: 24,
        gender: 'male',
        location: 'Denver',
        bio: 'yay words!'
      }, {
        username: 'kgibson',
        password: 'asdf',
        first_name: 'Kyle',
        last_name: 'Gibson',
        age: 25,
        gender: 'male',
        location: 'Denver',
        bio: 'words go here too'
      }, {
        username: 'aklein',
        password: 'asdf',
        first_name: 'Anna',
        last_name: 'Klein',
        age: 24,
        gender: 'female',
        location: 'Denver',
        bio: 'More words here'
      }]
      return knex('people').insert(people)
    });
};
