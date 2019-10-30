'use strict'

const DEFAULT_PORT = 8888

const http = require('http')
const router = require('./router.js')

const apiModule = require('./items-web-api')
const serviceModule = require('./items-service');

const storage = require('./items-storage');
const service = serviceModule(storage);
const itemsApi = apiModule(router, service);

http.createServer(router)
    .listen(process.argv[2] || DEFAULT_PORT)
