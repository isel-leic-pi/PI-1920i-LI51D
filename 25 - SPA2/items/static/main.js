
window.addEventListener('load', onPageLoad);
window.addEventListener('hashchange', onHashChange);

function onPageLoad() {

	document.body.innerHTML = main;

	if (location.hash[0]) {
		onHashChange();
	} else {
		location.hash = "#home";
	}
}

function onHashChange() {

	const [route, ...args] = location.hash.substring(1).split('/');

	const mod = routes[route] || routes['default'];
	
	setContents(mod.view(args));
	
	mod.run(args);
	
}
