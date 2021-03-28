const express = require('express');
const router = express.Router();
const { cloudinary } = require('../../cloudinary/cloudinary.js');

router.post('/', (req, res) => {
	console.log('srrrr');
});

router.post('/query', async (req, res) => {
	console.log('fff');
	const folder = req.body.folderName;
	try {
		const { resources } = await cloudinary.search
			.expression('folder:' + folder)
			.sort_by('public_id', 'desc')
			.max_results(50)
			.execute();
		const publicIds = resources.map((file) => {
			return file.public_id;
		});
		res.send(publicIds);
	} catch (error) {
		console.log(error);
		res.status(500).json({ err: 'something went wrong2' });
	}
});

router.post('/upload', async (req, res) => {
	console.log('ssssssssss');
	try {
		const fileStr = req.body.data;
		const saveTo = req.body.saveTo;
		if (fileStr === null || fileStr === '') return;
		const uploadedResp = await cloudinary.uploader.upload(
			fileStr,
			(options = { public_id: saveTo })
		);
		console.log(uploadedResp);
		res.json({ msg: 'file uploaded' });
	} catch (error) {
		console.log(error);
		res.status(500).json({ err: 'something went wrong' });
	}
});

module.exports = router;
