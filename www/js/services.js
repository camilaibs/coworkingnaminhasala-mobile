angular.module('app.services', [])

.service('TreinamentosService', [function(){
    var treinamentos = [
        {
            id: 1,
            titulo: 'Backizinho fala comigo, por favor, por favor...',
            inicio: new Date(2017, 0, 8, 19, 0, 0, 0),
            fim: new Date(2017, 0, 8, 21, 0, 0, 0),
            onde: 'https://www.youtube.com/watch?v=8IaxMX9wkD0',
            emails: ['camila@coworkingnaminhasala.com', 'pessoinha@email.com', 'outro@email.com']
        },
        {
            id: 2,
            titulo: 'Vamos Back, abre o jogo, fala logo quem você é!',
            inicio: new Date(2017, 0, 11, 19, 0, 0, 0),
            fim: new Date(2017, 0, 11, 21, 0, 0, 0),
            onde: 'https://www.youtube.com/watch?v=bNfHHgVSKNM',
            emails: ['amila@coworkingnaminhasala.com', 'pessoinha@email.com', 'outro@email.com']
        }
    ];

    var salva = function(treinamento) {
        treinamentos.push(treinamento);
    };

    var lista = function() {
        return treinamentos
    };

    var buscaPorId = function(id) {
        return treinamentos.find(function(treinamento) {
            return treinamento.id == id;
        });
    };

    var adiciona = function(id, email) {
       var treinamento = buscaPorId(id);
       treinamento.emails.push(email);
    };

    return {
        salva: salva,
        lista: lista,
        buscaPorId: buscaPorId,
        adiciona: adiciona
    };
}]);