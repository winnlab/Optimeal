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
		required: true
	view:
		type: String
		trim: true
	img:
		type: String
		default: ''

options =
	collection: 'galleryImages'

Schema = new mongoose.Schema SchemaFields, options

module.exports =  mongoose.model 'GalleryImage', Schema
