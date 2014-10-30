'use strict';

(function (){

	var component = 'simplePage',
		componentRoute = 'page';

	define(
		[
			'canjs',
			'core/appState',
			'bx-slider/jquery.bxslider.min',
			'css!bx-slider/jquery.bxslider.css',
			'velocity',
			'css!app/modules/'+component+'/css/'+component+'.css'
		],

		function (can, appState) {

			return can.Control.extend({
				defaults: {
					viewpath: '/js/app/user/modules/'+component+'/views/'
				}
			}, {

				init: function () {
					var self = this,
						lang = appState.attr('lang'),
						link = can.route.attr('id');
					self.link = link;

					can.ajax({
						url: (lang ? '/' + lang : '') + '/'+componentRoute+'/' + link
					}).done(function (data) {
						self.render(data);
					}).fail(function () {
						self.loaded();
					});

				},

				render: function (data) {
					var self = this;
					self.view = data.data.view;

					self.element.html(
						can.view(self.options.viewpath + (data.data.view ? data.data.view : 'index') + '.stache', {
							appState: appState,
							component: data.data
						})
					);
					self.loaded();
				},

				loaded: function () {
					var self = this;
					if (self.options.isReady) {
						self.options.isReady.resolve();

						if (self.link == 'main-page') {
							self.carousel();
						}
					}
				},

				carousel: function () {
					var self = this;

					$('.products', self.element).bxSlider();
				},

				'.closedLogo click': function (el, ev) {
					el.parents('.popup').addClass('active');
				},

				'.popupClose click': function (el, ev) {
					el.parents('.popup').removeClass('active');
				}
			});

		}
	);
})();
