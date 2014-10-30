'use strict';

define([
		'canjs',
		'core/appState'
	],
	function (can, appState, $clamp) {

		can.mustache.registerHelper('getLang', function (lang, key, ellipsis, crop) {
			var langsArray = ['ru', 'ua', 'en'],
				result = '';

			if (typeof lang === 'function') {
				if (appState.attr('lang') == '') {
					result = lang()[0][key];
				} else if (appState.attr('lang') == 'ua') {
					result = lang()[1][key];
				} else if (appState.attr('lang') == 'en') {
					result = lang()[2][key];
				}
			} else {
				if (appState.attr('lang') == '') {
					result = lang[0][key];
				} else if (appState.attr('lang') == 'ua') {
					result = lang[1][key];
				} else if (appState.attr('lang') == 'en') {
					result = lang[2][key];
				}
			}

			if (ellipsis) {
				if (result.length > crop) {
					result = result.substring(0, crop);
					result += '...';
				}
			}

			return result;
		});

        can.mustache.registerHelper('renderRecommendations', function (productFood) {
            var html = '';
            if (productFood && productFood() && productFood().length > 0) {
                productFood().attr().forEach(function(element, index){
                    html += '<img src="'+appState.attr("imgPath") + 'rec' + element +'.png">';
                });
            }

            return html;
        });

		can.mustache.registerHelper('getDate', function(unixTimestamp) {
			var timestamp = '';

			if (unixTimestamp && typeof unixTimestamp === 'function') {

				var date = new Date(unixTimestamp());
				var day = date.getDay() < 10 ? '0'+date.getDay() : date.getDay();
				var month = date.getMonth() < 10 ? '0'+date.getMonth() : date.getMonth();
				var year = date.getFullYear();

				timestamp = day+'.'+month+'.'+year;

			} else {
				var date = new Date(unixTimestamp);
				var day = date.getDay() < 10 ? '0'+date.getDay() : date.getDay();
				var month = date.getMonth() < 10 ? '0'+date.getMonth() : date.getMonth();
				var year = date.getFullYear();

				timestamp = day+'.'+month+'.'+year;
			}

			return timestamp;
		});

		can.mustache.registerHelper('getCommentsAmount', function(comments) {
			var amount = null;

			if (comments && comments()) {

			}

			return amount;
		});

		can.mustache.registerHelper('getCurrentYear', function(comments) {
			var year = null;

			var date = new Date();
			year = date.getFullYear();

			return year;
		});
	}
);