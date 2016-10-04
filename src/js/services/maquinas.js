;(function() {

	angular.module('Api.Maquinas', [])
	.factory('Maquinas', function($q) {

        var maquinas = [
            {id: 1, nome: 'Maquina 01'},
            {id: 3, nome: 'Maquina 02'},
            {id: 2, nome: 'Maquina 03'}
        ];

        return {
            get: function() {
                var defer = $q.defer();

                setTimeout(function() {
                    defer.resolve(maquinas);
                }, 500);

                return defer.promise;
            }
        }

    });

})();	