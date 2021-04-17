const express = require('express');
const router = express.Router();
const CodeStash = require('../../db/models/codeStash.js');

router.post('/query', (req, res) => {
	console.log('kkk');
	const owner = req.body.owner;
	console.log(owner);
	CodeStash.find({ owner }).then((data) => {
		if (data.length > 0) {
			res.json({
				codeStashList: data
			});
		} else {
			res.send(data);
		}
	});
});

router.post('/create', (req, res) => {
	console.log(req.body);
	CodeStash.create(req.body).then((result, err) => {
		console.log('123');
		if (result) {
			res.send(result);
		} else {
			res.send(err);
		}
	});
});

router.post('/update', (req, res) => {
	console.log(req.body);
	CodeStash.findOneAndUpdate({ _id: req.body._id }, req.body, {
		upsert: false
	}).then((result, err) => {
		console.log('123');
		if (result) {
			res.send(result);
		} else {
			res.send(err);
		}
	});
});

router.post('/delete', (req, res) => {
	console.log(req.body);
	CodeStash.deleteOne({ _id: req.body._id }).then((result, err) => {
		console.log('12453');
		if (result) {
			res.send(result);
		} else {
			res.send(err);
		}
	});
});

module.exports = router;
