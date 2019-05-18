
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('steps').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {Instructions: 'Instruction-'},
        {Instructions: 'Instruction--'},
        {Instructions: 'Instruction---'},
        {Instructions: 'Instruction----'},
        {Instructions: 'Instruction-----'},
        {Instructions: 'Instruction------'},
        {Instructions: 'Instruction-------'},
        {Instructions: 'Instruction--------'},
        {Instructions: 'Instruction---------'},
        {Instructions: 'Instruction----------'},
        {Instructions: 'Instruction-----------'},
        {Instructions: 'Instruction------------'},
      ]);
    });
};
