
function insertStart() {
	const itemName = document.querySelector('#itemName');
	const butInsert = document.querySelector('#butInsert');
	
	butInsert.addEventListener('click', () => {
		const nameToInsert = itemName.value;
		if (nameToInsert.length == 0) {
			alert('Item is empty');
			return;
		} 

		addItem(nameToInsert)
		.then(response => {
			location.assign('#list');
		});
	});
}

function listStart() {
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
