'use strict'

const filename1 = process.argv[2]
if (!filename1) {
  throw Error('A filename is required as second argument')
}

const filename2 = process.argv[3]
if (!filename2) {
  throw Error('A filename is required as third argument')
}

const watch = require('./watch.js')
const monitor1 = watch(filename1)
const monitor2 = watch(filename2)

monitor1.on(monitor1.CREATED, (...args) => {
  console.log('1: CREATED event emmited', args)
}).on(monitor1.CHANGED, (...args) => {
  console.log('1: CHANGED event emmited', args)
})

monitor2.on(monitor2.CREATED, (...args) => {
  console.log('2: CREATED event emmited', args)
}).on(monitor2.CHANGED, (...args) => {
  console.log('2: CHANGED event emmited', args)
})
