'use strict'

/*
console.log('begin')

setTimeout(() => console.log('time has passed...'), 5000)

console.log('end')
*/

/*
for (let i = 10; i > 0; --i) {
  setTimeout(() => console.log(i), i * 100)
}

console.log('Counting...')
*/

setTimeout(() => console.log('2 seconds have passed'), 2000)

const begin = new Date().getTime()

while (new Date().getTime() - begin < 5000);

console.log('done')
