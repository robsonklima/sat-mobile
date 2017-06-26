angular.module("app").controller("chamadosListaCtrl", function ($scope, $rootScope, geoLocationService, osService) {
    
    $scope.orders = osService.find();
    $scope.errors = [];
    var posOptions = { timeout: 20000, enableHighAccuracy: true };
    
    angular.forEach($scope.orders, function(value, key) {
      geoLocationService.findByAddress($scope.orders[key].address).success(function(data, status) {
        if (data.status !== 'OK') {
            $scope.orders[key].formattedAddress = 'Endereço não encontrado.';
            return
        }

        $scope.orders[key].lat = data.results[0].geometry.location.lat;
        $scope.orders[key].lng = data.results[0].geometry.location.lng;
        $scope.orders[key].formattedAddress = data.results[0].formatted_address;
        geoLocationService.findDrivingRoute($rootScope.myLatitude, $rootScope.myLongitude, $scope.orders[key].lat,
            $scope.orders[key].lng).success(function(data, status) {
          if (data.rows[0].elements[0].status === 'ZERO_RESULTS') {
              $scope.orders[key].distance = 'Distância não encontrada.';          
              $scope.orders[key].duration = 'Duração não encontrada.';       
              return
          }

          $scope.orders[key].distance = data.rows[0].elements[0].distance.text;
          $scope.orders[key].duration = data.rows[0].elements[0].duration.text;
        }).error(function(data, status) {
            $scope.orders[key].distance = 'Distância não encontrada.';          
            $scope.orders[key].duration = 'Duração não encontrada.';          
        });
      }).error(function(data, status) {
          $scope.orders[key].formattedAddress = 'Endereço não encontrado.';
      });
    }, $scope.orders);
 
});