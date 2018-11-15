exports.up = function (knex, Promise) {
    return knex.schema.createTable('ingredients', function (table) {
        table.increments()
        table.string('name', 50).notNullable()
        table.float("amount needed").notNullable()
     })
 };
 exports.down = function (knex, Promise) {
     return knex.schema.dropTableIfExists('ingredients')
 };