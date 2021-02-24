const express = require('express');
const db = require('./db/db.js');
cors = require('cors');
const PORT = '5000';

const app = express();

app.use(cors());
app.use(express.json());

//DB connect
db.connect(() => {
	app.listen(PORT, function () {
		console.log(
			`db successfully connected, the app is now listening on ${PORT} port`
		);
	});
});
// app.listen(PORT, () => {
// 	console.log('App listening on port 5000');
// });

app.get('/api/users', (req, res) => {
	const arr = [];
	const users = ['nova'];
	db.get()
		.collection('users')
		.find({
			$and: [{ user: { $in: users } }]
		})
		.toArray(function (err, result) {
			if (err) {
				throw err;
			}
			//console.log(result);
			arr.push(result);
			//console.log(arr);
			res.send(arr);
		});
});
