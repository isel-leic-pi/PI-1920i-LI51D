"use strict";

const items = []

console.log(items.length)

items[0] = "isel"

console.log(items.length)

items[125] = "leic"

console.log(items.length)

const newItems = items.map(str => "str: " + str)

console.log(newItems.length)

for (let it in newItems) {
	console.log(newItems[it])
}

newItems.forEach(str => console.log(str))

console.log('--------')

function f1() {	return 1 }

const f2 = function() { return 2 }

const f3 = () => 3

function f4(x) {
	const xx = x || 4
	console.log(xx)
}

console.log(f1())
console.log(f2())
console.log(f3())
f4()
f4(44)

console.log('--------')

function showTrueOrFalse(x) {
	console.log(`${x} : ${x ? true : false}`)
}

showTrueOrFalse(false)
showTrueOrFalse(true)

showTrueOrFalse(0)
showTrueOrFalse(1)

showTrueOrFalse(2)
showTrueOrFalse(-1)
showTrueOrFalse(0.2)

showTrueOrFalse(Infinity)
showTrueOrFalse(NaN)

showTrueOrFalse(1/0)
showTrueOrFalse(0/0)

showTrueOrFalse("")
showTrueOrFalse("isel")

showTrueOrFalse([])
showTrueOrFalse({})

showTrueOrFalse(undefined)
showTrueOrFalse(null)

showTrueOrFalse(() => {})

console.log('--------')

function getFunc(op, val) {
	switch (op) {
		case '+': return function(x) { return x + val }
		case '*': return function(x) { return x * val }
		default: return function() { return 0 }
	}
}

const ffp3 = getFunc('+', 3)
const ffp5 = getFunc('+', 5)
const ffx3 = getFunc('*', 3)
const ffx5 = getFunc('*', 5)
const ffr0 = getFunc('z', 5)

console.log(ffp3(1))
console.log(ffp5(1))
console.log(ffx3(1))
console.log(ffx5(1))
console.log(ffr0(4))



















