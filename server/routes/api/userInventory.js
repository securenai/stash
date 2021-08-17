const express = require('express');
const router = express.Router();
const UserInventory = require('../../db/models/userInventory');

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
	console.log('qqq ', req.body);
	UserInventory.create(req.body).then((result, err) => {
		if (result) {
			res.send(result);
		} else {
			res.send(err);
		}
	});
});

router.post('/update', (req, res) => {
	const _id = req.body.data.id;
	const name = req.body.data.name;
	UserInventory.findOneAndUpdate(
		{ _id },
		{ name }
		// { returnOriginal: false }
	).then((result, err) => {
		if (result) {
			res.send(result);
		} else {
			res.send(err);
		}
	});
});

router.post('/delete', (req, res) => {
	console.log('delete ', req.body.data.id);
	const _id = req.body.data.id;
	UserInventory.findByIdAndRemove(_id).then((result, err) => {
		if (result) {
			res.send(result);
		} else {
			res.send(err);
		}
	});
});

module.exports = router;
