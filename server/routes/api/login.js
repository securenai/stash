const express = require('express');
const router = express.Router();
const jwtDecode = require('jwt-decode');
const User = require('../../db/models/user');
const { createToken, hashPassword, verifyPassword } = require('../../util');

router.post('/', (req, res) => {
	// console.log(req)
	const name = req.body.userName;
	const password = req.body.userPassword;
	User.find({ name, password }).then((data) => {
		if (data.length > 0) {
			const token = createToken(data[0]._id);
			const decodedToken = jwtDecode(token);
			const expiresAt = decodedToken.exp;
			res.json({
				success: true,
				message: 'Authentication successful!',
				token,
				userInfo: data[0],
				expiresAt
			});
		} else {
			res.send(data);
		}
	}).catch((error) => {
		console.log(error)
	});
});

module.exports = router;
