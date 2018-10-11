exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("recipes")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("recipes").insert([
        {
          recipe_name: "chicken-balti",
          instructions:
            "chop up chicken breast in to cubes, add some oil to a wok and lightly splash fry it until slightly chared on edges, put 100ml of oil in to a large bowl, chop 3 onions and add them to the oil, add 5 skinned chopped tomatoes to the bowl, add some garamasala, mix with a blender, add the chicken breast to the mixture and stir it together, let it soak in the sauce for 1 hour, transfer the mixture n to a balti dish and place on a low heat for 20mins",
          dish_id: 1
        },
        {
          recipe_name: "lamb-balti",
          instructions:
            "chop up lamb loin in to cubes, add some oil to a wok and lightly splash fry it until slightly chared on edges, put 100ml of oil in to a large bowl, chop 3 onions and add them to the oil, add 5 skinned chopped tomatoes to the bowl, add some garamasala, mix with a blender, add the lamb loin to the mixture and stir it together, let it soak in the sauce for 1 hour, transfer the mixture n to a balti dish and place on a low heat for 20mins",
          dish_id: 1
        },
        {
          recipe_name: "plain-naan",
          directions:
            "take a bowl, add some plain flour, add some oil, add some water, start needing the ingredients untill it forms a dough, slap the dough out in to a flat bread shape, keep foding and flatenning the base, flatten the base thin and 2x the size you want the naan to be, heat in a tandoori oven for 5 ~ 10 mins",
          dish_id: 2
        },
        {
          recipe_name: "keema-naan",
          directions:
            "take a bowl, add some plain flour, add some oil, add some water, start needing the ingredients untill it forms a dough, slap the dough out in to a flat bread shape, keep foding and flatenning the base, flatten the base thin and 2x the size you want the naan to be, add keema, fold the naan, flattern it over, heat in a tandoori oven for 10 ~ 15 mins",
          dish_id: 2
        }
      ]);
    });
};
