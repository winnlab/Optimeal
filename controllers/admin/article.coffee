Crud = require '../../lib/crud'

crud = new Crud
	modelName: 'Article'
	relatedModels: [
		name: 'ArticleCategory'
		field: 'articleCategory' # related documents will be populated into variable, named as "field" variable
		findAllInRelated: true # findAll will be returned in variable, named as "name" above
		cascade: false
	,
		name: 'Author'
		field: 'author' # related documents will be populated into variable, named as "field" variable
		findAllInRelated: true # findAll will be returned in variable, named as "name" above
		cascade: false
	]
	files: [
		name: 'img'
		replace: true
		type: 'string'
	]

module.exports.rest = crud.request.bind crud
module.exports.restFile = crud.fileRequest.bind crud