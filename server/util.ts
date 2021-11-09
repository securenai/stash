import bcrypt from 'bcryptjs';
import 'dotenv/config';
import https from 'https';
import jwt from 'jsonwebtoken';
// require('dotenv').config();

const createToken = (userId: string) => {
	// Sign the JWT
	// if (!user.role) {
	// 	throw new Error('No user role specified');
	// }
	return jwt.sign(
		{
			// email: user.email,
			// role: user.role,
			aud: 'api.stash',
			iss: 'api.stash',
			sub: userId,
		},
		process.env.JWT_SECRET,
		{ algorithm: 'HS256', expiresIn: '1h' },
	);
};

const hashPassword = (password: string) => {
	return new Promise((resolve, reject) => {
		// Generate a salt at level 12 strength
		bcrypt.genSalt(12, (err, salt) => {
			if (err) {
				reject(err);
			}
			bcrypt.hash(password, salt, (err2, hash) => {
				if (err2) {
					reject(err2);
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
			message: 'There was a problem authorizing the request',
		});
	}
	if (req.user.role !== 'admin') {
		return res.status(401).json({ message: 'Insufficient role' });
	}
	next();
};

const createSirvToken = () => {
	const options = {
		headers: {
			'content-type': 'application/json',
		},
		hostname: 'api.sirv.com',
		method: 'POST',
		path: '/v2/token',
	};
	return new Promise((resolve, reject) => {
		const req = https.request(options, (res) => {
			const chunks = [];

			res.on('data', (chunk) => {
				chunks.push(chunk);
			});

			res.on('end', () => {
				const body = Buffer.concat(chunks);
				const apiResponse = JSON.parse(body.toString());
				resolve(apiResponse.token);
			});
		});
		const clientId = process.env.SIRV_CLIENT_ID;
		const clientSecret = process.env.SIRV_CLIENT_SECRET;
		req.write(
			JSON.stringify({
				clientId,
				clientSecret,
			}),
		);
		req.end();
	});
};

module.exports = {
	createSirvToken,
	createToken,
	hashPassword,
	requireAdmin,
	verifyPassword,
};
