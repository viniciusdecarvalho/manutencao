;(function () { 'use strict';

    angular.module('Controllers.Chamados', [])

    .controller('ChamadosController', function($scope, Chamados, Maquinas) {

        Chamados.get().then(function(chamados) {
            $scope.chamados = chamados;
        });

        Maquinas.get().then(function(maquinas) {
            $scope.maquinas = maquinas;
            $scope.maquina = $scope.maquinas[0];
        });

    });

})();