
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('steps').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {recipe_id: 1, order: 1, ingredient: 'Heat oven to 250°F. In large skillet, brown ground beef and onion over medium heat for 8 to 10 minutes or until beef is thoroughly cooked, stirring frequently. Drain. '},
        {recipe_id: 1, order: 2, ingredient: 'Stir in chili powder, salt, garlic powder and tomato sauce. Reduce heat to low; cover and simmer 10 minutes. '},
        {recipe_id: 1, order: 3, ingredient: 'Meanwhile, place taco shells on ungreased cookie sheet. Heat at 250°F. for 5 minutes.'},
        {recipe_id: 1, order: 4, ingredient: 'To assemble tacos, layer beef mixture, cheese, lettuce and tomatoes in each taco shell. Serve with salsa; top with sour cream.'},
       
        {recipe_id: 2, order: 1, ingredient: 'Cook rice according packet instructions. Drain and cool.'},
        {recipe_id: 2, order: 2, ingredient: 'Heat ½ oil in wok or large frying pan; add eggs; swirl over base to form an omelette; cook until firm. Remove egg from wok, roll up firmly, and cut into thin slices.'},
        {recipe_id: 2, order: 3, ingredient: 'Chop meat and vegetables into 2cm pieces.'},
        {recipe_id: 2, order: 4, ingredient: 'Heat remaining oil in pan add meat/fish cook for 1 minutes, add vegetables, heat for 1 minute add rice, egg and MAGGI Original Seasoning. Stir until heated through.'},
      ]);
    });
};
