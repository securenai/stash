const express = require('express');
require('dotenv').config();
// const router = express.Router();
// const db = require('./db/db.js');
const jwt = require('express-jwt');
const jwtDecode = require('jwt-decode');
const app = express();
cors = require('cors');
const PORT = '5000';
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const User = require('./db/models/user.js');
const session = require('express-session');
const mongoose = require('mongoose');

const { createToken, hashPassword, verifyPassword } = require('./util');

try {
	// Connect to the MongoDB cluster
	mongoose.connect(
		process.env.ATLAS_URL,
		{ useNewUrlParser: true, useUnifiedTopology: true },
		() => {
			console.log(' Mongoose is connected');
			app.listen(PORT, function () {
				console.log(`the app is now listening on ${PORT} port`);
			});
		}
	);
} catch (e) {
	console.log('could not connect');
}

app.use(
	session({
		secret: process.env.SESSION_SECRET,
		resave: true,
		saveUninitialized: false,
		cookie: {
			httpOnly: true,
			maxAge: parseInt(process.env.SESSION_MAX_AGE)
		}
	})
);
// app.use((req, res, next) => {
// 	console.log('hi');
// 	console.log(req.session);
// 	next();
// });

mongoose.connection.on('connected', () => {
	console.log('connected!!');
});

app.get('/api/chk', (req, res) => {
	if (req.session) {
		console.log(req.session);
		res.send({ msg: 'ok' });
	} else {
		res.send({ msg: 'no session' });
	}
});

app.post('/api/login', (req, res) => {
	const a = req.body.userName;
	const b = req.body.userPassword;
	console.log('post');
	User.find({ name: a, password: b }).then((data) => {
		// console.log(data);
		if (data.length > 0) {
			const token = createToken(data[0]._id);
			const decodedToken = jwtDecode(token);
			const expiresAt = decodedToken.exp;
			res.json({
				message: 'Authentication successful!',
				token,
				userInfo: data[0],
				// userInfo: {
				// 	dataId: data[0]._id,
				// 	userName: data[0].name,
				// 	email: data[0].email
				// },
				expiresAt
			});
			// req.session.userId = data[0]._id;
			// console.log(req.session);
			// res.send(data);
			// return res.redirect('/');
		} else {
			res.send(data);
		}
	});
});

// db.connect(() => {
// 	app.listen(PORT, function () {
// 		console.log(
// 			`db successfully connected, the app is now listening on ${PORT} port`
// 		);
// 	});
// });

// app.get('/api/users', (req, res) => {
// 	const arr = [];
// 	// const users = ['nova'];
// 	db.get()
// 		.collection('users')
// 		// .find({
// 		// 	$and: [{ user: { $in: users } }]
// 		// })
// 		.find({})
// 		.toArray(function (err, result) {
// 			if (err) {
// 				throw err;
// 			}
// 			//console.log(result);
// 			arr.push(result);
// 			//console.log(arr);
// 			res.send(arr);
// 		});
// });
