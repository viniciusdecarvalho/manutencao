;(function () { 'use strict';

    angular.module('Controllers.Chamados', [])

    .controller('ChamadosController', function($scope, Store) {

        $scope.chamado = {};

        Store.getChamados().then(function(chamados) {
            $scope.chamados = chamados;
        });

        Store.getMaquinas().then(function(maquinas) {
            $scope.maquinas = maquinas;
            $scope.maquina = $scope.maquinas[0];
        });

        $scope.novoChamado = function() {
            var chamado = angular.extend({data: new Date(), hora: new Date(), situacao: 'ABERTO'}, $scope.chamado);
            $scope.chamados.push(Object.create(chamado));
            $scope.chamado = {};
        }

    });

})();