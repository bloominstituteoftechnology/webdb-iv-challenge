
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {id: 1, name: 'Granny\'s Pizza', dish_id: 1, ingredients: '1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13', instructions: '1) In large bowl, dissolve yeast and sugar in water; let stand for 5 minutes. Add oil and salt. Stir in flour, a cup at a time, until a soft dough forms. 2) Turn onto floured surface; knead until smooth and elastic, about 2-3 minutes. Place in a greased bowl, turning once to grease the top. Cover and let rise in a warm place until doubled, about 45 minutes. Meanwhile, cook beef and onion over medium heat until no longer pink; drain. 3) Punch down dough; divide in half. Press each into a greased 12-in. pizza pan. Combine the tomato sauce, oregano and basil; spread over each crust. Top with beef mixture, green pepper and cheese. 4) Bake at 400° for 25-30 minutes or until crust is lightly browned.'},
        {id: 2, name: 'Tex-Mex Tacos', dish_id: 2, ingredients: '14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28', instructions: '1) Preheat a cast-iron skillet to medium-high. 2) Add the ground beef and cook, breaking up with a wooden spoon, for 1 minute. 3) Stir in the garlic, chili powder, oregano and cumin; season with salt and pepper. 4) Cook, stirring frequently, until the meat is browned, about 5 minutes. 5) Add 1/2 cup water, turn the heat to medium-low and simmer until the liquid is reduced by about half, 2 to 3 minutes. 6) Remove from the heat and cover to keep warm. 7) To make the tacos, spoon 2 to 3 tbsp. of meat into each shell and top with the desired accompaniments.'},
        {id: 3, name: 'Aunt Carol\'s Pound Cake', dish_id: 3, ingredients: '29, 30, 31, 32, 33, 34, 35, 36, 37', instructions: '1) Preheat oven to 350 degrees F. 2) With a mixer, cream butter and shortening together. Add sugar, a little at a time. Add eggs, 1 at a time, beating after each addition. Stir dry ingredients together in a bowl and add to mixer alternately with milk, starting with the flour and ending with the flour. Mix in vanilla. Pour into a greased and floured tube pan and bake for 1 to 1 1/2 hours, until a toothpick inserted in the center of the cake comes out clean.'}
      ]);
    });
};
