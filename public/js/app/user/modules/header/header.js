'use strict';

(function (){

	var component = 'header';

	define([
			'canjs',
			'core/appState',
			'velocity',
			'css!app/modules/'+component+'/css/'+component+'.css'
		],
		function (can, appState, velocity) {

			return can.Control.extend({
				defaults: {
					viewpath: 'app/modules/'+component+'/views/'
				}
			}, {
				init: function () {
					var self = this;

					self.renderComponent();
				},

				renderComponent: function () {
					var self = this;

					self.element.prepend(
						can.view(self.options.viewpath + 'index.stache', {
							appState: appState
						})
					);

					self.element.append(
						can.view(self.options.viewpath + 'footer.stache', {
							appState: appState
						})
					);
				}
			});

		}
	);
})();