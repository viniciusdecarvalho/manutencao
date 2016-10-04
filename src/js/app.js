;(function() {

	angular.module('Localizandoapp2', [		
		'ngRoute',
		'mobile-angular-ui',
		'Services.Routes',
		'Api.Chamados',
		'Api.Maquinas',
		'Controllers.Chamados'
	])
	.config(function ($compileProvider, $locationProvider, $httpProvider, $logProvider) {
		$compileProvider.debugInfoEnabled(true);
		$logProvider.debugEnabled();

		$httpProvider.defaults.headers.common['Content-Type'] = 'application/json';
		$httpProvider.defaults.headers.common['Accept'] = ['application/json', 'text/html'];
		$httpProvider.defaults.timeout = 30000;
	});

})();	