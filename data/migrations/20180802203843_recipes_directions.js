exports.up = function (knex, Promise) {
    return knex.schema.createTable("recipes_directions", tbl => {
        tbl.increments();
        tbl
            .integer("recipes_id")
            .unsigned()
            .notNullable()
            .references("id")
            .inTable("recipes");
        tbl
            .integer("directions_id")
            .unsigned()
            .notNullable()
            .references("id")
            .inTable("directions");
    });
};

exports.down = function (knex, Promise) { };
