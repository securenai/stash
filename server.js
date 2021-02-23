const express = require('express');
cors = require('cors');
const PORT = '5000';

const app = express();

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
	console.log('App listening on port 5000');
});

app.get('/api/customers', (req, res) => {
	res.send([
		{ id: 1, firstName: 'tom', lastName: 'cruise' },
		{ id: 2, firstName: 'linda', lastName: 'beck' }
	]);
});
