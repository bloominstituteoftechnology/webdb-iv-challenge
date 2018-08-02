exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("ingredients").insert([
        { name: "boneless beef top sirloin" },
        { name: "salt" },
        { name: "black pepper" },
        { name: "crushed red pepper" },
        { name: "lime" },
        { name: "tomatillos" },
        { name: "jalapeno peppers" },
        { name: "canola oil" },
        { name: "beef broth" },
        { name: "6in corn tortillas" },
        { name: "large onion" },
        { name: "tomatoes" },
        { name: "avocado" },
        { name: "cilantro" },
        { name: "lemon" }
      ]);
    });
};
