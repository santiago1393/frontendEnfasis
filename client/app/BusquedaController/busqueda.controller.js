'use strict';

angular.module('homecenterApp')
  .controller('BusquedaCtrl', function ($scope,$http) {

    $scope.busqueda = function () {
      $http.get('http://localhost:8088/practica/maquinas/listBusqueda?busqueda='+$scope.terminoBusqueda)
        .success(function (result) {
          if (result.status == "success") {
            $scope.maquinas = result.response;
          }
        });
    };
  });
