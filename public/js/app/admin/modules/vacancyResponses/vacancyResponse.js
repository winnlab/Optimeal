'use strict';

(function(){

	var component = 'vacancyResponse',
		componentUppercase = 'VacancyResponse',
		componentPlural = 'vacancyResponses';

	define(
		[
			'canjs',
			'lib/edit/edit',
			'admin-lte/js/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.all.min',
			'css!admin-lte/css/bootstrap-wysihtml5/bootstrap3-wysihtml5.min'
		],

		function (can, Edit) {

			return Edit.extend({
				defaults: {
					viewpath: 'modules/'+componentPlural+'/views/',

					moduleName: component,

					successMsg: 'Успешно сохранен.',
					errorMsg: 'Ошибка сохранения.',

					form: '.set'+componentUppercase
				}
			}, {});

		}
	);

}());
