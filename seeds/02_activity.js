// id - serial
// activity - text

exports.seed = function(knex, Promise) {
  return knex('activity').del()
    .then(function () {
      const activity = [{
        activity: 'Rock climbing'
      }, {
        activity: 'Backpacking'
      }, {
        activity: 'Hiking'
      }, {
        activity: 'Dirt biking'
      }, {
        activity: 'Backpacking'
      }]
      return knex('activity').insert(activity)
    });
};
