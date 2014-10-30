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
		recommendations:
			type: String
			trim: true
	]
	t_cons_min:
		type: String
		trim: true
	t_cons_max:
		type: String
		trim: true
	t_st_min:
		type: String
		trim: true
	t_st_max:
		type: String
		trim: true
	textColor:
		type: String
		trim: true
	food:
		type: Array
	img:
		main:
			type: String
			default: ''
		bg:
			type: String
			default: ''
	productCategory:
		type: ObjectId
		ref: 'ProductCategory'

options =
	collection: 'products'

Schema = new mongoose.Schema SchemaFields, options

module.exports =  mongoose.model 'Product', Schema
