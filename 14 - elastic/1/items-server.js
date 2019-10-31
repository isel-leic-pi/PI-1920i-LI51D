'use strict'

const DEFAULT_PORT = 8888

const STORAGE_HOST = 'localhost'
const STORAGE_PORT = 9200

const http = require('http')
const router = require('./router.js')

const apiModule = require('./items-web-api')
const serviceModule = require('./items-service');
const storageModule = require('./items-storage');

const storage = storageModule(STORAGE_HOST, STORAGE_PORT);
const service = serviceModule(storage);
const itemsApi = apiModule(router, service);

http.createServer(router)
    .listen(process.argv[2] || DEFAULT_PORT)
