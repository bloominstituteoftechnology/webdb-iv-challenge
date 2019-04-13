//exports / provides access to knex configuration, which in turn accesses the database
const knex = require('knex');
const knexConfig = require('../knexfile');

module.exports = knex(knexConfig.development);