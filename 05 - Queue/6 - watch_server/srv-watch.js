const net = require('net')
const fs = require('fs')

const filename = process.argv[2]
if (!filename) {
  throw Error('A filename is required as argument')
}

const clients = []

const server = net.createServer(connection => {
  console.log(`new connection from ${connection.remoteAddress}:${connection.remotePort}`)
  clients.push(connection)
})

function broadcast (message) {
  clients.forEach(conn => {
    if (!conn.destroyed) {
      conn.write(message + '\r\n')
    }
  })
}

server.listen(8888)

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
        broadcast(`${fname} created`)
        done = true
        dirWatching.close()
        watchFile(fname)
      }
    })
  })
}

function watchFile (fname) {
  fs.watch(fname, curr => {
    broadcast(`${fname} changed`)
  })
}
