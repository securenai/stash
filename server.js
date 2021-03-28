const express = require('express');
require('dotenv').config();
const app = express();
cors = require('cors');
app.use(cors());
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(express.json({ limit: '50mb' }));
const mongoose = require('mongoose');

const cloudinary = require('./cloudinary/cloudinary');

try {
	// Connect to the MongoDB cluster
	mongoose.connect(
		process.env.ATLAS_URL,
		{ useNewUrlParser: true, useUnifiedTopology: true },
		() => {
			console.log(' Mongoose is connected');
			app.listen('5000', function () {
				console.log(`the app is now listening on 5000 port`);
			});
		}
	);
} catch (e) {
	console.log('could not connect');
}

mongoose.connection.on('connected', () => {
	console.log('connected!!');
});

app.use('/api/login', require('./routes/api/login'));
app.use('/api/userInventory', require('./routes/api/userInventory'));
app.use('/api/stashImages', require('./routes/api/stashImages'));
