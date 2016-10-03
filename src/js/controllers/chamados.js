;(function () { 'use strict';

    angular.module('Controllers.Chamados', [])

    .controller('Chamados', function($scope) {

        $scope.chamados = [
            { id: 1, tipo: 'MECANICO', data: '25/10/2016', hora: '13:58', situacao: 'ABERTO', prioridade: 'panel-warning', order: 2 },
            { id: 2, tipo: 'ELETRICO', data: '26/10/2016', hora: '11:22', situacao: 'ABERTO', prioridade: 'panel-danger', order: 1 }
        ];

    });

})();