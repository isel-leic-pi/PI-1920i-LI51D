'use strict';

const request = require('request-promise');

// This is too simplistic for reuse in submitted solutions.

// If a student submits code inspired in this
// sample (s)he is explicitly requiring a grade
// no higher than 10.

function storage (host, port) {
	
	const baseUrl = `http://${host}:${port}`

	const theStorage = {
		
		'search': function (name) {
			return request
				.get(`${baseUrl}/${name}/_search`)
				.then(body => {
					console.log('res', body);
					
					const answer = JSON.parse(body);
					
					const hits = answer && answer.hits && answer.hits.hits || [];
					
					const items =
						hits.map(hit => hit._source.name).filter(item => item)
						
					return items;
				})
				.catch(err => {
					console.log('err', err);
					return [];
				})
		},
		
		'add': function (name, item) {
			return request
				.post(
					{
						url: `${baseUrl}/${name}/_doc`,
						headers:
						{
							'Content-Type': 'application/json'
						},
						body: JSON.stringify(
							{
								'name': item
							}
						)
					}
				)
				.then(body => {
					console.log('res', body);

					const answer = JSON.parse(body);
					
					const id = answer._id || -1;
						
					return id;
				})
				.catch (err => {
					console.log('err', err);
					return -1;
				})
		},

	}
	
	return theStorage;
}

module.exports = storage;
