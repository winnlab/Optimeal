mongoose = require 'mongoose'

ObjectId = mongoose.Schema.Types.ObjectId

Schema =
	link:
		type: String
		trim: true
		required: false
	view:
		type: String
		trim: true
	map:
		type: String
		trim: true
	lang: [
		languageId:
			type: ObjectId
			ref: 'Language'
		title:
			type: String
			trim: true
		content:
			type: String
			trim: true
	]

options =
	collection: 'contacts'

SchemaObject = new mongoose.Schema Schema, options

module.exports =  mongoose.model 'Contact', SchemaObject
