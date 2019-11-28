'use strict';

const express = require('express');

const router = express.Router();

router.get('/', function (req, res) {
	res.send('ISEL');
});

router.get('/about', function (req, res) {
	res.send('ISEL: a college in Chelas');
});

router.use('/images', express.static('files'));

module.exports = router;
