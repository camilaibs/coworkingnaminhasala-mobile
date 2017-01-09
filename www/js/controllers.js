angular.module('app.controllers', [])
  
.controller('porNoArCtrl', ['$scope', '$state', 'TreinamentosService', 
function ($scope, $state, TreinamentosService) {
    $scope.treinamento = {
        emails: []
    };

    $scope.cria = function(treinamento) {
        TreinamentosService.salva(treinamento);
        $state.go('menu.fiqueLigado');
    };
}])
   
.controller('menuCtrl', ['$scope', 
function ($scope) {

}])
   
.controller('fiqueLigadoCtrl', ['$scope', 'TreinamentosService', 
function ($scope, TreinamentosService) {
    $scope.treinamentos = TreinamentosService.lista();
}])
   
.controller('contagemRegressiva321Ctrl', ['$scope', 'TreinamentosService', 
function ($scope, TreinamentosService) {
    $scope.treinamentos = TreinamentosService.lista();
}])
   
.controller('vaiComecarCtrl', ['$scope', '$stateParams', 'TreinamentosService', 
function ($scope, $stateParams, TreinamentosService) {
    var id = $stateParams.id;
    $scope.treinamento = TreinamentosService.buscaPorId(id);
}])
   
.controller('queroQueroCtrl', ['$scope', '$state', '$stateParams', 'TreinamentosService', 
function ($scope, $state, $stateParams, TreinamentosService) {
    $scope.inscreve = function(email) {
        var id = $stateParams.id;
        TreinamentosService.adiciona(id, email);
        $state.go('menu.aeeToDentro');
    };
}])
   
.controller('aeeToDentroCtrl', ['$scope', 
function ($scope) {
    
}])
 