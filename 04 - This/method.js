/*
const obj = { a: 1, b: 2 }

console.log(obj)

console.log = function () {}

console.log(obj)
*/

function spy(obj, methodName) {
  const oldMethod = obj[methodName]
  if (oldMethod.counter) {
    return oldMethod.counter
  }
  const counter = { count: 0 }
  const spyMethod = function (...args) {
    counter.count++
    oldMethod.apply(this, args)
  }
  spyMethod.counter = counter
  obj[methodName] = spyMethod
  return counter
}

const consoleLogSpy = spy(console, 'log')

console.log('isel')
console.log('leic')

const consoleLogSpy2 = spy(console, 'log')

console.log('pi')

const currentCount1 = consoleLogSpy.count
const currentCount2 = consoleLogSpy2.count

console.log(currentCount1)
console.log(currentCount2)
