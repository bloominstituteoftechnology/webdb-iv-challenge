const knex = require('knex');

const knexConfig = require('../knexfile');
const db = knex(knexConfig.development);

module.exports = {
    findDshs,
    findDshsById,
    addDshs,
}

function findDshs() {
    return db('dshs');
}

function findDshsById(id) {
    return db('dshs')
        .where({ "dshs.id":id })
        .join('rcps', 'dshs.id', '=', 'rcps.dshs_id');
}

function addDshs(dshs) {
    return db('dshs')
        .insert(dshs)
        .into('dshs')
}