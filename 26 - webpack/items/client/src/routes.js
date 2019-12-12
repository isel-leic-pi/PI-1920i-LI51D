const global = require('./global.js');

module.exports = {
	home    : require('./home.js'),
	insert  : require('./insert.js'),
	list    : require('./list.js'),
	default : global.modDefault()
}
