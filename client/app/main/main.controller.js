'use strict';

angular.module('homecenterApp')
  .controller('MainCtrl', function ($scope, $http,$location) {

     $http.get('http://localhost:8088/practica/maquinas/listBusqueda?busqueda=')
      .success(function (result) {
        if (result.status == "success") {
           $scope.maquinas = result.response;
        }
      });

    $scope.go = function ( path ) {
      $location.path( '/detail/' + path );
    };



  });
