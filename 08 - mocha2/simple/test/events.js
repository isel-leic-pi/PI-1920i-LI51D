'use strict'

const assert = require('assert')
const EventEmitter = require('events')

describe ('EventEmitter', function () {

  it ('should accept one listener', function () {
    // [A]rrange
    const emitter = new EventEmitter()

    // [A]ct
    emitter.on('someEvent', function () {})

    // [A]ssert
    assert.equal(emitter.listenerCount('someEvent'), 1)    
  })

  it ('should accept two listeners', function () {
    // [A]rrange
    const emitter = new EventEmitter()

    // [A]ct
    emitter.on('someEvent', function () {})
    emitter.on('someEvent', function () {})

    // [A]ssert
    assert.equal(emitter.listenerCount('someEvent'), 2)    
  })

  it ('should accept listeners in different events', function () {
    // [A]rrange
    const emitter = new EventEmitter()

    // [A]ct
    emitter.on('someEvent', function () {})
    emitter.on('anotherEvent', function () {})
    emitter.on('someEvent', function () {})

    // [A]ssert
    assert.equal(emitter.listenerCount('someEvent'), 2)    
    assert.equal(emitter.listenerCount('anotherEvent'), 1)    
  })

  it ('should allow emit of event with no listeners', function () {
    // [A]rrange
    const emitter = new EventEmitter()

    // [A]ct
    const res = emitter.emit('someEvent')

    // [A]ssert
    assert.equal(res, false)
  })

  it ('should correctly emit event with listeners', function (done) {
    // [A]rrange
    const emitter = new EventEmitter()
    emitter.on('someEvent', function () { done() })

    // [A]ct
    const res = emitter.emit('someEvent')

    // [A]ssert
    // asynchronous test ends with 'done()'
  })

})
