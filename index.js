

//== Database API Server =======================================================

//-- Dependencies --------------------------------
const express = require('express');
const knex    = require('knex'   );
const config     = require('./config.js'  );
const knexConfig = require('./knexfile.js');

//-- Configure Database --------------------------
const database = knex(knexConfig.development);

//-- Create Server and open Port -----------------
const server = express();
server.listen(config.PORT, function() {
  console.log(config.MESSAGE_SERVER_START);
});

//-- Configure Server ----------------------------
server.use(express.json());
