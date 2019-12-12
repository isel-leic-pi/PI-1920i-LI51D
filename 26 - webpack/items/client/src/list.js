const global = require('./global.js');
const api = require('./itemsApi.js');

const Handlebars = require('../node_modules/handlebars/dist/handlebars.min.js');

const contents =  `
	<h1><img src="${global.logo}"><span class="htext">Items</span></h1>

	<div id='itemsContainer'></div>
`;

const itemsListTemplate =
	Handlebars.compile(
		'<ul>' +
			'{{#each items}}' +
				'<li><strong>' +
					'{{this}}' +
				'</strong></li>' +
			'{{/each}}' +
		'</ul>'
	);

const behavior = function () {
	const itemsContainer =
		document.querySelector(
			'#itemsContainer'
		);

	api.getItems()
	.then(items => {
		itemsContainer.innerHTML = 
			itemsListTemplate(items);
	})
}

module.exports = {
	view : () => contents,
	run  : behavior
}

