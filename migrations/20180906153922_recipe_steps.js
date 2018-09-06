
exports.up = function(knex, Promise) {
    return knex.schema.createTable('recipe_steps', tbl => {
        tbl.increments();
        tbl.integer('step #');
        tbl.string('description')
          .notNullable();
        tbl.integer('recipe_id')
          .unsigned()
          .references('id')
          .inTable('recipes');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('recipe_steps');
};
