Crud = require '../../lib/crud'

crud = new Crud
	modelName: 'ProductCategory'
	files: [
		name: 'main'
		replace: true
		type: 'string'
		parent: 'img'
	,
		name: 'bg'
		replace: true
		type: 'string'
		parent: 'img'
	,
		name: 'item'
		replace: true
		type: 'string'
		parent: 'img'
	]

module.exports.rest = crud.request.bind crud
module.exports.restFile = crud.fileRequest.bind crud
