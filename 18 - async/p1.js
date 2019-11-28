'use strict';

function getSchool(cb) {
	setTimeout(() => {
		cb('isel');
	}, 1500);
}

function getYear(cb) {
	setTimeout(() => {
		cb(new Date().getFullYear());
	}, 1000);
}

function format(txt, cb) {
	setTimeout(() => {
		cb(txt.toUpperCase());
	}, 2000);
}

function concat(part1, part2, cb) {
	setTimeout(() => {
		cb(part1.toString() + ' - ' + part2.toString());
	}, 1200);
}

// ==========

getSchool(school => {
	format(school, formattedSchool => {
		getYear(year => {
			concat(formattedSchool, year, txt => {
				console.log(txt);
			});
		});
	});
});
