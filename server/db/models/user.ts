import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		trim: true
	},
	password: {
		type: String,
		required: true
	},
	avatarUrl: {
		type: String,
		required: true
	}
});
// hash password b4 saving to database
// LoginSchema.pre('save',(next)=>{

// })

const User = mongoose.model('users', UserSchema);
module.exports = User;
