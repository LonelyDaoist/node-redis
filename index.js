const express = require('express');
const redis = require('redis');

const app = express();
const client = redis.createClient({
	host: 'cache',
	port: process.env.CACHE_PORT
});
const port = process.env.PORT || 5000;

client.get('count', (err,count) => {
	if (!count)
		client.set('count',0);
});

app.get('/', async (req, res) => {
	client.get('count', (err,count) => {
		res.send(count);
		client.set('count',parseInt(count)+1);
	});
});

app.listen(port, () => console.log(`listening on port ${port}`));
