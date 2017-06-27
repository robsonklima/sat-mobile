angular.module("app").controller("chamadosListaCtrl", function ($scope, $cordovaGeolocation, geoLocationService, osService) {
    $scope.errors = [];
    $scope.loading = true;
    var posOptions = { timeout: 20000, enableHighAccuracy: true };
    
    document.addEventListener("deviceready", function () {
      $cordovaGeolocation.getCurrentPosition(posOptions).then(function(position) {
         var myLat = position.coords.latitude;
         var myLng = position.coords.longitude;
          
         $scope.orders = osService.find();
          
         angular.forEach($scope.orders, function(value, key) {
           geoLocationService.findByAddress($scope.orders[key].address).success(function(data, status) {
             if (data.status !== 'OK') {
                 $scope.orders[key].formattedAddress = 'Endereço não encontrado.';
                 return
             }
 
             $scope.orders[key].lat = data.results[0].geometry.location.lat;
             $scope.orders[key].lng = data.results[0].geometry.location.lng;
             $scope.orders[key].formattedAddress = data.results[0].formatted_address;
             geoLocationService.findDrivingRoute(myLat, myLng, $scope.orders[key].lat,
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
      }, function(error) {
          $scope.errors.push({details: error.message});
      }).finally(function() {
          $scope.loading = false;
      });
    }, false);
});