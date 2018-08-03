exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("ingredients").insert([
        { name: "beef top sirloin (boneless)" },
        { name: "salt" },
        { name: "black pepper" },
        { name: "red pepper (crushed)" },
        { name: "lime" },
        { name: "tomatillos" },
        { name: "jalapeno peppers" },
        { name: "canola oil" },
        { name: "beef broth" },
        { name: "6in corn tortillas" },
        { name: "large onion" },
        { name: "tomatoes" },
        { name: "avocado (peeled, pitted, and diced)" },
        { name: "cilantro" },
        { name: "lemon" },
        { name: "ranch dressing" },
        { name: "sour cream" },
        { name: "taco seasoning mix" },
        { name: "mild chunky salsa" },
        { name: "rotisserie chicken (shredded)" },
        { name: "lettuce (shredded)" },
        { name: "tomatoes (chopped)" },
        { name: "green onions (sliced)" },
        { name: "black olives (sliced)" },
        { name: "colby-monterey jack cheese (shredded)" }
      ]);
    });
};
