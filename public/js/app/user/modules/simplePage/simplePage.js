'use strict';

(function (){
	var component = 'simplePage',
		componentRoute = 'page';
	
	define(
		[
			'canjs',
			'core/appState',
			'jquery-ui',
			'bx-slider/jquery.bxslider.min',
			'css!bx-slider/jquery.bxslider.css',
			'css!jquery-ui-1.11.2/jquery-ui.min.css',
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
						
						if(this.link == 'immunity') {
							this.immunity_slider();
							this.variables();
						}
					}
				},
				
				variables: function() {
					this.window = $(window);
					this.meal_content = this.element.find('.meal_content');
					this.meal_image_width = this.meal_content.find('.meal_image').width();
				},
				
				carousel: function () {
					var self = this;
					
					$('.products', self.element).bxSlider();
				},
				
				immunity_slider: function() {
					var that = this,
						options = {
						min: 0,
						max: 1.01,
						step: 0.01,
						values: [0],
						slide: function(event, ui) {
							that.immunity_slider_change(ui.values[0]);
						},
						change: function(event, ui) {
							that.immunity_slider_change(ui.values[0]);
						}
					};
					
					this.element.find('.slider').slider(options);
				},
				
				immunity_slider_change: function(value) {
					var wnd_width = this.window.width(),
						difference = wnd_width - this.meal_image_width,
						left;
					
					if(difference > 0) {
						difference = 0;
					}
					
					left = difference * value;
					
					this.meal_content.css({
						left: left
					});
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