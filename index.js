const express = require('express');
const path = require('path');

const app = express();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// An api endpoint that returns identity graph data
app.get('/api/getGraphData', (req, res) => {
	var list = ["graph1", "graph2", "graph3"];
	res.json(list);
	console.log('Sent list of items');
});

app.get('/api/getList', (req, res) => {
	var list = ["item1", "item2", "item3"];
	res.json(list);
	console.log('Sent list of items');
});

app.get('/api/openid', (req, res) => {
	
});

// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
	console.log('openid')
	res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);