'use strict'

const storage = require('./items-storage');

module.exports = {
	
	getAllItems: function (done) {
		storage.search('items', items => {
			done(items || [])
		});
	},
	
	createItem: function (item, done) {
		if (item && item.name) {
			storage.add('items', item.name, id => {
				done(undefined, id);
			});
		} else {
			setImmediate(() => { done('Invalid request', -1); });
		}
	}
}
