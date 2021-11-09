import mongoose from 'mongoose';
mongoose.pluralize(null);
mongoose.set('useFindAndModify', false);

const TextStashSchema = new mongoose.Schema({
	// _id: {
	// 	type: mongoose.ObjectId
	// },
	owner: {
		type: String
	},
	createDate: {
		type: String
	},
	modifiedDate: {
		type: String
	},
	stashId: {
		type: String
	},
	title: {
		type: String
	},
	link: {
		type: String
	},
	text: {
		type: String
	},
	memo: {
		type: String
	}
});

const TextStash = mongoose.model('textStash', TextStashSchema);
module.exports = TextStash;
