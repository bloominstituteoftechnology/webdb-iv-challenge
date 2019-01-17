const express = require("express");
const knex = require("knex");
const router = express.Router();
const knexConfig = require("../../knexfile.js");
const db = knex(knexConfig.development);

router
	.route("/")
	.get((req, res) => {
		db("dishes")
			.then(dishes => {
				res.status(201).json(dishes);
			})
			.catch(err =>
				res.status(500).json({
					error: "There has been a server error on the GET route",
					err,
				})
			);
	})
	.post((req, res) => {
		if (req.body.name) {
			db("dishes")
				.insert(req.body)
				.then(dishes => {
					res.status(201).json(dishes);
				})
				.catch(err =>
					res.status(500).json({
						error:
							"There has been a server error on the POST route",
						err,
					})
				);
		} else {
			res.status(400).json({ error: "You must include a name" });
		}
	});

router
	.route("/:id")
	.get((req, res) => {
		db("dishes")
			.where({ id: req.params.id })
			.then(cohort => {
				res.status(201).json(cohort);
			})
			.catch(err =>
				res.status(500).json({
					error: "There has been a server error on the GET route",
					err,
				})
			);
	})
	.put((req, res) => {
		if (req.body.name) {
			db("dishes")
				.where({ id: req.params.id })
				.update(req.body)
				.then(count => {
					if (count > 0) {
						res.status(201).json({
							message: `${count} record has been updated.`,
						});
					} else {
						res.status(404).json({
							error: `The requested ID does not exist`,
						});
					}
				})
				.catch(err =>
					res.status(500).json({
						error:
							"There has been a server error on the PUT route",
						err,
					})
				);
		} else {
			res.status(400).json({ error: "You must include a name" });
		}
    })
    .delete((req, res) => {
			db("dishes")
				.where({ id: req.params.id })
				.del()
				.then(count => {
					if (count > 0) {
						res.status(201).json({
							message: `${count} record has been deleted.`,
						});
					} else {
						res.status(404).json({
							error: `The requested ID does not exist`,
						});
					}
				})
				.catch(err =>
					res.status(500).json({
						error:
							"There has been a server error on the DELETE route",
						err,
					})
				)
        }
    );
	

module.exports = router;
