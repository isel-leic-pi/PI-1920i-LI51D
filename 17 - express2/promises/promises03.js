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

console.log('Promises created.');

console.log("P1: ", promise1);

setTimeout(function () {
	console.log("P1: ", promise1);
	
	promise1.then(function (value) {
		console.log("P1 settled with", value);
	});
	
}, 4000);
