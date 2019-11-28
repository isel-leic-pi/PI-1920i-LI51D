
function f1(arg, cb) {
	// ...
	cb(arg);
}

function f2(arg1, arg2, cb) {
	// ...
	cb(arg1 + arg2);
}

function f3(arg, cb) {
	// ...
	cb(arg);
}

// Callback hell:
f1(3, function (res1) {
	// ...
	f2(4, res1, function (res2) {
		// ...
		f3(res2, function (res3) {
			// ...
			setTimeout(function () {
				console.log('Hello, world!');
			}, 1000);
		});
	});
});
