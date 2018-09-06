
exports.up = function(knex, Promise) {
    return knex.schema.createTable("recipes", function(food){
        food.increments(); 
        food
            .string("recipe", 128)
            .notNullable()
            .unique("recipe");
        food    
            .integer("dish_id")
            .unsigned()
            .notNullable()
            .references("id")
            .inTable("dishes")
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("recipes"); 
};
