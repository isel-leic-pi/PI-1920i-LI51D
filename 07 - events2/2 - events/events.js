'use strict'

const EventEmitter = require('events')

function MyEventEmitter (text) {
	EventEmitter.call(this)
	this.text = text
}

MyEventEmitter.prototype = Object.create(EventEmitter.prototype)
MyEventEmitter.prototype.constructor = MyEventEmitter

console.log(MyEventEmitter.prototype === EventEmitter.prototype)

const mee = new MyEventEmitter('ISEL')

console.log(mee)

mee.on('xpto', () => {
	console.log('XPTO')
})

console.log(mee)









/*
const ee = new EventEmitter()

console.log(ee)

ee.on('xpto', () => {
	console.log('XPTO')
})

console.log(ee)

console.log(ee.constructor.prototype)
*/
