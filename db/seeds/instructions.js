
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('instructions').del()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        {step: "In a food processor, thoroughly blend together the butter, rosemary, garlic, lemon zest, and lemon juice. Pour 1/3 of blended mixture into a small bowl for marinade. Cover remaining mixture, and set aside.", recipe_id:1 },
        {step: "Lightly season chicken breasts with salt and pepper. Rub chicken breasts with the marinade mixture. Place chicken breasts on a platter, cover, and refrigerate 3 hours.", recipe_id:1 },
        {step: "Preheat an outdoor grill for high heat and lightly oil grate. Pour half of the reserved rosemary and lemon mixture into a bowl for basting. Cover remaining mixture, and set aside for topping cooked chicken.", recipe_id:1 },
        {step: "Grill chicken breasts 4 minutes on each side, basting with rosemary and lemon basting mixture. Remove chicken breasts from grill, and top with small scoops of the remaining topping mixture.", recipe_id:1 },
      ]);
    });
};
