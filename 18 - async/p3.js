'use strict';

function getSchool() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve('isel');
		}, 1500);
	});
}

function getYear() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(new Date().getFullYear());
		}, 1000);
	});
}

function format(txt) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(txt.toUpperCase());
		}, 2000);
	});
}

function concat(part1, part2) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(part1.toString() + ' - ' + part2.toString());
		}, 1200);
	});
}

// ==========

async function getParts() {
	return Promise.all([ 
		format(await getSchool()),
		getYear()
	])
}

async function example() {
	const parts = await getParts();
	console.log(await concat(parts[0], parts[1]));
}

example()
.then(() => { console.log('1: REALLY DONE') } );

console.log('1: DONE?');

// ==========

(async function() {
	const parts = await Promise.all([format(await getSchool()), getYear()])
	console.log(await concat(parts[0], parts[1]));
})().then(() => { console.log('2: REALLY DONE') } );

console.log('2: DONE?');
