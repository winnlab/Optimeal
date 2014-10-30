express = require 'express'
passport = require 'passport'

View = require '../lib/view'

Main = require './user/main'

ProductCategory = require './admin/productCategory.coffee'
Product = require './admin/product.coffee'
ArticleCategory = require './admin/articleCategory.coffee'
Article = require './admin/article.coffee'
Award = require './admin/award.coffee'
GalleryImage = require './admin/galleryImage.coffee'
Vacancy = require './admin/vacancy.coffee'
VacancyResponse = require './admin/vacancyResponse.coffee'
GalleryVideo = require './admin/galleryVideo.coffee'
Contact = require './admin/contact.coffee'

Router = express.Router()

socialConfig = require '../meta/socialConfig'

Router.use (req, res, next) ->
	ie = (/MSIE ([0-9]{1,}[\.0-9]{0,})/g).exec req.headers['user-agent']
	if ie is null
		next()
	else
		version = parseFloat ie[0].replace('MSIE ', '')
		if version > 8
			next()
		else
			Main.ie req, res


Router.get '/', Main.index

#------- Page ---------#

Router.get '/page/:link', Main.getPage

#------- ProductCategories ---------#

Router.get '/productCategory', ProductCategory.rest
Router.get '/productCategory/:link', ProductCategory.rest
Router.get '/productCategories/:link', ProductCategory.rest

#------- Products ---------#

Router.get '/product', Product.rest

#------- ArticleCategories ---------#

Router.get '/articleCategory', ArticleCategory.rest

#------- Articles ---------#

Router.get '/article', Article.rest
Router.get '/article/:link', Article.rest
Router.get '/articles/:link', Article.rest

#------- Awards ---------#

Router.get '/award', Award.rest

#------- GalleryImages ---------#

Router.get '/galleryImage', GalleryImage.rest

#------- Vacancy ---------#

Router.get '/vacancy', Vacancy.rest
Router.post '/vacancyResponse', VacancyResponse.rest

#------- Gallery Videos ---------#

Router.get '/galleryVideo', GalleryVideo.rest

#------- Contacts ---------#

Router.get '/contact', Contact.rest

exports.Router = Router
exports.layoutPage = Main.index
