url = require 'url'

pages = require '../meta/pages'

exports.isAjax = (req, res, layouts, next) ->
	path = url.parse req.path

	return next() if pages.indexOf(path.path) isnt -1 or req.xhr

	if path.path.indexOf('admin/') isnt -1 and layouts.admin
		return layouts.admin req, res
	else if layouts.user
		return layouts.user req, res

	return next()

