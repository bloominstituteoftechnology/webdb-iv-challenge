
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').del().truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {name: 'ground beef'},
        {name: 'grated parmesean'},
        {name: 'rigatoni pasta'},
        {name: 'frozen peas'},
        {name: 'frozen mushrooms'},
        {name: 'marinara sauce'},
        {name: 'brown rice'},
        {name: 'boneless skinless chicken breasts'},
        {name: 'skirt steak'},
        {name: 'canned black beans'},
        {name: 'salsa verde'},
        {name: 'pico de gallo'},
        {name: 'red onion'},
        {name: 'avocado'},
        {name: 'guacamole'},
        {name: 'grated cheese'},
        {name: 'sour cream'},
        {name: 'center cut salmon steak'},
        {name: 'fresh spinach'},
        {name: 'golden potatoes'},
        {name: 'oregano'},
        {name: 'salt'},
        {name: 'hot sauce'},
        {name: 'avocado or vegetable oil'},
        {name: 'ground black pepper'},
        {name: 'cilantro'},
        {name: 'unsalted butter'},
        {name: 'pine nuts'},
        {name: 'sliced almonds'},
        {name: 'garlic powder'},
        {name: 'fresh jalapeno'},
      ]);
    });
};
