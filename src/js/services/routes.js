;(function() {

    angular.module('Services.Routes', [])

    .config(function($routeProvider) {

    	$routeProvider
    	.when('/', {
    		templateUrl:'home.html',  
    		reloadOnSearch: false
    	})
    	.when('/chamados', {
    		templateUrl:'chamados/list.html',  
            reloadOnSearch: false,
            controller: 'ChamadosController'
    	})
    	.when('/oficina', {
    		templateUrl:'oficina.html',  
            reloadOnSearch: false
    	})
    	.when('/gerencial', {
    		templateUrl:'gerencial/list.html',  
            reloadOnSearch: false
    	})
        .when('/gerencial/maquinas', {
    		templateUrl:'gerencial/maquinas/list.html',  
            reloadOnSearch: false
    	})
        .otherwise('/');
    })

    .run(function($rootScope, $location) {

        $rootScope.$on( "$routeChangeStart", function(event, next, current) {
            // if ($rootScope.loggedInUser == null) {                
            //     if ( next.templateUrl === "login.html" ) {

            //     } else {
            //         $location.path("/login");
            //     }
            // }

            $rootScope.loading = true;

        });

        $rootScope.$on( "$routeChangeSuccess", function(event, next, current) {
            console.log('page.show', next, current);

            setTimeout(function() {
                $rootScope.loading = false;
            }, 1000);            
        });        
    });

})(); 