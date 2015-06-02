'use strict';

angular.module('homecenterApp')
  .controller('BusquedaCtrl', function ($scope,$http,busqueda,$translate) {
    $scope.busqueda = function () {

      $translate.use('en');

      var init = function(){
        busqueda.buscar(callback,$scope.terminoBusqueda);
      };

      var callback = function(data){
        $scope.maquinas = data;
      };

      init();


    };

  });
