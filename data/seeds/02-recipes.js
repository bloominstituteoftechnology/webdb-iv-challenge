exports.seed = function (knex, Promise) {
    // Deletes ALL existing entries
    return knex('recipes').truncate()
        .then(function () {
            // Inserts seed entries
            return knex('recipes').insert([
                {recipe_name: "Tex-mex", dish_id: 2},
                {recipe_name: "Granny's", dish_id: 2},
                {recipe_name: "Margherita", dish_id: 1},
                {recipe_name: "Neapolitan", dish_id: 1}
            ]);
        });
};