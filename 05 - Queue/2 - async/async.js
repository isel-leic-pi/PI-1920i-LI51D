'use strict'

function mulSync (a, b) {
  return a * b
}

console.log('Before mulSync(3, 4)')
const ms34 = mulSync(3, 4)
console.log('After mulSync(3, 4)')
console.log('ms34: ' + ms34)
console.log()

console.log('Before mulSync(4, 5)')
const ms45 = mulSync(4, 5)
console.log('After mulSync(4, 5)')
console.log('ms34: ' + ms45)
console.log()

function mulSyncCb (a, b, cb) {
  console.log(`Begin mulSyncCb(${a}, ${b})`)
  cb(a * b)
  console.log(`End mulSyncCb(${a}, ${b})`)
}

console.log('Before mulSyncCb(3, 4)')
mulSyncCb(3, 4, mscb34 => console.log('mscb34: ' + mscb34))
console.log('After mulSyncCb(3, 4)')
console.log()

console.log('Before mulSyncCb(4, 5)')
mulSyncCb(4, 5, mscb45 => console.log('mscb45: ' + mscb45))
console.log('After mulSyncCb(4, 5)')
console.log()

function mulAsyncCb (a, b, cb) {
  console.log(`Begin mulAsyncCb(${a}, ${b})`)
  setImmediate(() => cb(a * b))
  console.log(`End mulAsyncCb(${a}, ${b})`)
}

console.log('Before mulAsyncCb(3, 4)')
mulAsyncCb(3, 4, msacb34 => console.log('msacb34: ' + msacb34))
console.log('After mulAsyncCb(3, 4)')
console.log()

console.log('Before mulAsyncCb(4, 5)')
mulAsyncCb(4, 5, msacb45 => console.log('msacb45: ' + msacb45))
console.log('After mulAsyncCb(4, 5)')
console.log()
