'use strict';

function addItem(itemName) {
	return fetch('/items', {
			method: 'POST',
			headers: {
				'Content-type': 'application/json'
			},
			body: JSON.stringify({
				name: itemName
			})
		})
		.then(response => {
			return response.json()
		})
}

function getItems() {
	return fetch('/items')
		.then(response => {
			return response.json()
		});
}