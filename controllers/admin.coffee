express = require 'express'

Main = require './admin/main'
Page = require './admin/page'
Contact = require './admin/contact'
GalleryImage = require './admin/galleryImage'
Award = require './admin/award'
ProductCategory = require './admin/productCategory'
Product = require './admin/product'
ArticleCategory = require './admin/articleCategory'
Article = require './admin/article'
Vacancy = require './admin/vacancy.coffee'
GalleryVideo = require './admin/galleryVideo.coffee'
Author = require './admin/author.coffee'
VacancyResponse = require './admin/vacancyResponse'

Router = express.Router()

#########################

Router.get '/', Main.index
Router.get '/login', Main.login
Router.get '/logout', Main.logout

Router.post '/login', Main.doLogin

#------- Page ---------#

Router.use '/page/img', Page.restFile
Router.use '/page/:id?', Page.rest

#------- Contact ---------#

Router.use '/contact/:id?', Contact.rest

#------- Gallery ---------#

Router.use '/galleryImage/img', GalleryImage.restFile
Router.use '/galleryImage/:id?', GalleryImage.rest

#------- Awards ---------#

Router.use '/award/img', Award.restFile
Router.use '/award/:id?', Award.rest

#------- Product categories ---------#

Router.use '/productCategory/img', ProductCategory.restFile
Router.use '/productCategory/:id?', ProductCategory.rest

#------- Products ---------#

Router.use '/product/img', Product.restFile
Router.use '/product/:id?', Product.rest

#------- Article categories ---------#

Router.use '/articleCategory/img', ArticleCategory.restFile
Router.use '/articleCategory/:id?', ArticleCategory.rest

#------- Articles ---------#

Router.use '/article/img', Article.restFile
Router.use '/article/:id?', Article.rest

#------- Vacancies ---------#

Router.use '/vacancy/:id?', Vacancy.rest

#------- Gallery video ---------#

Router.use '/galleryVideo/img', GalleryVideo.restFile
Router.use '/galleryVideo/:id?', GalleryVideo.rest

#------- Authors ---------#

Router.use '/author/img', Author.restFile
Router.use '/author/:id?', Author.rest

#------- Vacancy responses ---------#

Router.use '/vacancyResponse/cv', VacancyResponse.restFile
Router.use '/vacancyResponse/:id?', VacancyResponse.rest

exports.Router = Router
exports.layoutPage = Main.pages
