'use strict';

console.log('Creating promise.');

const promise1 = new Promise(
	function (resolve, reject) {
		console.log('P1: This executes immediately.');
		setTimeout(function () {
			console.log("P1 resolved");
			resolve(8);
		}, 2000);
	}
);

const promise2 = promise1.then(
	function (value) {
		console.log('P2: first promise fulfilled with', value);
		return new Promise(
			function (resolve, reject) {
				setTimeout(function () {
					console.log("P2 resolved");
					resolve(88);
				}, 2000);
			}
		);
	}
);

const promise3 = promise2.then(
	function (value) {
		console.log('P3: second promise fulfilled with', value);
		return 888;
	}
);

console.log('Promises created.');

console.log("P1: ", promise1);
console.log("P2: ", promise2);
console.log("P3: ", promise3);

setTimeout(function () {
	console.log("P1: ", promise1);
	console.log("P2: ", promise2);
	console.log("P3: ", promise3);
}, 3000);

setTimeout(function () {
	console.log("P1: ", promise1);
	console.log("P2: ", promise2);
	console.log("P3: ", promise3);
}, 5000);
