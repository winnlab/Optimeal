mongoose = require 'mongoose'

ObjectId = mongoose.Schema.Types.ObjectId
Mixed = mongoose.Schema.Types.Mixed

SchemaFields =
	name:
		type: String
		trim: true
	surname:
		type: String
		trim: true
	email:
		type: String
		trim: true
	phone:
		type: String
		trim: true
	commentary:
		type: String
		trim: true
	cv:
		type: String
		default: ''
	vacancy:
		type: ObjectId
		ref: 'Vacancy'

options =
	collection: 'vacancyResponses'

Schema = new mongoose.Schema SchemaFields, options

module.exports =  mongoose.model 'VacancyResponse', Schema
