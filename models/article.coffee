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
	link:
		type: String
		trim: true
	view:
		type: String
		trim: true
	ready:
		type: String
	createdAt:
		type: Number
		default: Date.now
	postDate:
		type: Number
		default: Date.now
	img:
		type: String
		default: ''
	titleColor:
		type: String
		default: '#ffffff'
	textColor:
		type: String
		default: '#ffffff'
	articleCategory:
		type: ObjectId
		ref: 'ArticleCategory'
	author:
		type: ObjectId
		ref: 'Author'

options =
	collection: 'articles'

Schema = new mongoose.Schema SchemaFields, options

module.exports =  mongoose.model 'Article', Schema
