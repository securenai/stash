const express = require('express');
const router = express.Router();
const CodeStash = require('../../db/models/codeStash.js');

router.post('/query', (req, res) => {
	const stashId = req.body.data;
	CodeStash.find({ stashId }).then((data) => {
		if (data.length > 0) {
			res.json({
				codeStashList: data
			});
		} else {
			res.send({
				codeStashList: []
			});
		}
	});
});

router.post('/create', (req, res) => {
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
		if (result) {
			res.send(result);
		} else {
			res.send(err);
		}
	});
});

router.post('/delete', (req, res) => {
	console.log(req.body);
	CodeStash.deleteOne({ _id: req.body.data }).then((result, err) => {
		if (result) {
			res.send(result);
		} else {
			res.send(err);
		}
	});
});

router.post('/deleteByStashId', (req, res) => {
	const stashId = req.body.id;
	CodeStash.deleteMany({ stashId }).then((result, err) => {
		if (result) {
			res.send(result);
		} else {
			res.send(err);
		}
	});
});

module.exports = router;
