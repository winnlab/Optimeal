Crud = require '../../lib/crud'

crud = new Crud
	modelName: 'Contact'

module.exports.rest = crud.request.bind crud
