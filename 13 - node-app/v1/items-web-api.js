'use strict';

const service = require('./items-service');

module.exports = {

	'getAllItems': function (req, res) {
		
		service.getAllItems(items => {
			res.status = 200
			res.statusMessage = 'OK'
			res.headers = {
				'Content-type': 'application/json'
			}
			
			const answer = { 'items': items };
			
			res.end(JSON.stringify(answer));
		})
	},
	
	'createItem': function (req, res) {
		
		let body = '';
		req.on('data', chunk => { 
			body += chunk.toString();
		});
		req.on('end', () => {

			const item = JSON.parse(body);
		
			service.createItem(item, (err, ret) => {
				if (err) {
					res.status = 400;
					res.statusMessage = 'Bad request';
					res.headers = {
						'Content-type': 'application/json'
					}
					
					const answer = { 'error': err };
					
					res.end(JSON.stringify(answer));
					
				} else {
					
					res.status = 201;
					res.statusMessage = 'Created';
					res.headers = {
						'Content-type': 'application/json'
					}
					
					const answer = { 'id': ret };
					
					res.end(JSON.stringify(answer));
				}
			})

		
		})
		
	},
	
	'getItem': function (req, res) {
		
	},
	
	'updateItem': function (req, res) {
		
	},
	
	'deleteItem': function (req, res) {
		
	},
	
}
