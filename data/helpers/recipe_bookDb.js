/**Contains and provides access to the helper functions that query the database via knex */

//Access knex/database connection
const db = require('../dbConfig');

//create/export helper functions
module.exports = {
    //get dishes 
    getDishes: function(){
        let query = db('dishes');
        return query;
    },

    //get specific dish
    getDish: function(dish_id){
        return db('dishes')
        .where('id', dish_id)
    },

    //add a dish
    addDish: function(dish){
        return db('dishes')
        .insert(dish)
        .then(ids => {
            return {id: ids[0]};
        })
    },
}