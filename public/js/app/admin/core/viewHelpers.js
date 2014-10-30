define([
	'canjs',
    'underscore',
	'lib/viewport',
    'core/appState'
],
	function (can, _, viewport, appState) {

		'use strict';

		function computedVal (value) {
			if (typeof value === 'function') {
				value = value();
			}
			return value;
		}

		can.mustache.registerHelper('is', function () {
			var options = arguments[arguments.length - 1],
				comparator = computedVal(arguments[0]),
				result = true;

			for (var i = 1, ln = arguments.length - 1; i < ln; i += 1) {
				if (comparator !== computedVal(arguments[i])) {
					result = false;
					break;
				}
			}

			return result ? options.fn() : options.inverse();
		});


		can.mustache.registerHelper('isnt', function (a, b, options) {
			var result = computedVal(a) !== computedVal(b);
			return result ? options.fn() : options.inverse();
		});

		can.mustache.registerHelper('or', function () {
			var options = arguments[arguments.length - 1],
				result = false;

			for (var i = arguments.length - 1; i--; ) {
				if (computedVal(arguments[i])) {
					result = true;
					break;
				}
			}

			return result ? options.fn() : options.inverse();
		});

		can.mustache.registerHelper('gt', function (a, b, options) {
			return computedVal(a) > computedVal(b)
				? options.fn()
				: options.inverse();
		});

		can.mustache.registerHelper('plus', function (a, b) {
			return computedVal(a) + computedVal(b);
		});

		can.mustache.registerHelper('minus', function (a, b) {
			return computedVal(a) - computedVal(b);
		});

		can.mustache.registerHelper('indexOfInc', function (array, element) {
			return computedVal(array).indexOf(computedVal(element)) + 1;
		});

		can.mustache.registerHelper('arrFind', function (array, id, findKey, key) {
			var item;
			id = computedVal(id);
			findKey = computedVal(findKey);
			key = computedVal(key);
			array = computedVal(array);
			if (id) {
				item = _.find(array, function (a) {
					return a.attr(findKey) === id;
				});
				if (item) {
					return item.attr(key);
				}
			}
			return '';
		});

		can.mustache.registerHelper('getArrayObjValue', function (array, index, key) {
			return array() ? array().attr(index() + '.' + key) : '';
		});

		can.mustache.registerHelper('sortedBy', function (collection, prop, direction, options) {
			if (arguments.length == 3) {
				options = direction;
				direction = false;
			}
			collection = computedVal(collection);
			if (collection && collection.attr('length') && prop) {
				var sorted = _.sortBy(collection, function (member) {
					return member.attr(prop);
				});

				if (direction && direction == 'desc') {
					sorted.reverse();
				}

				return _.map(sorted, function (member, index) {
					return options.fn(options.scope
						.add({'@index': index})
						.add(member)
					);
				}).join('');
			}
		});

		can.mustache.registerHelper('getBoxName', function (index, options) {
			var classes = ['bg-light-blue', 'bg-red', 'bg-green', 'bg-yellow', 'bg-maroon', 'bg-purple', 'bg-aqua'];
			index = computedVal(index);
			if (!index && index !== 0) {
				index = ~~(Math.random() * classes.length - 1);
			}
			return classes[index % classes.length];
		});

		can.mustache.registerHelper('wysihtml5', function (index) {
			return function (el) {
				$(el).wysihtml5();
			};
		});

		can.mustache.registerHelper('make3Col', function (index) {
			return (index() + 1) % 3 === 0 ? '<div class="clearfix"></div>' : '';
		});

		can.mustache.registerHelper('isChecked', function (value) {
			var html = '';

			if (value && value() && value() == 'on') {
				html += 'checked="checked"';
			}
			return html;
		});

		/*****************************************************/

		can.mustache.registerHelper('renderCategoriesOptions', function (categories, relatedCategory) {
			var html = '';

			if (relatedCategory && relatedCategory()) {
				categories().attr().forEach(function(element, index){
					if ( typeof relatedCategory() == "string" ) {
						if (relatedCategory() == element._id) {
							html += '<option selected="selected" value="' + element._id + '">' + element.lang[0].title + '</option>';
						} else {
							html += '<option value="' + element._id + '">' + element.lang[0].title + '</option>';
						}
					} else {
						if (relatedCategory().attr('_id') == element._id) {
							html += '<option selected="selected" value="' + element._id + '">' + element.lang[0].title + '</option>';
						} else {
							html += '<option value="' + element._id + '">' + element.lang[0].title + '</option>';
						}
					}
				});
			} else {
				categories().attr().forEach(function(element, index){
					html += '<option value="' + element._id + '">' + element.lang[0].title + '</option>';
				});
			}

			return html;
		});

        can.mustache.registerHelper('renderFoodOptions', function (productFood) {
            var html = '';

            if (productFood && productFood()) {

                appState.attr('locale.food').attr().forEach(function(foodElement, foodIndex) {
                    var equals = false;
                    equals = _.find(productFood().attr(), function(element) {
                        return foodElement.name == element;
                    });

                    if (equals) {
                        html += '<option selected="selected" value="' + foodElement.name + '">' + foodElement.locale + '</option>';
                    } else {
                        html += '<option value="' + foodElement.name + '">' + foodElement.locale + '</option>';
                    }
                });

            } else {
                appState.attr('locale.food').attr().forEach(function(element, index) {
                    html += '<option value="' + element.name + '">' + element.locale + '</option>';
                });
            }

            return html;
        });

		can.mustache.registerHelper('renderAuthorsOptions', function (authors, relatedAuthor) {
			var html = '';

			if (relatedAuthor && relatedAuthor()) {
				authors().attr().forEach(function(element, index){
					if ( typeof relatedAuthor() == "string" ) {
						if (relatedAuthor() == element._id) {
							html += '<option selected="selected" value="' + element._id + '">' + element.lang[0].name + ' ' + element.lang[0].surname + '</option>';
						} else {
							html += '<option value="' + element._id + '">' + element.lang[0].name + ' ' + element.lang[0].surname + '</option>';
						}
					} else {
						if (relatedAuthor().attr('_id') == element._id) {
							html += '<option selected="selected" value="' + element._id + '">' + element.lang[0].name + ' '+ element.lang[0].surname + '</option>';
						} else {
							html += '<option value="' + element._id + '">' + element.lang[0].name + ' ' + element.lang[0].surname + '</option>';
						}
					}
				});
			} else {
				authors().attr().forEach(function(element, index){
					html += '<option value="' + element._id + '">' + element.lang[0].name + ' ' + element.lang[0].surname + '</option>';
				});
			}

			return html;
		});

		can.mustache.registerHelper('renderVacanciesOptions', function (vacancies, relatedVacancy) {
			var html = '';

			if (relatedVacancy && relatedVacancy()) {
				vacancies().attr().forEach(function(element, index){
					if ( typeof relatedVacancy() == "string" ) {
						if (relatedVacancy() == element._id) {
							html += '<option selected="selected" value="' + element._id + '">' + element.lang[0].title + '</option>';
						} else {
							html += '<option value="' + element._id + '">' + element.lang[0].title + '</option>';
						}
					} else {
						if (relatedVacancy().attr('_id') == element._id) {
							html += '<option selected="selected" value="' + element.lang[0].title + '</option>';
						} else {
							html += '<option value="' + element._id + '">' + element.lang[0].title + '</option>';
						}
					}
				});
			} else {
				vacancies().attr().forEach(function(element, index){
					html += '<option value="' + element._id + '">' + element.lang[0].title + '</option>';
				});
			}

			return html;
		});
	}
);
