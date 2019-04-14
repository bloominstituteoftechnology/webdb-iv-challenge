

//== Seed Tables: Cohorts, Students ============================================

//-- Dependencies --------------------------------
const config = require('../../config.js');

//-- Seeding -------------------------------------
exports.seed = function(knex, Promise) {
    // For each table, Delete all entries then populate
    return Promise.all([
        // Populate Dishes
        knex(config.TABLE_DISHES).del().then(() => {
            return knex(config.TABLE_DISHES).insert([
                {[config.FIELD_NAME]: 'Rice and Beans'},
                {[config.FIELD_NAME]: 'Pico de gallo' },
            ])
        }),
        // Populate Recipes
        knex(config.TABLE_RECIPES).del().then(() => {
            return knex(config.TABLE_RECIPES).insert([
                {[config.FIELD_NAME]: 'Bland Rice and Beans' , [config.FIELD_DISH_ID]: 1},
                {[config.FIELD_NAME]: 'Better Rice and Beans', [config.FIELD_DISH_ID]: 1},
                {[config.FIELD_NAME]: 'Basic Pico de gallo'  , [config.FIELD_DISH_ID]: 2},
            ])
        }),
        // Populate Ingredients
        knex(config.TABLE_INGREDIENTS).del().then(() => {
            return knex(config.TABLE_INGREDIENTS).insert([
                {[config.FIELD_NAME]: 'Can of Kidney Beans'     },
                {[config.FIELD_NAME]: '1lb Goya Frijoles Negros'},
                {[config.FIELD_NAME]: 'Cup Pico de gallo'       },
                {[config.FIELD_NAME]: 'Cup White Rice'          },
                {[config.FIELD_NAME]: 'Cup Medium Grain Rice'   },
                {[config.FIELD_NAME]: 'Roma Tomatos'            },
                {[config.FIELD_NAME]: 'White Onion'             },
                {[config.FIELD_NAME]: 'Serrano Pepper'          },
                {[config.FIELD_NAME]: 'Lime'                    },
                {[config.FIELD_NAME]: 'Cup Chopped Cilantro'    },
                {[config.FIELD_NAME]: 'Cup Water'               },
            ])
        }),
        // Populate Requirements
        knex(config.TABLE_REQUIREMENTS).del().then(() => {
            return knex(config.TABLE_REQUIREMENTS).insert([
                {[config.FIELD_RECIPE_ID]: 1, [config.FIELD_INGREDIENT_ID]:11, [config.FIELD_AMOUNT]: 4  },
                {[config.FIELD_RECIPE_ID]: 1, [config.FIELD_INGREDIENT_ID]: 1, [config.FIELD_AMOUNT]: 1  },
                {[config.FIELD_RECIPE_ID]: 1, [config.FIELD_INGREDIENT_ID]: 4, [config.FIELD_AMOUNT]: 2  },
                {[config.FIELD_RECIPE_ID]: 2, [config.FIELD_INGREDIENT_ID]: 2, [config.FIELD_AMOUNT]: 1/2},
                {[config.FIELD_RECIPE_ID]: 2, [config.FIELD_INGREDIENT_ID]: 5, [config.FIELD_AMOUNT]: 2  },
                {[config.FIELD_RECIPE_ID]: 2, [config.FIELD_INGREDIENT_ID]: 3, [config.FIELD_AMOUNT]: 3/2},
                {[config.FIELD_RECIPE_ID]: 3, [config.FIELD_INGREDIENT_ID]: 6, [config.FIELD_AMOUNT]: 5  },
                {[config.FIELD_RECIPE_ID]: 3, [config.FIELD_INGREDIENT_ID]: 7, [config.FIELD_AMOUNT]: 1  },
                {[config.FIELD_RECIPE_ID]: 3, [config.FIELD_INGREDIENT_ID]: 8, [config.FIELD_AMOUNT]: 1  },
                {[config.FIELD_RECIPE_ID]: 3, [config.FIELD_INGREDIENT_ID]: 9, [config.FIELD_AMOUNT]: 1  },
                {[config.FIELD_RECIPE_ID]: 3, [config.FIELD_INGREDIENT_ID]:10, [config.FIELD_AMOUNT]: 1/2},
            ])
        }),
        // Populate Instructions
        knex(config.TABLE_INSTRUCTIONS).del().then(() => {
            return knex(config.TABLE_INSTRUCTIONS).insert([
                {[config.FIELD_RECIPE_ID]: 1, [config.FIELD_ORDER]: 1, [config.FIELD_DESCRIPTION]: "Boil water."},
                {[config.FIELD_RECIPE_ID]: 1, [config.FIELD_ORDER]: 2, [config.FIELD_DESCRIPTION]: "Add Rice, reduce heat. Simmer 20min."},
                {[config.FIELD_RECIPE_ID]: 1, [config.FIELD_ORDER]: 3, [config.FIELD_DESCRIPTION]: "Remove from heat, add Beans."},
                {[config.FIELD_RECIPE_ID]: 2, [config.FIELD_ORDER]: 1, [config.FIELD_DESCRIPTION]: "Soak Beans per instructions on the bag."},
                {[config.FIELD_RECIPE_ID]: 2, [config.FIELD_ORDER]: 2, [config.FIELD_DESCRIPTION]: "Boil water"},
                {[config.FIELD_RECIPE_ID]: 2, [config.FIELD_ORDER]: 3, [config.FIELD_DESCRIPTION]: "Add Rice, reduce heat. Simmer 20min."},
                {[config.FIELD_RECIPE_ID]: 2, [config.FIELD_ORDER]: 4, [config.FIELD_DESCRIPTION]: "Mix Rice and Beans, top with the Pico."},
                {[config.FIELD_RECIPE_ID]: 3, [config.FIELD_ORDER]: 1, [config.FIELD_DESCRIPTION]: "Chop Tomatos, Onion, Cerrano(s), and Cilantro."},
                {[config.FIELD_RECIPE_ID]: 3, [config.FIELD_ORDER]: 2, [config.FIELD_DESCRIPTION]: "Squeeze the lime, add to the vegetables."},
                {[config.FIELD_RECIPE_ID]: 3, [config.FIELD_ORDER]: 3, [config.FIELD_DESCRIPTION]: "Mix well."},
                {[config.FIELD_RECIPE_ID]: 3, [config.FIELD_ORDER]: 4, [config.FIELD_DESCRIPTION]: "Serve immediately, or store in an air tight container and refridgerate for up to 5 days."},
            ])
        }),
    ]);
};
