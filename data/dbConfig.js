//exports / provides access to knex configuration
const knex = require('knex');
const knexConfig = require('../knexfile');

module.exports = knex(knexConfig.development);