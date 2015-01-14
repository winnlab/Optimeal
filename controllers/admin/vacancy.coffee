Crud = require '../../lib/crud'

crud = new Crud
	modelName: 'Vacancy'

module.exports.rest = crud.request.bind crud
