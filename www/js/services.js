angular.module('app.services', [])

.service('TreinamentosService', ['$http', function($http){
    var api = 'http://localhost:8080';

    // POST /treinamentos
    var salva = function(treinamento) {
        return $http.post(api + '/treinamentos', treinamento);
    };

    // GET /treinamentos
    var lista = function() {
        return $http.get(api + '/treinamentos');
    };

    // GET /treinamentos/:id
    var buscaPorId = function(id) {
        return $http.get(api + '/treinamentos/' + id); // ex.: /treinamentos/1
    };

    // PUT /treinamentos/:id
    var adiciona = function(id, endereco) {
       var email = {
         endereco: endereco
       };
       return $http.put(api +'/treinamentos/' + id + '/emails', email);
    };

    return {
        salva: salva,
        lista: lista,
        buscaPorId: buscaPorId,
        adiciona: adiciona
    };
}]);
