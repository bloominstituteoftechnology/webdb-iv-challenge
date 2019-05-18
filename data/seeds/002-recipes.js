exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('recipes').truncate()
    .then(function () {
        // Inserts seed entries
        return knex('recipes').insert([
        {name: 'pizza', dish_id: 1},
        {name: 'cheese pizza', dish_id: 1},
        {name: 'beef taco', dish_id: 2},
        {name: 'chicken taco', dish_id: 2},
        {name: 'cake desert', dish_id: 3},
        {name: 'cookies desert', dish_id: 3},
        ]);
    });
};