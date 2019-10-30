module.exports = {

	'getAllItems': function (req, res) {
		res.status = 200
		res.statusMessage = 'OK'
		res.headers = {
			'Content-type': 'text/html'
		}
		res.end('<html><body><h3>Nothing to see here...</h3></body></html>')
	},
	
	'createItem': function (req, res) {
		
	},
	
	'getItem': function (req, res) {
		
	},
	
	'updateItem': function (req, res) {
		
	},
	
	'deleteItem': function (req, res) {
		
	},
	
}
