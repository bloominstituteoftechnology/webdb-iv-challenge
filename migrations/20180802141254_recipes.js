
exports.up = function (knex, Promise) {
    return knex.schema.createTable('recipes', tbl => {
        tbl.increments();

        tbl
            .string('name', 100)
            .notNullable()
            .unique();

        tbl
            .integer('dish_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('dishes')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');

        tbl.timestamps();
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('recipes')
};
