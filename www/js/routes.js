angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    
  .state('menu.porNoAr', {
    url: '/por-no-ar',
    views: {
      'side-menu21': {
        templateUrl: 'templates/porNoAr.html',
        controller: 'porNoArCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('menu.fiqueLigado', {
    url: '/fique-ligado',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fiqueLigado.html',
        controller: 'fiqueLigadoCtrl'
      }
    }
  })

  .state('menu.contagemRegressiva321', {
    url: '/contagem-regressiva-321',
    views: {
      'side-menu21': {
        templateUrl: 'templates/contagemRegressiva321.html',
        controller: 'contagemRegressiva321Ctrl'
      }
    }
  })

  .state('menu.vaiComecar', {
    url: '/vai-comecar/:id',
    views: {
      'side-menu21': {
        templateUrl: 'templates/vaiComecar.html',
        controller: 'vaiComecarCtrl'
      }
    }
  })

  .state('menu.queroQuero', {
    url: '/quero-quero/:id',
    views: {
      'side-menu21': {
        templateUrl: 'templates/queroQuero.html',
        controller: 'queroQueroCtrl'
      }
    }
  })

  .state('menu.aeeToDentro', {
    url: '/aee-to-dentro',
    views: {
      'side-menu21': {
        templateUrl: 'templates/aeeToDentro.html',
        controller: 'aeeToDentroCtrl'
      }
    }
  })

  $urlRouterProvider.otherwise('/side-menu21/por-no-ar')

});