

//== Database API Server =======================================================

//-- Dependencies --------------------------------
const express  = require('express'         );
const config   = require('./config.js'     );
const database = require('./data-access.js');
const apiMaker = require('./api-maker'     );

//-- Create Server and open Port -----------------
const server = express();
server.listen(config.PORT, function() {
  console.log(config.MESSAGE_SERVER_START);
});

//-- Configure Server ----------------------------
server.use(express.json());
server.use(config.PATH_DISHES      , apiMaker(database.dishes      ));
server.use(config.PATH_RECIPES     , apiMaker(database.recipes     ));
server.use(config.PATH_INGREDIENTS , apiMaker(database.ingredients ));
server.use(config.PATH_REQUIREMENTS, apiMaker(database.requirements));
server.use(config.PATH_INSTRUCTIONS, apiMaker(database.instructions));
