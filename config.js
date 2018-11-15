

//== Project Constants =========================================================

const PORT = 3300; // To Do: Get this from the command line
module.exports = {
    // Server Configuration
    PORT: PORT,
    MESSAGE_SERVER_START: `\nServer started on port ${PORT}\n`,
    // Route Paths
    // Database Strings
    TABLE_DISHES      : 'dishes'      ,
    TABLE_RECIPES     : 'recipes'     ,
    TABLE_INGREDIENTS : 'ingredients' ,
    TABLE_REQUIREMENTS: 'requirements',
    TABLE_INSTRUCTIONS: 'instructions',
    FIELD_ID           : 'id'           ,
    FIELD_NAME         : 'name'         ,
    FIELD_AMOUNT       : 'amount'       ,
    FIELD_ORDER        : 'order'        ,
    FIELD_DESCRIPTION  : 'description'  ,
    FIELD_DISH_ID      : 'dish_id'      ,
    FIELD_RECIPE_ID    : 'recipe_id'    ,
    FIELD_INGREDIENT_ID: 'ingredient_id',
};
