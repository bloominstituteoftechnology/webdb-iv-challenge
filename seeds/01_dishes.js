
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dishes').del()
    .then(function () {
      // Inserts seed entries
      return knex('dishes').insert([
        {id: 1, dish_type_id: 1,  dish_name: 'Spicy Roast Chicken', dish_description:'Curabitur massa tortor, euismod accumsan dui eu lorem. ', dish_likes: 5 , dish_image: 'http://www.tikkaa.com/wp-content/uploads/2015/02/Spicy-Roasted-Chicken.jpg'},
        {id: 2, dish_type_id: 2,  dish_name: 'black & white chocolate cupcake', dish_description:'Molestias excepturi sint occaecati ', dish_likes: 24, dish_image: 'http://www.britishbakingclub.co.uk/wp-content/uploads/2014/11/img.jpg' }

      ]);
    });
};
