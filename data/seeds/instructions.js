
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('instructions').del().truncate()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        {recipe_id: 1, step_number: 1, step_instruction: 'Add salt, pepper, garlic to ground beef and brown in a saucepan. Bring 4qt of water to a boil.'},
        {recipe_id: 1, step_number: 2, step_instruction: 'Salt pasta water, and cook pasta uncovered for 8-10 minutes. Add marinara sauce to browned beef.'},
        {recipe_id: 1, step_number: 3, step_instruction: 'Serve pasta with sauce on top, adding parmesean cheese to taste.'},
        {recipe_id: 2, step_number: 1, step_instruction: 'Add salt, pepper, garlic, and oregano to beef and brown in saucepan. Bring 4qt water to a boil.'},
        {recipe_id: 2, step_number: 2, step_instruction: 'Salt pasta water, cook pasta uncovered for 8-10 minutes. Add marinara sauce to browned beef.'},
        {recipe_id: 2, step_number: 3, step_instruction: 'Add frozen peas and mushrooms to sauce until thawed and heated. Serve pasta with sauce and grated parmesean.'},
        {recipe_id: 3, step_number: 1, step_instruction: 'Cube chicken breast and cook in large skillet. Cook 1 cups brown rice.'},
        {recipe_id: 3, step_number: 2, step_instruction: 'Combine rice with 1 can black beans, 1cup guacamole, 2tbsp sour cream, 0.5cup salsa verde.'},
        {recipe_id: 3, step_number: 3, step_instruction: 'Add chicken, mix, and enjoy.'},
        {recipe_id: 4, step_number: 1, step_instruction: 'Cook steak on skillet to med/rare. Cook 1cup brown rice.'},
        {recipe_id: 4, step_number: 2, step_instruction: 'Combine rice with 1 can black beans, 1cup guacamole, 2tbsp sour cream, 0.5cup salsa verde, 0.5cup pico de gallo, and 3 sliced jalapenos.'},
        {recipe_id: 4, step_number: 3, step_instruction: 'Add chicken, mix, top with hot sauce, and enjoy.'},
        {recipe_id: 5, step_number: 1, step_instruction: 'Heat a large skillet and season salmon with salt and oregano. Preheat oven to 400 degrees.'},
        {recipe_id: 5, step_number: 2, step_instruction: 'Sear top of salmon for 3 minutes, then flip and put into oven. Cook for 7 minutes, or until almost cooked through.'},
        {recipe_id: 5, step_number: 3, step_instruction: 'Sautee salmon in butter, and add pine nuts if desired. Carefully remove salmon from oven and skillet, and enjoy.'},
        {recipe_id: 6, step_number: 1, step_instruction: 'Heat a large skillet and season salmon with salt and oregano. Preheat oven to 400 degrees.'},
        {recipe_id: 6, step_number: 2, step_instruction: 'Sear top of salmon for 3 minutes, then flip and put into oven. Cook for 7 minutes, or until almost cooked through.'},
        {recipe_id: 6, step_number: 3, step_instruction: 'Slice potatoes into thin medallions, and fry in oil until soft inside. Season with black pepper, serve alongside salmon.'},
      ]);
    });
};
