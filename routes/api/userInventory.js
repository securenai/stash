const express = require('express');
const router = express.Router();
const UserInventory = require('../../db/models/userInventory.js');

router.post('/', (req, res) => {
	const owner = req.body.uid;
	UserInventory.find({ owner }).then((data) => {
		if (data.length > 0) {
			res.json({
				stashes: data
			});
		} else {
			res.send(data);
		}
	});
});

module.exports = router;
