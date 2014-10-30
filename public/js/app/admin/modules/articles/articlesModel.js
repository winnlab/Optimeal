'use strict';

(function () {

	var component = 'article';

	define(
		[
			'canjs',
			'lib/model/baseModel'
		],

		function (can, baseModel) {

			return can.Model.extend({
				id: '_id',
				resource: baseModel.chooseResource('/' + component),
				findBy: function (params, success, error) {
					var url = params.url || baseModel.chooseResource('/' + component);
					delete params.url;
					return can.ajax({
						url: url,
						data: params,
						success: success || function () {},
						error: error || function () {}
					})
				},
				parseModel: baseModel.parseModel,
				parseModels: baseModel.parseModels
			}, {
				uploaded: baseModel.simpleUploaded,
				removeUploaded: baseModel.simpleRemoveUploaded
			});

		}
	);

}());
