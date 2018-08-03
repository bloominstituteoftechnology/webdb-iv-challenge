exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex("directions")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("directions").insert([
        {
          description:
            "Place sliced meat into a shallow bowl, and season with salt, black pepper, and crushed red pepper. Squeeze the lime juice over the meat, and turn until evenly coated. Cover, and refrigerate for 30 minutes. "
        },
        {
          description:
            "In a blender or food processor, combine tomatillo and jalapeno. Puree for 15 to 20 seconds, or until thick. Heat 1 tablespoon oil in a large skillet over medium high heat. Carefully pour in tomatillo mixture. Cook, stirring frequently, for 5 minutes. Stir in beef broth. Reduce heat, and simmer for 20 to 30 minutes, or until mixture coats a spoon. Transfer mixture to a serving dish. "
        },
        {
          description:
            "Heat tablespoon oil in a large skillet over high heat. Stir in 1/3 of the beef, and saute for 1 minute. Transfer to serving dish. Repeat with remaining beef. Meanwhile, heat tortillas in the oven or microwave, according to package instructions. "
        },
        {
          description:
            "To serve, place two tortillas on top of each other. Add desired amount of meat, spoon over some tomatillo mixture. Top with onions, tomatoes, avocado and cilantro. Garnish with a wedge of lemon, to be squeezed over taco before eating. "
        }
      ]);
    });
};
