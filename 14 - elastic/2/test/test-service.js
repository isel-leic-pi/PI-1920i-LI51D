const assert = require('assert');

const serviceModule = require('../items-service');

describe('Service', function () {
	
	describe('getAllItems', function () {
		
		it ('should return an empty array at start', function (done) {
			const storage = {
				'search': function (name, done) {
					done([]);
				}
			}
			const service = serviceModule(storage)
			
			const items = service.getAllItems(
				items => {
					assert.deepEqual(items, []);
					done();
				}
			)
			
		})

		it ('should return an empty array even if storage returns undefined', function (done) {
			const storage = {
				'search': function (name, done) {
					done(undefined);
				}
			}
			const service = serviceModule(storage)
			
			const items = service.getAllItems(
				items => {
					assert.deepEqual(items, []);
					done();
				}
			)
			
		})

	})
	
	describe('createItem', function () {
		
		it ('should add value at property name to storage', function (done) {
			const TEST_ID = 88;
			
			let storedItem = null;
			const storage = {
				'add': function (name, item, done) {
					storedItem = item;
					done(TEST_ID);
				}
			}
			const service = serviceModule(storage)
			
			const item = { name: "Item" };
			
			const itemId = service.createItem(
				item,
				(err, id) => {
					assert.equal(err, undefined);
					assert.equal(id, TEST_ID);
					assert.equal(storedItem, item.name)
					done();
				}
			)
			
		})

	})

})
