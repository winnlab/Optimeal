mongoose = require 'mongoose'

ObjectId = mongoose.Schema.Types.ObjectId
Mixed = mongoose.Schema.Types.Mixed

SchemaFields =
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
	position:
		type: Number
		trim: true
	link:
		type: String
		trim: true
	view:
		type: String
		trim: true
	img:
		type: String
		default: ''

options =
	collection: 'articleCategories'

Schema = new mongoose.Schema SchemaFields, options

module.exports =  mongoose.model 'ArticleCategory', Schema
