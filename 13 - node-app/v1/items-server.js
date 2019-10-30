'use strict'

const DEFAULT_PORT = 8888

const http = require('http')
const router = require('./router.js')
const itemsApi = require('./items-web-api')

router.get('/items', itemsApi.getAllItems)
router.post('/items', itemsApi.createItem)

/*
router.get('/items/:id', itemsApi.getItem)
*/

http.createServer(router)
    .listen(process.argv[2] || DEFAULT_PORT)
