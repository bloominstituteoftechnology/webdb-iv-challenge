const db = require("../db");
const mappers = require("../helpers/mappers");
const tbl = 'recipes';

module.exports = {
    get: function (id) {
        let query = db(`${tbl} as t`);

        if (id) {
            query.where("t.id", id).first();

            const promises = [
                query,
                this.getSubRecords(id),
                this.getSubRecords2(id)
            ];

            return Promise.all(promises).then(function (results) {
                let [record, subRecords, subRecords2] = results;
                record.ingredients = subRecords;
                record.directions = subRecords2;

                return mappers.recordToBody(record);
            });
        }

        return query.then(records => {
            return records.map(record => mappers.recordToBody(record));
        });
    },
    getSubRecords: function(id) {
        return db('recipes_ingredients as r_i')
            .innerJoin('ingredients as i', 'r_i.ingredients_id', 'i.id')
            .where('r_i.recipes_id', id)
            .then(records => records.map(record => mappers.recordToBody(record)));
    },
    getSubRecords2: function(id) {
        return db('recipes_directions as r_i')
            .innerJoin('directions as d', 'r_i.directions_id', 'd.id')
            .where('r_i.recipes_id', id)
            .then(records => records.map(record => mappers.recordToBody(record)));
    },
    add: function(record) {
        return db(tbl)
            .insert(record)
            .then(([id]) => this.get(id));
    },
    edit: function(id, changes) {
        return db(tbl)
            .where('id', id)
            .update(changes)
            .then(count => (count > 0 ? this.get(id) : null));
    },
    drop: function(id) {
        return db(tbl)
            .where('id', id)
            .del();
    }
};
