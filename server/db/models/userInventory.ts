import mongoose from 'mongoose';
mongoose.pluralize(null);

const UserInventorySchema = new mongoose.Schema({
	name: {
		type: String,
		// required: true,
		trim: true
	},
	type: {
		type: String,
		// required: true,
		trim: true
	},
	owner: {
		type: String
		// required: true
	},
	createDate: {
		type: String
	},
	public: {
		type: Boolean
		// required: true
	}
});

const UserInventory = mongoose.model('userInventory', UserInventorySchema);
module.exports = UserInventory;
