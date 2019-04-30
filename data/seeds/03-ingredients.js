

exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('ingredients').truncate()
        .then(function () {
            // Inserts seed entries
            return knex('ingredients').insert([
                { ingredient_name: 'Cheese'},
                { ingredient_name: 'Pizza Sauce'},
                { ingredient_name: 'Thin Crust'},
                { ingredient_name: 'Fresh Pan Dough'},
                { ingredient_name: 'Cheese'},
                { ingredient_name: 'Pan Sauce'},
                { ingredient_name: 'Taco Meat'},
                { ingredient_name: 'Charro Beans'},
                { ingredient_name: 'Mexican Rice'},
                { ingredient_name: 'Tortillas'},

            ]);
        });
};