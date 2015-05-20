'use strict';

angular.module('homecenterApp')
  .controller('DetailCtrl', function ($scope,$stateParams, $http, $location ) {

    $http.get('  http://localhost:8088/practica/maquinas/read?id='+$stateParams.id)
      .success(function (result) {
        if (result.status == "success") {
          $scope.detalle = result.response[0];

        }
      });

    $scope.eliminar = function ( value ) {
      if(confirm('¿ESTA SEGURO QUE DESEA ELIMINAR?')) {
        $http.get('  http://localhost:8088/practica/maquinas/delete?id=' + value)
          .success(function (result) {
            if (result.status == "success") {
              alert('ELIMINADA CORRECTAMENTE');
              $location.path('/');
            }
          });
      }
    };
  });
