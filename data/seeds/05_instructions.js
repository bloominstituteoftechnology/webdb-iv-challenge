
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('instructions').del()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        {instruction_text: 'brown and drain the meat'},
        {instruction_text: 'add crushed tomatoes'},
        {instruction_text: 'add beans'},
        {instruction_text: 'chop garlic and add to dish'},
        {instruction_text: 'add spices'},
        {instruction_text: 'bring to a boil'},
        {instruction_text: 'let simmer for 30+ minutes'},
        {instruction_text: 'combine meat, egg(s), and spices'},
        {instruction_text: 'form into patties'},
        {instruction_text: 'cook bacon'},
        {instruction_text: 'grill until juices run clear'},
        {instruction_text: 'place patties on buns'},
        {instruction_text: 'drizzle barbecue sauce on patty'},
        {instruction_text: 'place 1-2 onion rings on patty'},
        {instruction_text: 'place bacon on patty'},
        {instruction_text: 'place lettuce and tomato on patty'},
        {instruction_text: 'add top bun and serve'},
      ]);
    });
};
