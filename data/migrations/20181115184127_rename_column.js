exports.up = function (knex, Promise) {
    return knex.schema.table('Instructions', tbl => {
        tbl.renameColumn('recipe_id', 'Recipes_id');
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.table('Instructions', tbl => {
        tbl.renameColumn('recipe_id', 'Recipes_id');
    });
};

