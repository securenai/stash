const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		trim: true
	},
	password: {
		type: String,
		required: true
	}
});
// hash password b4 saving to database
// LoginSchema.pre('save',(next)=>{

// })

const User = mongoose.model('User', UserSchema);
module.exports = User;
