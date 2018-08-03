exports.up = function (knex, Promise) {
    return knex.schema.createTable("directions", tbl => {
        tbl.increments();
        tbl.text("description");
        tbl.timestamp("created_at").defaultTo(knex.fn.now());
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists("directions");
};
