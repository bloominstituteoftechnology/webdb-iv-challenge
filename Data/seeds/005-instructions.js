
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('instructions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        {recipe_id: 1, steps: "Warm up tortillas"},
        {recipe_id: 1, steps: "Cook ground beef"},
        {recipe_id: 1, steps: "Assemble with sour cream, salsa, and cheese"},
        {recipe_id: 2, steps: "Warm up tortillas"},
        {recipe_id: 2, steps: "Cook chicken"},
        {recipe_id: 2, steps: "Assemble with sour cream, salsa, and cheese"},
        {recipe_id: 3, steps: "Warm up tortillas"},
        {recipe_id: 3, steps: "Cook steak"},
        {recipe_id: 3, steps: "Assemble with sour cream, salsa, and cheese"},
        {recipe_id: 4, steps: "Warm up tortillas"},
        {recipe_id: 4, steps: "Cook and shred pork"},
        {recipe_id: 4, steps: "Assemble with sour cream, salsa, and cheese"},
        {recipe_id: 5, steps: "Cook pasta"},
        {recipe_id: 5, steps: "Mix eggs, parsley, and cheese"},
        {recipe_id: 5, steps: "Cook pancetta, turn off heat"},
        {recipe_id: 5, steps: "Add pasta and egg mixture to pan with pancetta"},
        {recipe_id: 5, steps: "Stir until egg mixture forms creamy sauce"},
        {recipe_id: 7, steps: "Cook pasta"},
        {recipe_id: 7, steps: "Combine and boil cream and cheese"},
        {recipe_id: 7, steps: "Assemble and top with parsley"},
        {recipe_id: 6, steps: "Cook pasta"},
        {recipe_id: 6, steps: "Combine ground beef, eggs, onions, basil, and breadcrumbs"},
        {recipe_id: 6, steps: "Bake meatballs"},
        {recipe_id: 6, steps: "Heat pasta sauce and put in meatballs"},
        {recipe_id: 6, steps: "Assemble and top with cheese"},
        {recipe_id: 8, steps: "Cook pasta"},
        {recipe_id: 8, steps: "Combine pasta, tomatoes, spinach, dressing, basil, and cheese"},
      ]);
    });
};
