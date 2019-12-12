'use strict'

function service (storage) {
	
	const theService = {
	
		getAllItems: async function () {
			const items =
				await storage.search('items');
			
			return items || [];
		},
		
		createItem: async function (item) {
			if (item && item.name) {
				const id = await
					storage.add('items', item.name);
				return id;
			} else {
				throw 'Invalid request';
			}
		}
	};
	
	return theService;
}

module.exports = service;
