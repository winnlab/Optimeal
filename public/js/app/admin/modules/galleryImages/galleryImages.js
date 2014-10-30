'use strict';

(function (){

	var component = 'galleryImage',
		componentUppercase = 'GalleryImage',
		componentPlural = 'galleryImages';

	define(
		['canjs', 'lib/list/list', 'modules/'+componentPlural+'/'+component+'', 'modules/'+componentPlural+'/'+componentPlural+'Model'],

		function (can, List, SingleUnit, Model) {

			return List.extend({
				defaults: {
					viewpath: 'app/modules/'+componentPlural+'/views/',

					Edit: SingleUnit,

					moduleName: componentPlural,
					Model: Model,

					deleteMsg: 'Вы действительно хотите удалить эту запись?',
					deletedMsg: 'Запись успешно удалена!',

					add: '.add'+componentUppercase+'',
					edit: '.edit'+componentUppercase+'',
					remove: '.remove'+componentUppercase+'',

					formWrap: '.'+component+'Form',

					parentData: '.'+component
				}
			}, {});

		}
	);

}());
