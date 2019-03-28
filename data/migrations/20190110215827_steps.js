
exports.up = function(knex, Promise) {
  return knex.schema.createTable('steps', table => {
    table.increments();
    table.text('step_1').notNullable();
    table.text('step_2');
    table.text('step_3');
    table.text('step_4');
    table.text('step_5');
    table.text('step_6');
    table.text('step_7');
    table.text('step_8');
    table.text('step_9');
    table.text('step_10');
    table.text('step_11');
    table.text('step_12');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('steps');
};
