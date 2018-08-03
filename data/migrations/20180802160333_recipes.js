exports.up = function (knex, Promise) {
    return knex.schema.createTable("recipes", tbl => {
        tbl.increments();
        tbl.string("name", 128).notNullable();
        tbl
            .integer("dishes_id")
            .unsigned()
            .notNullable()
            .references("id")
            .inTable("dishes");
        tbl.timestamp("created_at").defaultTo(knex.fn.now());
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists("recipes");
};
