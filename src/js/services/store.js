;(function() {

	angular.module('Services.Store', [])
	.factory('Store', function($q) {

        var chamados = [
            { id: 1, tipo: 'MECANICO', maquinaId: 1, data: '25/10/2016', hora: '13:58', situacao: 'ABERTO', prioridade: 'panel-warning', order: 2, defeito: 'Problema acontece depois de iniciar a maquina, impedidindo o seu uso' },
            { id: 2, tipo: 'ELETRICO', maquinaId: 1, data: '26/10/2016', hora: '11:22', situacao: 'ABERTO', prioridade: 'panel-danger', order: 1, defeito: 'Problema acontece depois de iniciar a maquina, impedidindo o seu uso' },
            { id: 2, tipo: 'ELETRICO', maquinaId: 2, data: '26/10/2016', hora: '11:22', situacao: 'ABERTO', prioridade: 'panel-danger', order: 1, defeito: 'Problema acontece depois de iniciar a maquina, impedidindo o seu uso' }
        ];

        var maquinas = [
            {id: 1, nome: 'Maquina 01'},
            {id: 3, nome: 'Maquina 02'},
            {id: 2, nome: 'Maquina 03'}
        ];

        return {
            getChamados: function() {
                var defer = $q.defer();

                setTimeout(function() {
                    defer.resolve(chamados);
                }, 500);

                return defer.promise;
            },
            getMaquinas: function() {
                var defer = $q.defer();

                setTimeout(function() {
                    defer.resolve(maquinas);
                }, 500);

                return defer.promise;
            }
        }

    });

})();	