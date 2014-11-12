define({
	router: {
		base: '/',
		modulesContainer: '#modules',
		routes: [{
			route: ':module',
			defaults: {
				module: 'sp',
				id: 'main-page'
			}
		}],
		modules: [
			{
				name: 'sp',
				path: 'app/modules/simplePage/simplePage'
			}
		]
	}
});
