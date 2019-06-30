const db = require('../dbConfigure.js');
module.exports = {
    getDishes: function() {
        return db('dishes');
    },
    getDish: function(id) {
        let req = db('dishes');
        if(id){
            req.where('id', Number(id)).first();
        }
        return req;
    },
    addDish: function(dish) {
        return db('dishes').insert(dish).then(ids => ({id: ids[0]}))
    },
};