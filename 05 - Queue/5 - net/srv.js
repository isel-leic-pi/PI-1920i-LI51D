'use strict'

const net = require('net')

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

setInterval(() => { broadcast('ISEL - LEIC - PI') }, 5000)
