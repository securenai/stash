const express = require('express');
const router = express.Router();
const TextStash = require('../../db/models/textStash.js');

router.post('/query', (req, res) => {
	const stashId = req.body.data;
	TextStash.find({ stashId }).then((data) => {
		if (data.length > 0) {
			res.json({
				textStashList: data
			});
		} else {
			res.send({
				textStashList: []
			});
		}
	});
});

router.post('/create', (req, res) => {
	TextStash.create(req.body).then((result, err) => {
		if (result) {
			res.send(result);
		} else {
			res.send(err);
		}
	});
});

router.post('/update', (req, res) => {
	console.log(req.body);
	TextStash.findOneAndUpdate({ _id: req.body._id }, req.body, {
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
	TextStash.deleteOne({ _id: req.body.data }).then((result, err) => {
		if (result) {
			res.send(result);
		} else {
			res.send(err);
		}
	});
});

router.post('/deleteByStashId', (req, res) => {
	const stashId = req.body.id;
	TextStash.deleteMany({ stashId }).then((result, err) => {
		if (result) {
			res.send(result);
		} else {
			res.send(err);
		}
	});
});

module.exports = router;
