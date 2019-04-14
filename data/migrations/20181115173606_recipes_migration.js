
exports.up = function(knex, Promise) {
    return knex.schema.createTable("recipes", function(tbl) {
        tbl.increments()
        tbl.string("name", 250).notNullable().unique()
        tbl.integer("dish_id").unsigned().references("id").inTable("dishes")
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("recipes")
};
