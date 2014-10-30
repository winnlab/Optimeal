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
	view:
		type: String
		trim: true
	link:
		type: String
		trim: true
		unique: true
	img:
		main:
			type: String
			default: ''
		bg:
			type: String
			default: ''
		item:
			type: String
			default: ''
	textColor:
		type: String
		trim: true
	itemTextColor:
		type: String
		trim: true
	textAlign:
		type: String
		trim: true
	textSize:
		type: String
		trim: true

options =
	collection: 'productCategories'

Schema = new mongoose.Schema SchemaFields, options

module.exports =  mongoose.model 'ProductCategory', Schema
