const mongoose = require('mongoose');
mongoose.pluralize(null);
mongoose.set('useFindAndModify', false);

const CodeStashSchema = new mongoose.Schema({
	// _id: {
	// 	type: mongoose.ObjectId
	// },
	owner: {
		type: String
	},
	topic: {
		type: String
	},
	createDate: {
		type: String
	},
	modifiedDate: {
		type: String
	},
	content: {
		type: String
	},
	stashId: {
		type: String
	}
});

const CodeStash = mongoose.model('codeStash', CodeStashSchema);
module.exports = CodeStash;
