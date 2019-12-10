
const modList = function () {

	const contents =  `
		<h1><img src="images/warehouse.jpg"><span class="htext">Items</span></h1>

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

		getItems()
		.then(items => {
			itemsContainer.innerHTML = 
				itemsListTemplate(items);
		})
	}
	
	return {
		view : () => contents,
		run  : behavior
	}
}
