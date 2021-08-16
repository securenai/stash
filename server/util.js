const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const https = require('https');
require('dotenv').config();

const createToken = (userId) => {
	// Sign the JWT
	// if (!user.role) {
	// 	throw new Error('No user role specified');
	// }
	return jwt.sign(
		{
			sub: userId,
			// email: user.email,
			// role: user.role,
			iss: 'api.stash',
			aud: 'api.stash'
		},
		process.env.JWT_SECRET,
		{ algorithm: 'HS256', expiresIn: '1h' }
	);
};

const hashPassword = (password) => {
	return new Promise((resolve, reject) => {
		// Generate a salt at level 12 strength
		bcrypt.genSalt(12, (err, salt) => {
			if (err) {
				reject(err);
			}
			bcrypt.hash(password, salt, (err, hash) => {
				if (err) {
					reject(err);
				}
				resolve(hash);
			});
		});
	});
};

const verifyPassword = (passwordAttempt, hashedPassword) => {
	return bcrypt.compare(passwordAttempt, hashedPassword);
};

const requireAdmin = (req, res, next) => {
	if (!req.user) {
		return res.status(401).json({
			message: 'There was a problem authorizing the request'
		});
	}
	if (req.user.role !== 'admin') {
		return res.status(401).json({ message: 'Insufficient role' });
	}
	next();
};

const createSirvToken = () => {
	const options = {
		method: 'POST',
		hostname: 'api.sirv.com',
		path: '/v2/token',
		headers: {
			'content-type': 'application/json'
		}
	};
	return new Promise((resolve, reject) => {
		const req = https.request(options, (res) => {
			console.log('requesting......');
			const chunks = [];

			res.on('data', (chunk) => {
				chunks.push(chunk);
			});

			res.on('end', () => {
				const body = Buffer.concat(chunks);
				const apiResponse = JSON.parse(body.toString());
				// console.log('token:', apiResponse.token);
				// console.log('expiresIn:', apiResponse.expiresIn);
				// console.log('scope:', apiResponse.scope);
				resolve(apiResponse.token);
			});
		});
		const clientId = process.env.SIRV_CLIENT_ID;
		const clientSecret = process.env.SIRV_CLIENT_SECRET;
		req.write(
			JSON.stringify({
				clientId,
				clientSecret
			})
		);
		req.end();
	});
};

module.exports = {
	createToken,
	hashPassword,
	verifyPassword,
	requireAdmin,
	createSirvToken
};
