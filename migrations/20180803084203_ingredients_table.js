
exports.up = function(knex, Promise) {
    return knex.schema.createTable('ingredients', function (tbl) {
        //pk
        tbl.increments();
        tbl.string('ingredient_name', 255)
        .notNullable();
        //.defaultTo('whatever you want to default')
        // add a foreign key 
        // tbl.integer('foreign_key_name')
        // .notNullable()
        // .onDelete('CASCADE')
        // .onUpdate('CASCADE')
        // .references('id')
        // .inTable('tablename');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('ingredients');
};
