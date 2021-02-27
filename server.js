const express = require('express');
// const router = express.Router();
// const db = require('./db/db.js');
const app = express();
cors = require('cors');
const PORT = '5000';
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const User = require('./db/models/user.js');

const mongoose = require('mongoose');

try {
	// Connect to the MongoDB cluster
	mongoose.connect(
		'mongodb+srv://nova:xwn2VCcDUw7JTOmA@cluster-stash.qw2o7.mongodb.net/StashDB?retryWrites=true&w=majority',
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

mongoose.connection.on('connected', () => {
	console.log('connected!!');
});

app.post('/api/login', (req, res) => {
	const a = req.body.userName;
	const b = req.body.userPassword;
	console.log('post');
	User.find({ name: a, password: b }).then((data) => {
		console.log(data);
		res.send(data);
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
