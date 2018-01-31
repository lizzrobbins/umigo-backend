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
  return knex('people').del().then(function() {
    const people = [
      {
        username: 'Lizzrobbis',
        password: 'asdf',
        first_name: 'Lizz',
        last_name: 'Robbins',
        age: 28,
        gender: 'female',
        location: 'Denver',
        bio: 'words go here',
        photo1: 'lizz1.jpg',
      }, {
        username: 'Jrobbins',
        password: 'asdf',
        first_name: 'Jake',
        last_name: 'Robbins',
        age: 24,
        gender: 'male',
        location: 'Denver',
        bio: 'yay words!',
        photo1: 'jake1.jpg',
      }, {
        username: 'Kgibson',
        password: 'asdf',
        first_name: 'Kyle',
        last_name: 'Gibson',
        age: 25,
        gender: 'male',
        location: 'Denver',
        bio: 'words go here too',
        photo1: 'kyle1.jpg',
      }, {
        username: 'Aklein',
        password: 'asdf',
        first_name: 'Anna',
        last_name: 'Klein',
        age: 24,
        gender: 'female',
        location: 'Denver',
        bio: 'More words here',
        photo1: 'anna1.jpg',
      }, {
        username: 'Apuccio',
        password: 'asdf',
        first_name: 'Alex',
        last_name: 'Puccio',
        age: 24,
        gender: 'female',
        location: 'Boulder',
        bio: 'Hey all! I am a professional rock climber. While I love all styles of climbing, I have a particular affinity for bouldering. I started climbing when I was 13, and I began competing nationally when I was 17. My favorite places to climb are Rocky Mountain National Park and Hueco Tanks! I\'m looking to hike and climb with some awesome people - let\' s spot each other !',
        photo1: 'puccio1.jpg',
      }
    ]
    return knex('people').insert(people)
  });
};
