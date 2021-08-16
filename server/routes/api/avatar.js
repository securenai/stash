const express = require('express');
const router = express.Router();
const User = require('../../db/models/user.js');
const { cloudinary } = require('../../cloudinary/cloudinary.js');

router.post('/query', async (req, res) => {
	console.log('avaq');
	const folder = req.body.folderName;
	try {
		const { resources } = await cloudinary.search
			.expression('folder:' + folder)
			.sort_by('public_id', 'desc')
			.max_results(1)
			.execute();
		const files = resources.map((file) => {
			return {
				public_id: file.public_id,
				bytes: file.bytes,
				fileName: file.filename,
				format: file.format
			};
		});
		res.send(files);
	} catch (error) {
		console.log(error);
		res.status(500).json({ err: 'something went wrong2' });
	}
});

router.post('/upload', async (req, res) => {
	console.log('avau');
	try {
		const userId = req.body.userId
		const fileStr = req.body.data;
		const saveTo = req.body.saveTo;
		if (fileStr === null || fileStr === '') return;
		const uploadedResp = await cloudinary.uploader.upload(
			fileStr,
			(options = { public_id: saveTo })
		);
		console.log(uploadedResp);
		if(uploadedResp.url){
			console.log(userId , uploadedResp.url)
			User.findOneAndUpdate({ _id: userId }, {$set: { avatarUrl: uploadedResp.url }}, {
				upsert: false
			}).then((result, err) => {
				console.log('123456');
				if (result) {
					// res.send(result);
					console.log(result)
				} else {
					console.log('1234567890');
					res.send(err);
				}
			});
		}
		res.json({ url: uploadedResp.url });
	} catch (error) {
		console.log(error);
		res.status(500).json({ err: 'something went wrong' });
	}
});

module.exports = router;
