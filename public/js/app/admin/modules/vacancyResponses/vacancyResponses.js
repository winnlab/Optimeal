'use strict';

(function (){

	var component = 'vacancyResponse',
		componentUppercase = 'VacancyResponse',
		componentPlural = 'vacancyResponses';

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
			}, {
				'.uploadedFile click': function (el, ev) {

					var win = window.open('/uploads/'+el.data('source'), '_blank');
					console.log(win);
					if(win){
						//Browser has allowed it to be opened
						win.focus();
					}else{
						window.location.href = '/uploads/'+el.data('source');
					}
				}
			});

		}
	);

}());
