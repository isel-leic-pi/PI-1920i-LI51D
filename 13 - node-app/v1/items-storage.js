'use strict';

const db = {};

module.exports = {
	
	'search': function (name, done) {
		setTimeout(
			() => { done(db[name]); },
			1000
		);
	},
	
	'add': function (name, item, done) {
		setTimeout(
			() => {
				const coll = db[name] || [];
				coll.push(item);
				if (coll.length == 1) {
					db[name] = coll;
				}
				done(coll.length - 1);
			}, 
			1000
		);
	},
	
}