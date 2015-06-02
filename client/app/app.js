'use strict';

angular.module('homecenterApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'pascalprecht.translate',
  'ui.bootstrap'
])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider,$translateProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);

    $translateProvider.translations('en', {
      TITULO:  'HOMECENTER MACHINES SEARCH',
      BUSCADOR:      'INSERT THE NAME',
      RESULTADOS:     'RESULTS'

    });

    $translateProvider.translations('es', {
      TITULO:  'BUSCADOR DE MAQUINAS HOMECENTER',
      BUSCADOR:      'INGRESE EL NOMBRE',
      RESULTADOS:     'RESULTADOS'

    });

    $translateProvider.preferredLanguage('es');


  });
