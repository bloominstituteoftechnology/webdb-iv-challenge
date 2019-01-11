
exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('ingredient_applications').del()
        .then(function () {
            // Inserts seed entries
            return knex('ingredient_applications').insert([
                {id: 1, qty: 20, uom: 'lb', ingredient_id: 7, recipe_instruction_id: 1},
                {id: 2, qty: 3, uom: 'cup', ingredient_id: 1, recipe_instruction_id: 2},
                {id: 3, qty: 3, uom: 'cup', ingredient_id: 2, recipe_instruction_id: 2},
                {id: 4, qty: 2, uom: 'cup', ingredient_id: 11, recipe_instruction_id: 2}
            ]);
        });
};

/*{id: 1, name: 'sausage'},
{id: 2, name: 'pepperoni'},
{id: 3, name: 'artichoke heart'},
{id: 4, name: 'garlic'},
{id: 5, name: 'bell pepper'},
{id: 6, name: 'red onion'},
{id: 7, name: 'cheese'},
{id: 8, name: 'sun dried tomato'},
{id: 9, name: 'bun'},
{id: 10, name: 'veggie dog'},
{id: 11, name: 'beef'},
{id: 12, name: 'blue cheese'},
{id: 13, name: 'bacon'}*/

/*
table.increments('id');
table.float('qty');
table.enu('uom', ['g', 'tbsp', 'tsp', 'cup', 'oz', 'fl oz', 'gal', 'l', 'lb']);
table.foreign('ingredient_id').notNullable().references('id').on('ingredients');
table.foreign('recipe_instruction_id').notNullable().references('id').on('recipe_instructions');*/
