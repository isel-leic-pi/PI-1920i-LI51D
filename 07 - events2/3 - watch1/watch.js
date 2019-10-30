'use strict'

const fs = require('fs')
const EventEmitter = require('events')

function MonitorFile (filename) {
  EventEmitter.call(this)

  this.CREATED = 'created'
  this.CHANGED = 'changed'
  
  console.log('monitoring ' + filename)
  
  this.watchDir = function (dir, fname) {
    let done = false
    const dirWatching = fs.watch(dir, curr => {
      fs.exists(fname, res => {
        if (res && !done) {
          this.emit(this.CREATED, fname)
          done = true
          dirWatching.close()
          this.watchFile(fname)
        }
      })
    })
  }
  
  this.watchFile = function (fname) {
    fs.watch(fname, curr => {
      this.emit(this.CHANGED, fname)
    })
  }
  
  fs.exists(filename, res => {
    if (res) {
      this.watchFile(filename)
    } else {
      this.watchDir('.', filename)
    }
  })
}

MonitorFile.prototype = Object.create(EventEmitter.prototype)
MonitorFile.prototype.constructor = MonitorFile

module.exports = (filename) => new MonitorFile(filename)
