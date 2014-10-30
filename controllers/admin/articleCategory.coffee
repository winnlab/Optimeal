Crud = require '../../lib/crud'

crud = new Crud
	modelName: 'ArticleCategory'
	files: [
		name: 'img'
		replace: true
		type: 'string'
	]

module.exports.rest = crud.request.bind crud
module.exports.restFile = crud.fileRequest.bind crud
