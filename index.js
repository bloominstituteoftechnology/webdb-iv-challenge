

//== Database API Server =======================================================

//-- Dependencies --------------------------------
const express = require('express'          );
const config  = require('./config.js'      );

//-- Create Server and open Port -----------------
const server = express();
server.listen(config.PORT, function() {
  console.log(config.MESSAGE_SERVER_START);
});

//-- Configure Server ----------------------------
server.use(express.json());
