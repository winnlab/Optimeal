require(['/js/app/user/req.config.js'], function () {

	require([
			'app/router/router',
			'app/modules/header/header',
			'core/config',
			'core/appState',
			'core/viewHelpers',
			'viewHelpers',
			'velocity',

			'src/sprintf',

			'css!cssDir/reset.css',
			'css!cssDir/base.css'
		],
		function (
			Router,
			Header,
			config,
			appState
		) {

			var body = $('body');

			appState.attr('router', new Router(body, config.router));
			appState.attr('header', new Header(body));
		}
	);
});
