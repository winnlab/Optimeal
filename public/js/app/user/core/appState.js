define([
	'canjs',
	'lib/viewport'
],
	function (can, viewport) {		
		var AppState = can.Map.extend({
				//Settings
				imgPath: '/img/',
				uploadPath: '/uploads/',

				locale: window.data.locale,
				lang: window.data.lang,

				toggleFullMenu: 'Open',
				blurred: false
			}),
			appState = new AppState();

		delete window.data;

		return appState;
	}
);
