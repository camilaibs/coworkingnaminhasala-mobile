angular.module('app.controllers', [])
  
.controller('porNoArCtrl', ['$scope', '$state', '$ionicPopup', 'TreinamentosService', 
function ($scope, $state, $ionicPopup, TreinamentosService) {
    $scope.cria = function(treinamento) {
        treinamento.fim.setDate(treinamento.inicio.getDate());
        treinamento.fim.setMonth(treinamento.inicio.getMonth());
        treinamento.fim.setFullYear(treinamento.inicio.getFullYear());

        TreinamentosService.salva(treinamento).then(
            function() {
                $state.go('menu.fiqueLigado');
            },
            function(resposta) {
                $ionicPopup.alert({
                    title: 'Ops, algo deu errado...',
                    okType: 'button-danger',
                    template: resposta.data
                });
            }
        );
    };
}])
   
.controller('menuCtrl', ['$scope', 
function ($scope) {

}])
   
.controller('fiqueLigadoCtrl', ['$scope', '$ionicPopup', 'TreinamentosService', 
function ($scope, $ionicPopup, TreinamentosService) {
    TreinamentosService.lista().then(
        function(resposta) {
            $scope.treinamentos = resposta.data;
        },
        function(resposta) {
            $ionicPopup.alert({
                title: 'Ops, algo deu errado...',
                okType: 'button-danger',
                template: resposta.data
            });
        }
    );
}])
   
.controller('contagemRegressiva321Ctrl', ['$scope', '$ionicPopup', 'TreinamentosService', 
function ($scope, $ionicPopup, TreinamentosService) {
    TreinamentosService.lista().then(
        function(resposta) {
            $scope.treinamentos = resposta.data;
        },
        function(resposta) {
            $ionicPopup.alert({
                title: 'Ops, algo deu errado...',
                okType: 'button-danger',
                template: resposta.data
            });
        }
    );
}])
   
.controller('vaiComecarCtrl', ['$scope', '$stateParams', '$ionicPopup', 'TreinamentosService', 
function ($scope, $stateParams, $ionicPopup, TreinamentosService) {
    var id = $stateParams.id;
    TreinamentosService.buscaPorId(id).then(
        function(resposta) {
            $scope.treinamento = resposta.data;
        },
        function(resposta) {
            $ionicPopup.alert({
                title: 'Ops, algo deu errado...',
                okType: 'button-danger',
                template: resposta.data
            });
        }
    );
}])
   
.controller('queroQueroCtrl', ['$scope', '$state', '$stateParams', '$ionicPopup', 'TreinamentosService', 
function ($scope, $state, $stateParams, $ionicPopup, TreinamentosService) {
    $scope.inscreve = function(email) {
        var id = $stateParams.id;
            TreinamentosService.adiciona(id, email).then(
            function() {
                $state.go('menu.aeeToDentro');
            },
            function(resposta) {
                $ionicPopup.alert({
                    title: 'Ops, algo deu errado...',
                    okType: 'button-danger',
                    template: resposta.data
                });
            }
        );
    };
}])
   
.controller('aeeToDentroCtrl', ['$scope', 
function ($scope) {
    
}])
 
