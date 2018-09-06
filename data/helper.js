const db = require('./index.js')

function getDishes(){
	return db('dishes')
}

module.exports = {
	getDishes
}