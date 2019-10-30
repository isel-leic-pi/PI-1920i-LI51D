let a = 1
console.log(a)
console.log(typeof a)

console.log()

let b = 3.0
console.log(b)
console.log(typeof b)

console.log()

let c = 3/2
console.log(c)
console.log(typeof c)

console.log()

let d = 0x00aaaaaaaaaaaaaa
console.log("0x00" + d.toString(16))
console.log(typeof d)

console.log()

let e = "ISEL";
console.log(e)
console.log(typeof e)

console.log()

let f = 'ISEL';
console.log(f)
console.log(typeof f)

console.log()

let g = `ISEL ${2016 + b}`;
console.log(g)
console.log(typeof g)

console.log()

let h = false;
console.log(h)
console.log(typeof h)

console.log()

let i = true;
console.log(i)
console.log(typeof i)

console.log()

let j = undefined;	// only for demo purposes; do not use.
console.log(j)
console.log(typeof j)

console.log()

let k = null;
console.log(k)
console.log(typeof k)

console.log()

let l;
console.log(l)
console.log(typeof l)

console.log()

function fm(xm, ym, m) {
	console.log(m)
	console.log(typeof m)
}
fm(1, "str")

console.log()

function showProperties(obj) {
	console.log("{")
	for (let prop in obj) {
		console.log(`\t${prop}: ${obj[prop]}`)
	}
	console.log("}")
}

let n = { a: 1, b: "str", c: true, "isel pi": 2019 }
console.log(n)
console.log(typeof n)
showProperties(n)
console.log(n["a"])
console.log(n["isel pi"])

console.log()

let o = [ 0, "abc", true, null, "isel" ]
console.log(o)
console.log(typeof o)
showProperties(o)

console.log()

let p = (a, b) => a + b;
console.log(p)
console.log(typeof p)
p.mark = true
p.grade = 20
showProperties(p)

console.log()
