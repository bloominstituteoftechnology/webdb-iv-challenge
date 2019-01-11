
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {
          id: 1, 
          step_1: 'Heat oil in a large saucepan over medium heat. Add garlic slices and saute, moving constantly, until golden and crisp. Transfer to paper towels to drain.',
          step_2: 'Pour out excess oil then return to the stove.',
          step_3: 'Add 2 tbsp butter. Once melted, add garlic. Cook for 1 ½ minutes or until the garlic starts to turn light golden and the butter is well infused with garlic flavour.',
          step_4: 'Add rice, stir to coat in garlic butter.',
          step_5: 'Add broth, place lid on saucepan. Bring to simmer then immediately turn down to medium low.',
          step_6: 'Cook for 12 – 15 minutes or until liquid is all absorbed by the rice. Tilt saucepan to check.',
          step_7: 'Remove from stove but leave lid on. Rest for 10 minutes.',
          step_8: 'luff with fork, transfer into serving bowl. Stir through remaining butter and scallions, or garnish as per photos. Sprinkle with crispy garlic. Serve.'
        },
        {
          id: 2, 
          step_1: 'Cut the chicken in half lengthwise so you have 4 smaller cutlets. Sprinkle them with some salt & pepper and coat them in the flour. ',
          step_2: `Add the olive oil and 1 tbsp of the butter to a skillet over medium-high heat. Once the pan is hot, sauté the chicken for 4-5 minutes/side or until it's nice and golden. Take the chicken out of the pan and set it aside.`,
          step_3: `Reduce the heat to medium (or even med-low if using cast iron), and add the rest of the butter to the pan. Let it melt and then add the garlic cloves. Cook them for 3-4 minutes, stirring often, until they're lightly browned on the outside. `,
          step_4: `Add the chicken broth, lemon juice, and garlic powder to the pan. Let it bubble for around 4 minutes or until the liquid is noticeably reduced. `,
          step_5: `Stir in the cream and add the chicken back into the pan. Let it cook for another 5 minutes or so, until the sauce is reduced and the chicken is cooked through. Serve with freshly chopped parsley if you wish.`
        },
        {
          id: 3, 
          step_1: `Put the beans in a large bowl, cover with cold water and let soak overnight. `,
          step_2: `Drain and rinse the beans, then put them in a large pot. Cover the beans with water and add the chili powder, cumin, paprika, cayenne, bacon, garlic, bay leaves, onion, bell pepper and some salt and pepper. Bring to a boil, then reduce the heat to low and cook until the beans are tender, 2 to 3 1/2 hours. `
        }
      ]);
    });
};
