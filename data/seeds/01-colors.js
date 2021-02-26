
exports.seed = function(knex, promise) {
  
  return knex('colors')
    .truncate()
    .then(function() {
      return knex('colors').insert([
        { name: 'blue' },
        { name: 'red' },
        { name: 'white' },
        { name: 'black' },
      ]);
    });
};
