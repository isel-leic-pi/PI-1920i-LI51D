'use strict'

const filename = process.argv[2]
if (!filename) {
  throw Error('A filename is required as argument')
}

const monitor = require('./watch.js')(filename)

console.log('monitor', monitor)

monitor.on(monitor.CREATED, (...args) => {
  console.log('CREATED event emmited', args)
}).on(monitor.CHANGED, (...args) => {
  console.log('CHANGED event emmited', args)
})
