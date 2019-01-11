
exports.up = function (knex, Promise) {
    return knex.schema.createTable('', table => {
        table.increment('id');
        table.string('step').notNullable();
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('steps');
};
