define([
	'canjs',
	'core/appState'
],
	function (can, appState) {

		return can.Control.extend({
			defaults: {
				viewpath: '',
				viewName: 'index.stache',

				// Edit entity controller
				Edit: function() {},
				// Name for list entity in view
				moduleName: 'list',
				// Link to entity constructor model
				Model: can.Model,

				deleteMsg: 'Вы действительно хотите удалить эту сущность?',
				deletedMsg: 'Сущность успешно удалена',
				deletedErr: 'Ошибка удаления сущности',

				// Selectors
				add: '.add',
				edit: '.edit',
				remove: '.remove',
				toList: '.toList',
				// Selector for entity form block wrap
				formWrap: '.formWrap',
				// Entity selector wich rich with #data view helper
				parentData: '.entity'
			}
		}, {
			init: function () {

				var self = this,
					options = self.options,
					route = can.route.attr();

				self.module = new can.Map({
					display: 'list'
				});

				self.module.attr(options.moduleName, new options.Model.List({}));

				if (route.entity_id && route.action) {
					self.module.attr('display', 'set');
					can.when(
						self.module.attr(options.moduleName)
					).then(function () {
						self.setDocCallback(route.entity_id);
					});
				}

				self.element.html(can.view(options.viewpath + options.viewName, self.module));

			},

			/*
			 * Routes
			 */

			':module route': function (data) {
				if (data.module === this.options.moduleName) {
					this.toListCallback();
				}
			},

			':module/:action/:entity_id route': function (data) {
				if (data.module === this.options.moduleName) {
					this.setDocCallback(data.entity_id);
				}
			},

			'{add} click': function () {
				this.setDoc();
			},

			'{edit} click': function (el) {
				var options = this.options,
					doc = el.parents(options.parentData).data(options.moduleName);
				this.setDoc(doc.attr('_id'));
			},

			setDoc: function (id) {
				can.route.attr({
					entity_id: id || '0',
					action: 'set'
				});
			},

			setDocCallback: function (id) {

				this.module.attr('display', 'set');

				if (this.module.attr('setEntity')
					&& this.module.attr('setEntity')() === id) {
					return;
				}

				var options = this.options,
					wrap = this.element.find(options.formWrap).html('<div class="right-side"></div>'),
					area = wrap.children('div'),
					doc = _.find(this.module.attr(options.moduleName), function (doc) {
						return doc && doc.attr('_id') === id;
					});

				this.module.attr('setEntity', can.compute(id));

				this.initSetControl(
					area,
					doc ? doc : new options.Model(),
					this.module.attr('setEntity')
				);
			},

			initSetControl: function (area, doc, entity) {
				new this.options.Edit(area, {
					doc: doc,
					entity: entity
				});
			},

			'{toList} click': function () {
				can.route.attr({
					entity_id: undefined,
					action: undefined
				});
			},

			toListCallback: function () {
				this.module.attr({
					'display': 'list'
				});
			},

			'{remove} click': function (el) {
				var options = this.options,
					doc = el.parents(options.parentData).data(options.moduleName);

				if (confirm(options.deleteMsg)) {
					doc.destroy().always(function (doc, status, def) {
						appState.attr('notification', {
							status: status,
							msg: status === 'success'
								? options.deletedMsg
								: options.deletedErr
						});
					});
				}
			},

			'{Model} created': function (Model, ev, doc) {
				var self = this,
					docs = self.module.attr(self.options.moduleName);

				docs.push(doc);
			}
		});
	}
);
