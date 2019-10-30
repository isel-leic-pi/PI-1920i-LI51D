'use strict'

const assert = require('assert')

describe('Basic', function () {
  describe('plus', function () {
    it('should return 4 when adding 2 and 2', function() {
      assert.equal(2+2, 4)
    })
  })
})

describe('Group 1', function () {
  it ('should succeed for test 1', function () {})
})

describe('Group 2', function () {
  it ('should succeed for test 2.1', function () {})
  it ('should succeed for test 2.2', function () {})
})

describe('Group 3', function () {
  before (function () { console.log('before all in group 3') })
  it ('should succeed for test 3.1', function () {})
  it ('should succeed for test 3.2', function () {})
  after (function () { console.log('after all in group 3') })
})

describe('Group 4', function () {
  beforeEach (function () { console.log('before each in group 4') })
  afterEach (function () { console.log('after each in group 4') })
  it ('should succeed for test 4.1', function () {})
  it ('should succeed for test 4.2', function () {})
})

describe('Group 5', function () {
  beforeEach (function () { console.log('before each in group 5') })
  after (function () { console.log('after all in group 5') })

  describe('Group 5.1', function() {
    before (function () { console.log('before all in subgroup 5.1') })
    it ('should succeed for test 5.1.1', function () {})
    it ('should succeed for test 5.1.2', function () {})
    after (function () { console.log('after all in subgroup 5.1') })
  })

  describe('Group 5.2', function() {
    beforeEach (function () { console.log('before each in subgroup 5.2') })
    it ('should succeed for test 5.2.1', function () {})
    it ('should succeed for test 5.2.2', function () {})
    afterEach (function () { console.log('after each in subgroup 5.2') })
  })
})

describe('Group 6', function() {
  it ('should sleep a little bit', function (done) {
    setTimeout(function () {
      done()
    }, 1500)
  })
})

