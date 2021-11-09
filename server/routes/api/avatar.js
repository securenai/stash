const express = require('express');
const router = express.Router();
const User = require('../../db/models/user');
const { cloudinary } = require('../../cloudinary/cloudinary');

router.post('/query', async (req, res) => {
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
		res.status(500).json({ err: 'something went wrong2' });
	}
});

router.post('/upload', async (req, res) => {
	try {
		const userId = req.body.userId;
		const fileStr = req.body.data;
		const saveTo = req.body.saveTo;
		if (fileStr === null || fileStr === '') return;
		const uploadedResp = await cloudinary.uploader.upload(
			fileStr,
			(options = { public_id: saveTo })
		);
		if (uploadedResp.url) {
			User.findOneAndUpdate(
				{ _id: userId },
				{ $set: { avatarUrl: uploadedResp.url } },
				{
					upsert: false
				}
			).then((result, err) => {
				if (result) {
				} else {
					res.send(err);
				}
			});
		}
		res.json({ url: uploadedResp.url });
	} catch (error) {
		res.status(500).json({ err: 'something went wrong' });
	}
});

module.exports = router;
