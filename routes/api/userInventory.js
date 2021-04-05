const express = require('express');
const router = express.Router();
const UserInventory = require('../../db/models/userInventory.js');

router.post('/query', (req, res) => {
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

router.post('/create', (req, res) => {
	// console.log(req.body);
	UserInventory.create(req.body).then((result,err) => {
		console.log('123');
		if (result) {
			res.send(result);
		  } else {
			res.send(err);
		  }
	})
});

module.exports = router;
