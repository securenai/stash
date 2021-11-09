const express = require('express');
const router = express.Router();
const User = require('../../db/models/user');

router.post('/', (req, res) => {
	const name = req.body.username;
	const password = req.body.password;
	const email = req.body.email;
	const avatarUrl = req.body.avatarUrl;
	const createDate = req.body.createDate;

	User.create({ name, password, email, avatarUrl, createDate }).then(
		(result, err) => {
			if (result) {
				res.send(result);
			} else {
				res.send(err);
			}
		}
	);
});

router.post('/query', (req, res) => {
	const email = req.body.email;
	User.find({ email }).then((data) => {
		if (data.length === 0) {
			res.json({
				result: false
			});
		} else {
			res.send({
				result: true
			});
		}
	});
});

module.exports = router;
