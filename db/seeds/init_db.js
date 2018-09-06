exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return Promise.all([
    knex("dishes")
      .del()
      .then(function() {
        // Inserts seed entries
        return knex("dishes").insert([
          { id: 1, name: "Chicken salad" },
          { id: 2, name: "Omelette" },
          { id: 3, name: "Curry" }
        ]);
      }),
    knex("recipie")
      .del()
      .then(function() {
        // Inserts seed entries
        return knex("recipie").insert([
          { id: 1, name: "Chicken & freekeh chopped salad with salsa verde" },
          {
            id: 2,
            name: "Sticky citrus chicken with griddled avocado & beet salad"
          },
          { id: 3, name: "Basic omelette recipe" },
          { id: 4, name: "Slow cooker lamb curry" }
        ]);
      }),
    knex("ingredient")
      .del()
      .then(function() {
        // Inserts seed entries
        return knex("ingredient").insert([
          { id: 1, name: "Olive Oil" },
          { id: 2, name: "Bay Leaf" },
          { id: 3, name: "Roast Chicken" },
          { id: 4, name: "Eggs" },
          { id: 5, name: "Madras curry paste" },
          { id: 6, name: "cumin seeds" },
          { id: 7, name: "cinnamon stick" }
        ]);
      }),
    knex("instruction")
      .del()
      .then(function() {
        // Inserts seed entries
        return knex("instruction").insert([
          {
            id: 1,
            instruction:
              "Put all of the ingredients into the slow cooker pot with a third of a can of water and stir well. Cover with the lid and chill in the fridge overnight."
          },
          {
            id: 2,
            instruction:
              "The next day, stir again, then cook on Low for 6 hrs until the lamb and vegetables are tender. Serve with brown rice."
          },
          {
            id: 3,
            instruction:
              "Tilt the pan again to allow it to fill back up with the runny egg. Repeat once or twice more until the egg has just set. "
          }
        ]);
      })
  ]);
};
