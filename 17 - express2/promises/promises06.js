'use strict';

console.log('Creating promise.');

function asyncOperation() {
	return new Promise(
		function (resolve, reject) {
			console.log('P1: This executes immediately.');
			setTimeout(function () {
				console.log("P1 resolved");
				resolve(8);
			}, 2000);
		}
	);
}

const promise = 
	asyncOperation()
	.then(
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
	)
	.then(
		function (value) {
			console.log('P3: second promise fulfilled with', value);
			throw new Error("FALHA");
		}
	)
	.catch(function (error) {
		console.log("FAILED with", error);
	})
	.finally(function() {
		console.log("DONE");
	})

console.log('Promises created.');

console.log("P: ", promise);

setTimeout(function () {
	console.log("P: ", promise);
}, 5000);
