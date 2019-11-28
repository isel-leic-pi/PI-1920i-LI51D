'use strict'

const DEFAULT_PORT = 8888;

const express = require('express');


const app = express();

function itemsHandler(req, res) {
	console.log(":: ITEMS ::");
	res.send("ITEMS");
}

app.get('/', function (req, res) {
	res.send("MAIN SITE");
})
app.get('/items', itemsHandler);
app.get('/things', function (req, res) {
	res.send("THINGS");
});


const admin = express();

admin.get('/', function (req, res) {
	res.send("ADMIN SITE");
})
admin.get('/admin', function (req, res) {
	res.send("ADMIN");
});

const port = process.argv[2] || DEFAULT_PORT;
app.listen(port);
admin.listen(port + 1);
