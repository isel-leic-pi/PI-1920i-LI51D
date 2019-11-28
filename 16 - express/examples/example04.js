'use strict'

const DEFAULT_PORT = 8888;

const express = require('express');


const app = express();

function itemsHandler(req, res) {
	console.log(":: ITEMS ::");
	res.send("ITEMS");
}

function itemIdHandler(req, res) {
	const answer = "ITEM(" +  req.params['id'] + "): " + JSON.stringify(req.query);
	console.log(":: " + answer +  " ::");
	res.send(answer);
}

app.use( express.json() );

app.get('/', function (req, res) {
	res.send("MAIN SITE");
})
app.get('/items', itemsHandler);
app.get('/items/:id', itemIdHandler);
app.get('/things', function (req, res) {
	res.send("THINGS: " + JSON.stringify(req.body));
});

const port = process.argv[2] || DEFAULT_PORT;

app.listen(port);
