require.config({
	baseUrl: '/js/lib',
	paths: {
		cssDir: '../../css/user',
		app: '../app/user',
		lib: '../app/admin/lib',
		src: '../app/user/src',
		can: 'canjs/amd/can/',
		canjs: 'canjs/amd/can',
		core: '../app/user/core',
		jquery: 'jquery/dist/jquery',
		underscore: 'underscore/underscore',
		modules: '../app/admin/modules',
		components: '../app/admin/components',
		viewHelpers: '../app/admin/core/viewHelpers',
		cssComponents: '../../css/admin/components',
		velocity: 'velocity/velocity.min',
		'custom-scrollbar': 'malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min',

		// Social
		fb: '../app/user/src/networks/fb-sdk',
		vk: '../app/user/src/networks/vk-sdk',
		ok: '../app/user/src/networks/ok-sdk'
	},
	map: {
		'*': {
			'css': 'require-css/css'
		}
	},
	shim: {
		'jquery': {
			exports: '$'
		},
		'underscore': {
			exports: '_'
		},
		'funcunit': {
			exports: 'F'
		},
		'canjs': {
			deps: [
				'jquery',
				'can/route/pushstate',
				'can/map/define',
				'can/map/delegate',
				'can/map/sort',
				'can/list/promise',
				'can/construct/super'
			]
		},
		velocity: {
			deps: [
				'jquery'
			]
		},
		'fb': {
			exports: 'FB'
		},
		'vk': {
			exports: 'VK'
		},
		'ok': {
			exports: 'OK'
		}

	},
	waitSeconds: 40
});
