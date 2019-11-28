'use strict';

console.log('Creating promises.');

const promise1 = new Promise(
	function (resolve, reject) {
		console.log('P1: This executes immediately.');
		setTimeout(function () {
			console.log("P1 resolved");
			resolve(8);
		}, 2000);
	}
);

const promise2 = new Promise(
	function (resolve, reject) {
		console.log('P2: This executes immediately.');
		setTimeout(function () {
			console.log("P2 fails");
			reject("FALHA");
		}, 4000);
	}
);

promise1.then(function (value) {
	console.log("P1 fullfilled with", value);
});

promise2.catch(function (error) {
	console.log("P2 rejected with", error);
});


console.log('Promises created.');

console.log("P1: ", promise1);
console.log("P2: ", promise2);

setTimeout(function () {
	console.log("P1: ", promise1);
	console.log("P2: ", promise2);
}, 6000);
