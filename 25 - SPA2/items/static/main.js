
const routes = {
	'#home'   : modHome(),
	'#insert' : modInsert(),
	'#list'   : modList(),
	default   : modDefault()
}


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

	const hashParts = location.hash.split('/');
	const route = hashParts[0];
	const args = hashParts.shift();

	const mod = routes[route] || routes['default'];
	
	main.innerHTML = mod.view(args);
	mod.run(args);
	
}
