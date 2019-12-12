require('./style.css');

const global = require('./global.js');
const routes = require('./routes.js');
 
window.addEventListener('load', onPageLoad);
window.addEventListener('hashchange', onHashChange);

function onPageLoad() {

	document.body.innerHTML = global.main;

	if (location.hash[0]) {
		onHashChange();
	} else {
		location.hash = "#home";
	}
}

function onHashChange() {

	const [route, ...args] = location.hash.substring(1).split('/');

	const mod = routes[route] || routes['default'];
	
	global.setContents(mod.view(args));
	
	mod.run(args);
	
}
