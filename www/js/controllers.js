angular.module('app.controllers', [])
  
.controller('porNoArCtrl', ['$scope', '$state', 'TreinamentosService', 
function ($scope, $state, TreinamentosService) {
    $scope.cria = function(treinamento) {
        treinamento.fim.setDate(treinamento.inicio.getDate());
        treinamento.fim.setMonth(treinamento.inicio.getMonth());
        treinamento.fim.setFullYear(treinamento.inicio.getFullYear());

        TreinamentosService.salva(treinamento).then(
            function() {
                $state.go('menu.fiqueLigado');
            },
            function(resposta) {
                alert(resposta.data);
            }
        );
    };
}])
   
.controller('menuCtrl', ['$scope', 
function ($scope) {

}])
   
.controller('fiqueLigadoCtrl', ['$scope', 'TreinamentosService', 
function ($scope, TreinamentosService) {
    TreinamentosService.lista().then(
        function(resposta) {
            $scope.treinamentos = resposta.data;
        },
        function(resposta) {
            alert(resposta.data);
        }
    );
}])
   
.controller('contagemRegressiva321Ctrl', ['$scope', 'TreinamentosService', 
function ($scope, TreinamentosService) {
    TreinamentosService.lista().then(
        function(resposta) {
            $scope.treinamentos = resposta.data;
        },
        function(resposta) {
            alert(resposta.data);
        }
    );
}])
   
.controller('vaiComecarCtrl', ['$scope', '$stateParams', 'TreinamentosService', 
function ($scope, $stateParams, TreinamentosService) {
    var id = $stateParams.id;
    TreinamentosService.buscaPorId(id).then(
        function(resposta) {
            $scope.treinamento = resposta.data;
        },
        function(resposta) {
            alert(resposta.data);
        }
    );
}])
   
.controller('queroQueroCtrl', ['$scope', '$state', '$stateParams', 'TreinamentosService', 
function ($scope, $state, $stateParams, TreinamentosService) {
    $scope.inscreve = function(email) {
        var id = $stateParams.id;
            TreinamentosService.adiciona(id, email).then(
            function() {
                $state.go('menu.aeeToDentro');
            },
            function(resposta) {
                alert(resposta.data);
            }
        );
    };
}])
   
.controller('aeeToDentroCtrl', ['$scope', 
function ($scope) {
    
}])
 
