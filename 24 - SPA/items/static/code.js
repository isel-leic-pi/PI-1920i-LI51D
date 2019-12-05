
window.addEventListener('load', onPageLoad);
window.addEventListener('hashchange', onHashChange);

function onPageLoad() {
	document.querySelector('body').innerHTML = main;
	if (location.hash[0]) {
		onHashChange();
	} else {
		location.hash = "#home";
	}
}

function onHashChange() {
	const main =
		document.querySelector('#mainContainer');

	switch (location.hash) {
		case "#home":
			main.innerHTML = home;
			break;
		case "#insert":
			main.innerHTML = insert;
			insertStart();
			break;
		case "#list":
			main.innerHTML = list;
			listStart();
			break;
		default:
			main.innerHTML =
				'<h1>' + location.hash + '</h1>';
			break;
	}
}
