;(function() {

	angular.module('Api.Chamados', [])
	.factory('Chamados', function($q) {

        var chamados = [
            { id: 1, tipo: 'MECANICO', maquinaId: 1, data: '25/10/2016', hora: '13:58', situacao: 'ABERTO', prioridade: 'panel-warning', order: 2 },
            { id: 2, tipo: 'ELETRICO', maquinaId: 1, data: '26/10/2016', hora: '11:22', situacao: 'ABERTO', prioridade: 'panel-danger', order: 1 },
            { id: 2, tipo: 'ELETRICO', maquinaId: 2, data: '26/10/2016', hora: '11:22', situacao: 'ABERTO', prioridade: 'panel-danger', order: 1 }
        ];

        return {
            get: function() {
                var defer = $q.defer();

                setTimeout(function() {
                    defer.resolve(chamados);
                }, 500);

                return defer.promise;
            }
        }

    });

})();	