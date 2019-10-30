'use strict'

const fs = require('fs')

const filename = process.argv[2]
if (!filename) {
  throw Error('A filename is required as argument')
}

fs.exists(filename, res => {
  if (res) {
    watchFile(filename)
  } else {
    watchDir('.', filename)
  }
})

function watchDir (dir, fname) {
  let done = false
  const dirWatching = fs.watch(dir, curr => {
    fs.exists(fname, res => {
      if (res && !done) {
        console.log(`${fname} created`)
        done = true
        dirWatching.close()
        watchFile(fname)
      }
    })
  })
}

function watchFile (fname) {
  fs.watch(fname, curr => {
    console.log(`${fname} changed`)
  })
}
