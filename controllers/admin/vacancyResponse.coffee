Crud = require '../../lib/crud'

crud = new Crud
	modelName: 'VacancyResponse'
	relatedModels: [
		name: 'Vacancy'
		field: 'vacancy' # related documents will be populated into variable, named as "field" variable
		findAllInRelated: true # findAll will be returned in variable, named as "name" above
		cascade: false
	]
	files: [
		name: 'cv'
		replace: true
		type: 'string'
	]

module.exports.rest = crud.request.bind crud
module.exports.restFile = crud.fileRequest.bind crud
