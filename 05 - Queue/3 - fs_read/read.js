'use strict'

const fs = require('fs')

const filename = process.argv[2]
if (!filename) {
  throw Error('A filename is required as argument')
}

fs.readFile(filename, processFile)

function processFile (err, data) {
  if (err) {
    console.log('Failed!', err)
    return
  }
  console.log(data.toString())
}
