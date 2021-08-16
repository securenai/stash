const mongoClient = require('mongodb').MongoClient;
const mongoDbUrl =
	'mongodb+srv://nova:xwn2VCcDUw7JTOmA@cluster-stash.qw2o7.mongodb.net/StashDB?retryWrites=true&w=majority';
let mongodb;

function connect(cb) {
	mongoClient.connect(
		mongoDbUrl,
		{ useUnifiedTopology: true },
		(err, client) => {
			if (err) {
				throw err;
			} else {
				mongodb = client.db('StashDB');
				cb();
			}
		}
	);
}
function get() {
	return mongodb;
}

function close() {
	mongodb.close();
}

module.exports = {
	connect,
	get,
	close
};
