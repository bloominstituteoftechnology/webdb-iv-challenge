
exports.up = function(knex, Promise) {
    return knex.schema.createTable("steps", function(tbl) {
        tbl.increments()
        tbl.string("step", 500).notNullable()
        tbl.integer("recipe_id").unsigned().references("id").inTable("recipes")
        tbl.integer("step_order").unique()
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("steps")
};
