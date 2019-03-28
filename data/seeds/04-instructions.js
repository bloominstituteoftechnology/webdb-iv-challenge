exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("instructions")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("instructions").insert([
        // Recipe 1
        {
          step: 1,
          recipeId: 1,
          textDescription: "This is the first step for recipe 1."
        },
        {
          step: 2,
          recipeId: 1,
          textDescription: "This is the second step for recipe 1."
        },
        {
          step: 3,
          recipeId: 1,
          textDescription: "This is the third step for recipe 1."
        },

        // Recipe 2
        {
          step: 1,
          recipeId: 2,
          textDescription: "This is the first step for recipe 2."
        },
        {
          step: 2,
          recipeId: 2,
          textDescription: "This is the second step for recipe 2."
        },
        {
          step: 3,
          recipeId: 2,
          textDescription: "This is the third step for recipe 2."
        },

        // Recipe 3
        {
          step: 1,
          recipeId: 3,
          textDescription: "This is the first step for recipe 3."
        },
        {
          step: 2,
          recipeId: 3,
          textDescription: "This is the second step for recipe 3."
        },
        {
          step: 3,
          recipeId: 3,
          textDescription: "This is the third step for recipe 3."
        },

        // Recipe 4
        {
          step: 1,
          recipeId: 4,
          textDescription: "This is the first step for recipe 4."
        },
        {
          step: 2,
          recipeId: 4,
          textDescription: "This is the second step for recipe 4."
        },
        {
          step: 3,
          recipeId: 4,
          textDescription: "This is the third step for recipe 4."
        },

        // Recipe 5
        {
          step: 1,
          recipeId: 5,
          textDescription: "This is the first step for recipe 5."
        },
        {
          step: 2,
          recipeId: 5,
          textDescription: "This is the second step for recipe 5."
        },
        {
          step: 3,
          recipeId: 5,
          textDescription: "This is the third step for recipe 5."
        },

        // Recipe 6
        {
          step: 1,
          recipeId: 6,
          textDescription: "This is the first step for recipe 6."
        },
        {
          step: 2,
          recipeId: 6,
          textDescription: "This is the second step for recipe 6."
        },
        {
          step: 3,
          recipeId: 6,
          textDescription: "This is the third step for recipe 6."
        },

        // Recipe 7
        {
          step: 1,
          recipeId: 7,
          textDescription: "This is the first step for recipe 7."
        },
        {
          step: 2,
          recipeId: 7,
          textDescription: "This is the second step for recipe 7."
        },
        {
          step: 3,
          recipeId: 7,
          textDescription: "This is the third step for recipe 7."
        },

        // Recipe 8
        {
          step: 1,
          recipeId: 8,
          textDescription: "This is the first step for recipe 8."
        },
        {
          step: 2,
          recipeId: 8,
          textDescription: "This is the second step for recipe 8."
        },
        {
          step: 3,
          recipeId: 8,
          textDescription: "This is the third step for recipe 8."
        }
      ]);
    });
};
