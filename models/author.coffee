mongoose = require 'mongoose'

ObjectId = mongoose.Schema.Types.ObjectId
Mixed = mongoose.Schema.Types.Mixed

SchemaFields =
	lang: [
		languageId:
			type: ObjectId
			ref: 'Language'
		name:
			type: String
			trim: true
		surname:
			type: String
			trim: true
	]
	img:
		type: String
		default: ''

options =
	collection: 'authors'

Schema = new mongoose.Schema SchemaFields, options

module.exports =  mongoose.model 'Author', Schema
