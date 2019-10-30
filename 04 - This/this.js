'use strict';

const f = function () {
  console.log('this: ', this, 'args:', arguments)
}

const obj = { a: 1, b: 2, m: f }

obj.m(2, 3, 'str')

f('isel', 2019)

function Point(x, y) {
  this.x = x
  this.y = y

  this.show = function () {
    console.log('Point:', this)
  }
}

Point.prototype.add = function (that) {
  return new Point(this.x + that.x, this.y + that.y)
}

Point.prototype.origin = 'ISEL'

function Point_show(p) {
  console.log('Point:', p)
}

const p1 = new Point(3, 4)
const p2 = new Point(5, 7)

const p3 = p1.add(p2)
p3.origin = 'IST'

console.log(p1.x)
console.log(p1.y)

p1.show()
Point_show(p1)

p3.show()

console.log(p3.constructor)
console.log(p3.constructor.prototype)

console.log(p1.origin)
console.log(p2.origin)
console.log(p3.origin)

console.log('str'.constructor)
console.log(1..constructor)

String.prototype.prepend = function (prefix) {
  return prefix + this
}

const str1 = 'LEIC'
const str2 = str1.prepend('ISEL-')

console.log(str2)