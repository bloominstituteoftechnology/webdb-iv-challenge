const db = require('../dbConfig.js');

module.exports = {
    getDishes: function(){
        return db('dishes')
    }
    
}