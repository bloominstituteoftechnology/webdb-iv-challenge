exports.seed = function(knex, Promise) {
    return knex('dishes')
    .then(function() {
        return knex('dishes').insert([
            {
                dish_name: 'Tacos'
            },
            {
                dish_name: 'Pizza'
            }
        ]);
    });
};