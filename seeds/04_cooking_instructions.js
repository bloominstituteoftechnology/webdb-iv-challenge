
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cooking_instructions').del()
    .then(function () {
      // Inserts seed entries
      return knex('cooking_instructions').insert([
        {cooking_instruct_id: 1, instruct_text: 'Heat oven to 160C/140C fan/gas 3 and line a 12-hole muffin tin with cases. Gently melt the butter, chocolate, sugar and 100ml hot water together in a large saucepan, stirring occasionally, then set aside to cool a little while you weigh the other ingredients.' , step_number: 1},
        {cooking_instruct_id: 1, instruct_text: 'Stir the eggs and vanilla into the chocolate mixture. Put the flour into a large mixing bowl, then stir in the chocolate mixture until smooth. Spoon into cases until just over three-quarters full (you may have a little mixture leftover), then set aside for 5 mins before putting on a low shelf in the oven and baking for 20-22 mins. Leave to cool.' , step_number: 2},
        {cooking_instruct_id: 1, instruct_text: 'For the icing, melt the chocolate in a heatproof bowl over a pan of barely simmering water. Once melted, turn off the heat, stir in the double cream and sift in the icing sugar. When spreadable. ' , step_number: 3},
        {cooking_instruct_id: 1, instruct_text: 'Top each cake with some and decorate with your favourite sprinkles and sweets.' , step_number:4 }
      ]);
    });
};
