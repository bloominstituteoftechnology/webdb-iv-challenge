
exports.up = function (knex, Promise) {
    return knex.schema.createTable('ingredients', tbl => {
        tbl.increments();

        tbl.string('name', 100).notNullable();

        tbl
            .integer('recipes_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('recipes')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');

        tbl
            .integer('quantity')
            .notNullable()

        tbl.timestamps();
    })
};

exports.down = function (knex, Promise) {

};
