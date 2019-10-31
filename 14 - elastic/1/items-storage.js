'use strict';

const request = require('request');

// This is too simplistic for reuse in submitted solutions.

// If a student submits code inspired in this
// sample (s)he is explicitly requiring a grade
// no higher than 10.

function storage (host, port) {
	
	const baseUrl = `http://${host}:${port}`

	const theStorage = {
		
		'search': function (name, done) {
			request.get(
				`${baseUrl}/${name}/_search`,
				function (err, res, body) {
					
					if (err) {
						done([]);
						return;
					}
					
					const answer = JSON.parse(body);
					
					const hits = answer && answer.hits && answer.hits.hits || [];
					
					const items =
						hits.map(hit => hit._source.name).filter(item => item)
						
					done(items);
				}
			);
		},
		
		'add': function (name, item, done) {
			request.post(
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
				},
				function (err, res, body) {
					
					if (err) {
						done(-1);
						return;
					}
					
					const answer = JSON.parse(body);
					
					const id = answer._id || -1;
						
					done(id);
				}
			);
		},

	}
	
	return theStorage;
}

module.exports = storage;
