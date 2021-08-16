const express = require('express');
const router = express.Router();
const { cloudinary } = require('../../cloudinary/cloudinary.js');

router.post('/', (req, res) => {
	console.log('srrrr');
});

router.post('/query', async (req, res) => {
	const folder = req.body.folderName;
	try {
		const { resources } = await cloudinary.search
			.expression('folder:' + folder)
			.sort_by('public_id', 'desc')
			.max_results(50)
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
	try {
		const fileStr = req.body.data;
		const saveTo = req.body.saveTo;
		if (fileStr === null || fileStr === '') return;
		const uploadedResp = await cloudinary.uploader.upload(
			fileStr,
			(options = { public_id: saveTo })
		);
		res.json({ msg: 'file uploaded' });
	} catch (error) {
		res.status(500).json({ err: 'something went wrong' });
	}
});

module.exports = router;
