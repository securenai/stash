const express = require('express');
const router = express.Router();
const { cloudinary } = require('../../cloudinary/cloudinary');

router.post('/deleteById', async (req, res) => {
	const id = req.body.id;
	try {
		const result = await cloudinary.api.delete_resources([id]);
		if (result.deleted[id] === 'deleted') {
			res.json({ msg: 'file deleted' });
		}
	} catch (error) {
		res.status(500).json({ err: 'del : something went wrong' });
	}
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
				format: file.format,
				selected: false
			};
		});
		res.send(files);
	} catch (error) {
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

router.post('/deleteAll', async (req, res) => {
	try {
		const toBeDeleted = req.body.selectedImages;
		toBeDeleted.forEach(async (img) => {
			const id = img.public_id;
			const result = await cloudinary.api.delete_resources([id]);
		});
		res.json({ msg: 'files deleted' });
	} catch (error) {
		res.status(500).json({ err: 'something went wrong' });
	}
});

module.exports = router;
