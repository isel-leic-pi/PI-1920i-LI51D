'use strict'

let ready = false

setTimeout(() => { ready = true }, 5000)

while (!ready) ;

console.log("READY! Let's go!")
