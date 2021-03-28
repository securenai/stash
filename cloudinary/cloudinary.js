require('dotenv').config();

const cloudinary = require('cloudinary').v2;
cloudinary.config({
	cloud_name: 'dfkw9hdq3',
	api_key: '373653583271539',
	api_secret: 'xksIcXA3VUmOVpaijXHZ7x8mqkA'
});

module.exports = { cloudinary };
