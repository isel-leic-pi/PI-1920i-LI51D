'use strict';

console.log('Creating promise.');


function createPromise() {
	return new Promise(
		function (resolve, reject) {
			console.log('P1: This executes immediately.');
			resolve(8);
			console.log('P1: resolve was called.');
		}
	);
}

function registerHandler(prom) {
	prom.then(function (value) {
		registerHandler(createPromise());
	});
}

const promise1 = createPromise();
console.log('Registering the handler.');
registerHandler(promise1);

console.log('Promises created.');

console.log("P1: ", promise1);

setTimeout(function () {
	console.log("P1: ", promise1);
	
	promise1.then(function (value) {
		console.log("P1 settled with", value);
	});
	
}, 4000);

// for (;;) {}
