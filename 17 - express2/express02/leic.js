'use strict';

const express = require('express');

const router = express.Router();

router.get('/', function (req, res) {
	res.send('LEIC');
});

router.get('/about', function (req, res) {
	res.send('LEIC: best academic program');
});

module.exports = router;
