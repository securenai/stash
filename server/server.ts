import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config';
import login from './routes/api/login';
// require('dotenv').config();

const app = express();
import cors from 'cors';
app.use(cors());
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(express.json({ limit: '50mb' }));
// const mongoose = require('mongoose');

try {
	// Connect to the MongoDB cluster
	mongoose.connect(
		process.env.ATLAS_URL,
		{ useNewUrlParser: true, useUnifiedTopology: true },
		() => {
			app.listen('5000', () => {
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
app.use('/api/signup', require('./routes/api/signup'));
app.use('/api/userInventory', require('./routes/api/userInventory'));
app.use('/api/imageStash', require('./routes/api/imageStash'));
app.use('/api/textStash', require('./routes/api/textStash'));
app.use('/api/codeStash', require('./routes/api/codeStash'));
app.use('/api/avatar', require('./routes/api/avatar'));
