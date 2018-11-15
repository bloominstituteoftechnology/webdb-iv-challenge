exports.seed = function(knex, Promise) {
  return knex('table_name')
    .truncate()
    .then(function() {
      return knex('table_name').insert([
        { name: 'Tacos' },
        { name: 'Bread' },
        { name: 'Pizza' }
      ])
    })
}
