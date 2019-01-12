exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("ingredients").insert([
        { ingredient_name: "pound(s) of ground beef" },
        { ingredient_name: "pound(s) of ground turkey" },
        { ingredient_name: "can(s) of crushed tomatoes" },
        { ingredient_name: "can(s) of black beans" },
        { ingredient_name: "can(s) of dark red kidney beans" },
        { ingredient_name: "clove(s) of garlic" },
        { ingredient_name: "tsp(s) of cumin" },
        { ingredient_name: "tsp(s) of chili pepper" },
        { ingredient_name: "tsp(s) of salt" },
        { ingredient_name: "tsp(s) of brown sugar" },
        { ingredient_name: "tsp(s) of cayenne" },
        { ingredient_name: "tsp(s) of smoked paprika" },
        { ingredient_name: "tsp(s) of chipotle chili pepper" },
        { ingredient_name: "tsp(s) of pepper" },
        { ingredient_name: "filet(s) of tilapia" },
        { ingredient_name: "tsp(s) of lemon juice" },
        { ingredient_name: "tsp(s) of lime juice" },
        { ingredient_name: "handful(s) of cilantro" },
        { ingredient_name: "cup(s) of diced or sliced tomatoes" },
        { ingredient_name: "cup(s) of shredded lettuce" },
        { ingredient_name: "tsp(s) of diced poblano peppers" },
        { ingredient_name: "cup(s) of shredded cheese" },
        { ingredient_name: "package(s) of corn tortillas" },
        { ingredient_name: "Tbsp(s) of sour cream" },
        { ingredient_name: "package(s) of flour tortillas" },
        { ingredient_name: "package(s) of pizza crust" },
        { ingredient_name: "can(s) of black olives" },
        { ingredient_name: "cup(s) of diced or julienned sweet peppers" },
        { ingredient_name: "link(s) of sweet italian sausage" },
        { ingredient_name: "package(s) of pepperoni" },
        { ingredient_name: "pound(s) of shredded chicken" },
        { ingredient_name: "cup(s) of crushed tomatillos" },
        { ingredient_name: "cup(s) of spinach" },
        { ingredient_name: "cup(s) of ricotta cheese" },
        { ingredient_name: "serving(s) of egg" },
        { ingredient_name: "tsp(s) of fresh parsley" },
        { ingredient_name: "cup(s) of dough" },
        { ingredient_name: "cup(s) of diced butternut squash" },
        { ingredient_name: "Tbs(s) of extra virgin olive oil" },
        { ingredient_name: "package(s) of burger buns" },
        { ingredient_name: "ring(s) of onion rings" },
        { ingredient_name: "Tbsp(s) of barbecue sauce" },
        { ingredient_name: "cup(s) of medium-firm tofu" },
        { ingredient_name: "strip(s) of bacon" }
      ]);
    });
};
