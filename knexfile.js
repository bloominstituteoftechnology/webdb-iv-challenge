module.exports = {
	development: {
		client: 'sqlite3',
		connection: {
			filename: './data/lambda-recipes.sqlite3',
		},
		migrations: {
			directory: './data/migrations',
		},
		seeds: {
			directory: './data/seeds',
		},
		useNullAsDefault: true,
	},
};
