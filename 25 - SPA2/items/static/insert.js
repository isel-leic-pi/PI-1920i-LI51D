
const modInsert = function () {
	
	const contents = `
		<label for='itemName'>Item: </label>
		<input type='text' id='itemName'>
		<input type='button' id='butInsert' value='Insert'>
	`;

	const behavior = function () {
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
	
	return {
		view : () => contents,
		run  : behavior
	}
}
