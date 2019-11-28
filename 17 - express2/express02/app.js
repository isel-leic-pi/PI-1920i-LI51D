'use strict'

const DEFAULT_PORT = 8888;

const express = require('express');

const isel = require('./isel');
const leic = require('./leic');

const app = express();

app.use('/isel', isel);
app.use('/curso', leic);

const port = process.argv[2] || DEFAULT_PORT;

app.listen(port);
