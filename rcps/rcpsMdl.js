const knex = require('knex');

const knexConfig = require('../knexfile');
const db = knex(knexConfig.development);

module.exports = {
    findRcps,
    addRcps,
}

function findRcps() {
    return db('rcps')
        .join('dshs', 'rcps.dshs_id', '=', 'dshs.id');
}

function addRcps(rcps) {
    return db('rcps')
        .insert(rcps)
        .into('rcps');
}