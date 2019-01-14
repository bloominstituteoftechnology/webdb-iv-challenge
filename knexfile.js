// Update with your config settings.
module.exports = {
    development: {
        client: 'sqlite3',
        connection: {
            filename: './database/recipe_book.sqlite3'
        },
        useNullAsDefault: true,
        migrations: {
            directory: './migrations',
            tableName: 'dbmigrations',
        },
        seeds: { directory: './seeds' },
    },
};
