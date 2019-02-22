const knex = require('knex');

const db = process.env.DB_ENV || 'development';
const config = require('../knexfile.js')[db];
// const config = require('../knexfile.js').development;

module.exports = knex(config);
