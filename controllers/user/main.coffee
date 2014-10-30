async = require 'async'
_ = require 'underscore'

View = require '../../lib/view'
Model = require '../../lib/model'

locale = require '../../locale'

getQueryLang = (url) ->
	myRegexp = /^\/(ru|ua|en)/
	match = myRegexp.exec url
	return match?[1] or 'ru'

exports.index = (req, res) ->
	lang = getQueryLang req.originalUrl
	loc = locale[lang]
	View.render 'user/index', res,
		locale: loc
		lang: if lang is 'ru' then '' else lang

exports.getPage = (req, res) ->
	reqLang = getQueryLang req.originalUrl
	async.parallel
		page: (proceed) ->
			Page = Model 'Page', 'findOne', null, link: req.params.link
			Page.lean().exec proceed
		lang: (proceed) ->
			Language = Model 'Language', 'findOne', null, isoCode: reqLang
			Language.lean().exec proceed
	, (err, data) ->
		unless data.page
			return View.clientFail 'Such link is not found', res

		data.page.lang = _.find data.page.lang, (l) ->
			return l.languageId.toString() == data.lang._id.toString()

		View.clientSuccess data: data.page, res

exports.ie = (req, res) ->
	View.render 'user/ie', res, {}
