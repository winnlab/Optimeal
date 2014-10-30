Crud = require '../../lib/crud'

crud = new Crud
	modelName: 'Product'
	relatedModels: [
		name: 'ProductCategory'
		field: 'productCategory' # related documents will be populated into variable, named as "field" variable
		findAllInRelated: true # findAll will be returned in variable, named as "name" above
		cascade: false
	]
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
	]

module.exports.rest = crud.request.bind crud
module.exports.restFile = crud.fileRequest.bind crud