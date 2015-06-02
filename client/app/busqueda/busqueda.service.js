'use strict';

angular.module('homecenterApp')
  .service('busqueda', function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    var self;

    self = this;

    self.buscar = function(callback, termino){
      $http.get('http://localhost:8088/practica/maquinas/listBusqueda?busqueda='+termino)
        .success(function (result) {
          if (result.status == "success") {
            callback(result.response);
          }
        });

    };


  });
