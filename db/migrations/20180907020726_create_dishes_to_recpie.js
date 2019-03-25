exports.up = function(knex, Promise) {
  return knex.schema.createTable(`DishesToRecipie`, table => {
    table
      .integer(`dish_id`)
      .unsigned()
      .notNullable()
      .references(`id`)
      .inTable(`dishes`);

    table
      .integer(`recpie_id`)
      .unsigned()
      .notNullable()
      .references(`id`)
      .inTable(`recpie`);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable(`DishesToRecipie`);
};
